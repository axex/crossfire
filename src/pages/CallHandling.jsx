define(function (require, exports, module) {

  var {React, Router} = require('module!../../../libReact/src/main');
  var PhoneCard = require('jsx!../components/phone-card.jsx');
  var GroupCard = require('jsx!../components/group-card.jsx');
  var OtherUserPhoneList = require('jsx!../components/other-user-phone-list.jsx');
  var CrossfireButtonToolbar = require('jsx!../components/crossfire-button-toolbar.jsx');

  module.exports = React.createClass({

    contextTypes: {
      module: React.PropTypes.object.isRequired
    },

    getInitialState() {
      return {
        otherUserPhones: [],
        groupPhones: [],
        additionalPhoneListClass: 'displayColumn',
        setOrderClassFunc: ((className)=> {
          this.state.additionalPhoneListClass = className;
          this.setState(this.state);
        }),
        forwardedPhonesNum: 0
      };
    },
    onSaveFunc() {
      console.log(this.state);
    },

    findCard(id) {
      var cards = this.state.groupPhones;
      var card = cards.filter(function (c) {
        return c.id === id;
      })[0];

      return {
        card: card,
        index: cards.indexOf(card)
      };
    },

    moveCard(id, atIndex) {
      var foundCard = this.findCard(id);
      var draggedCard = foundCard.card;
      var draggedIndex = foundCard.index;

      this.state = React.addons.update(this.state, {
        groupPhones: {
          $splice: [
            [draggedIndex, 1],
            [atIndex, 0, draggedCard]
          ]
        }
      });

      this.setState(this.state);
    },

    addOtherPhone() {
      var groupPhones = this.state.groupPhones;
      var len = groupPhones.length;

      groupPhones.push({
        id: len,
        group: false,
        items: [
          {
            addDigitsToCallerId: null,
            askPIN: false,
            dNIS: null,
            deviceExists: false,
            deviceType: 0,
            digitsForCallerId: "",
            editable: false,
            enabled: true,
            firstName: "",
            forwardPhoneId: 0,
            forwarding: true,
            lastName: "",
            mailboxId: 0,
            orderBy: 5,
            ownedByThisMailbox: false,
            phoneId: 400427111008,
            phoneLineId: 0,
            phoneNumberInfo: {
              alternate: false,
              details: null,
              formattedNumber: "44 (234) 567-8900",
              name: "new Phone",
              number: "+4412345678900"
            },
            pin: "",
            playMailboxName: false,
            ringCycle: 4,
            ringDelay: 16,
            skipFindMeMenu: true,
            type: "Other2"
          }

        ]
      });
      this.setState({
        groupPhones: groupPhones,
        forwardedPhonesNum: this.state.forwardedPhonesNum + 1
      });
    },

    addOtherUserPhone(otherUserPhone) {
      var groupPhones = this.state.groupPhones;
      var len = groupPhones.length;
      var otherUserPhones = this.state.otherUserPhones.filter(function(phone) {
            return phone.phoneNumberInfo.number != otherUserPhone.phoneNumberInfo.number;
      });

      groupPhones.push({
        id: len,
        group: false,
        items: [otherUserPhone]
      });
      this.setState({
        otherUserPhones : otherUserPhones,
        groupPhones: groupPhones,
        forwardedPhonesNum: this.state.forwardedPhonesNum + 1
      });
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
      }, (response) => {
        businessHoursRule = response.rules.filter(function (rule) {
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
            groupPhones = groupPhones.map(function (groupPhone, index) {
              return {
                id: index,
                group: groupPhone.length > 1,
                items: groupPhone
              }
            });
            this.setState({
              forwardedPhonesNum: phones.length - otherUserPhones.length,
              groupPhones: groupPhones,
              otherUserPhones: otherUserPhones
            });

          }, null, true, true);
      }, null, true, true);
    },

    render() {
      var phoneListClass = "Bootstrap CallHandling-phone-list ";
      phoneListClass += this.state.additionalPhoneListClass;

      return <div>
        <CrossfireButtonToolbar setOrderClassFunc={this.state.setOrderClassFunc} addOtherPhone={this.addOtherPhone}
                                forwardedPhonesNum={this.state.forwardedPhonesNum} onSaveFunc={this.onSaveFunc}/>
        <OtherUserPhoneList otherUserPhones={this.state.otherUserPhones} addOtherUserPhone = {this.addOtherUserPhone}/>

        <div className={phoneListClass}>
          {
            this.state.groupPhones.map((gp, index) => {
              if (gp.group) {
                return <GroupCard index={index} id={gp.id} key={gp.id} phones={gp.items} moveCard={this.moveCard}
                                  findCard={this.findCard}/>;
              } else {
                return <PhoneCard index={index} id={gp.id} key={gp.id} phone={gp.items[0]} moveCard={this.moveCard}
                                  findCard={this.findCard}/>
              }
            })
          }
        </div>
      </div>
    }

  });

});
