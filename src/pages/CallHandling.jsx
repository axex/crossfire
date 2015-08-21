define(function(require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main'),
        {TabbedArea, TabPane} = require('module!../../../libReactBootstrap/src/main');

    module.exports = React.createClass({

        contextTypes: {
            module: React.PropTypes.object.isRequired
        },

        getInitialState() {
            return {
                data: {
                    phones : {},
                    key: 1
                }
            };
        },

        handleSelect(key) {
            this.setState({key});
        },

        componentWillMount() {
            var wrapper = this.context.module.getContext().getWrapper(),
                config = this.context.module.getContext().getRC();

            this.loadForwardPhones(wrapper);

        },

        loadForwardPhones(wrapper) {
            wrapper.send("rules.getHoursRule", {
                    loadAllPhones: true,
                    mid: '400129577008',
                    rid: '400019274008',
                    isCompany: false
                },
                (response) => {
                    debugger;
                    var phones = response.rule.phones;


                    var forwardPhones = {};
                    var otherUserPhones = [];
                    var disabledDelay = 10000;


                    Array.each(phones, function(phone) {

                        if(phone.type == 'PhoneLine' && !phone.ownedByThisMailbox && !phone.enabled) {
                            otherUserPhones.push(phone);
                        } else {
                            var ringDelay = (phone.enabled ? phone.ringDelay : ++disabledDelay);
                            if(!(ringDelay in forwardPhones)) {
                                forwardPhones[ringDelay] = [phone];
                            }else {
                                forwardPhones[ringDelay].push(phone);
                            }

                        }

                    });
                    this.state.data.phones = {
                        forwardPhones: forwardPhones,
                        otherUserPhones: otherUserPhones
                    }

                    this.setState({data: this.state.data});

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
                    </TabPane>
                    <TabPane eventKey={2} tab='Simultaneously'>Simultaneously canvas</TabPane>
                </TabbedArea>
            );
        }

    });

});
