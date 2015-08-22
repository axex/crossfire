define(function (require, exports, module) {

  var {React, Router} = require('module!../../../libReact/src/main'),
    {TabbedArea, TabPane} = require('module!../../../libReactBootstrap/src/main');
  var PhoneCard = require('jsx!../components/PhoneCard.jsx');
  var reactDND = require('../vendors/react-dnd');
    var OtherUserPhoneList = require('jsx!../components/OtherUserPhoneList.jsx');

  module.exports = React.createClass({

    contextTypes: {
      module: React.PropTypes.object.isRequired
    },

    getInitialState() {
      return {
        data: {
            phoneWrap: {
                otherUserPhones: [],
                groupPhones: []
            },
          key: 1
        }
      };
    },

    handleSelect(key) {
      this.state.data.key = key;
      this.setState(this.state.data);
    },

    componentWillMount() {
      if (!RC.Config.loggedMailboxId)
        RC.Config.load(()=> {
          var wrapper = this.context.module.getContext().getWrapper();
          this.loadForwardPhones(wrapper);
        });
    },

    loadForwardPhones(wrapper) {
      var mailboxId = RC.Config.loggedMailboxId;
      var businessHoursRule;
      wrapper.send("rules.listHoursRules", {
        mid: mailboxId
      },(response) => {
        businessHoursRule = response.rules.filter(function(rule) {
          return rule.type == "BusinessHours";
        });
        wrapper.send("rules.getHoursRule", {
            loadAllPhones: true,
            mid: mailboxId,
            rid: businessHoursRule[0].id,
            isCompany: false
          },
          (response) => {
            var phones = response.rule.phones;


            var forwardPhones = {};
            var otherUserPhones = [];
            var disabledDelay = 10000;


            Array.each(phones, function (phone) {

              if (phone.type == 'PhoneLine' && !phone.ownedByThisMailbox && !phone.enabled) {
                otherUserPhones.push(phone);
              } else {
                var ringDelay = (phone.enabled ? phone.ringDelay : ++disabledDelay);
                if (!(ringDelay in forwardPhones)) {
                  forwardPhones[ringDelay] = [phone];
                } else {
                  forwardPhones[ringDelay].push(phone);
                }

              }

            });
            var groupPhones = [];
            for (var i in forwardPhones) {
              groupPhones.push(forwardPhones[i]);
            }

            this.state.data.phoneWrap = {
              groupPhones: groupPhones,
              otherUserPhones: otherUserPhones
            };

            this.setState(this.state);

          },null,true,true);
      },null,true,true);
    },

    render() {
      return (
        <TabbedArea activeKey={this.state.data.key} onSelect={this.handleSelect}>
          <TabPane eventKey={1} tab='Sequentially'>
              <OtherUserPhoneList otherUserPhones = {this.state.data.phoneWrap.otherUserPhones}/>

            <div className="Bootstrap CallHandling-phone-list">
                {
                  this.state.data.phoneWrap.groupPhones.map((gp) => {
                    if(gp.length == 1) {
                      return <PhoneCard phone={gp[0]}/>;
                    }
                  })
                }
            </div>



          </TabPane>
          <TabPane eventKey={2} tab='Simultaneously'>Simultaneously canvas</TabPane>
        </TabbedArea>
      );
    }

  });

});
