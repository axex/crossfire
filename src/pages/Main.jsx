define(function (require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main');
    var PhoneCard = require('jsx!../components/phone-card.jsx');
    var phones = require('../../data/phones');
    var reactDND = require('../vendors/react-dnd');
    var DragDropContext = reactDND.DragDropContext;
    var HTML5Backend = reactDND.HTML5;

    const style = {
        width: 400
    };

    var mainHandler = React.createClass({
        contextTypes: {
            module: React.PropTypes.object.isRequired
        },

        getInitialState() {
            return {
                form: {
                    text: '',
                    email: ''
                }
            };
        },

        componentDidMount () {
            this.setState({
                phones: phones
            });
        },

        moveCard(id, afterId) {
            var phones = this.state.phones;

            const card = phones.filter(p => p.id === id)[0];
            const afterCard = phones.filter(c => c.id === afterId)[0];
            const cardIndex = phones.indexOf(card);
            const afterIndex = phones.indexOf(afterCard);

            this.setState(React.addons.update(this.state, {
                phones: {
                    $splice: [
                        [cardIndex, 1],
                        [afterIndex, 0, card]
                    ]
                }
            }));
        },

        getInitialState(){
            return {}
        },

        onChange(form){
            this.setState({form: form});
        },

        render() {
            return <div className="Bootstrap mymodule" style={style}>
                <div className="layout-table Bootstrap">
                    <Menu.Main collapsed="false">
                        <Menu.MainItem to="callHandling" label="CallHandling" icon="_Phones"/>
                    </Menu.Main>

                    <div className="layout-column">
                        <Router.RouteHandler {...this.state.form} onChange={this.onChange}/>
                    </div>
                </div>
                ;
            </div>
        }
    });

    module.exports = DragDropContext(HTML5Backend)(mainHandler);
});
