define(function (require, exports, module) {

  var {React, Router} = require('module!../../../libReact/src/main'),
    {TabbedArea, TabPane} = require('module!../../../libReactBootstrap/src/main');
  var PhonesWrap = require('jsx!../components/PhonesWrap.jsx');
  var reactDND = require('../vendors/react-dnd');

  module.exports = React.createClass({

    contextTypes: {
      module: React.PropTypes.object.isRequired
    },

    getInitialState() {
      return {
        data: {
          phones: {},
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
      wrapper.send("rules.getHoursRule", {
          loadAllPhones: true,
          mid: RC.Config.loggedMailboxId,
          rid: '400019274008',
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

          this.setState(this.state.data);

        },
        null,
        true,
        true);

    },

    render() {
      return (
        <TabbedArea activeKey={this.state.data.key} onSelect={this.handleSelect}>
          <TabPane eventKey={1} tab='Sequentially'>
            <h1>something</h1>

            <div>Sequentially canvas</div>

            <div className="Bootstrap mymodule">
                <PhonesWrap phoneWrap={this.state.data.phoneWrap} />;
            </div>


          </TabPane>
          <TabPane eventKey={2} tab='Simultaneously'>Simultaneously canvas</TabPane>
        </TabbedArea>
      );
    }

  });

});
