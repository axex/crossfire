define(function (require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main'),
        {TabbedArea, TabPane} = require('module!../../../libReactBootstrap/src/main');
    var PhoneCard = require('jsx!../components/phone-card.jsx');
    var reactDND = require('../vendors/react-dnd');
    var OtherUserPhoneList = require('jsx!../components/OtherUserPhoneList.jsx');

    module.exports = React.createClass({

        contextTypes: {
            module: React.PropTypes.object.isRequired
        },

        getInitialState() {
            return {
                otherUserPhones: [],
                groupPhones: [],
                key: 1
            };
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

            this.setState(React.addons.update(this.state, {
                groupPhones: {
                    $splice: [
                        [draggedIndex, 1],
                        [atIndex, 0, draggedCard]
                    ]
                }
            }));
        },

        handleSelect(key) {
            this.state.key = key;
            this.setState(this.state);
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

                        this.setState({
                            groupPhones: groupPhones,
                            otherUserPhones: otherUserPhones
                        });

                    }, null, true, true);
            }, null, true, true);
        },

        render() {
            return (
                <TabbedArea activeKey={this.state.key} onSelect={this.handleSelect}>
                    <TabPane eventKey={1} tab='Sequentially'>
                        <OtherUserPhoneList otherUserPhones={this.state.otherUserPhones}/>

                        <div className="Bootstrap CallHandling-phone-list">
                            {
                                this.state.groupPhones.map((gp) => {
                                    console.log(gp);
                                    if (gp.length == 1) {
                                        return <PhoneCard phone={gp[0]} moveCard={this.moveCard} findCard={this.findCard}/>;
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
