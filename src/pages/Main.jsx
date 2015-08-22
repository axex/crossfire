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

        findCard(id) {
            var cards = this.state.phones;
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
                phones: {
                    $splice: [
                        [draggedIndex, 1],
                        [atIndex, 0, draggedCard]
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
