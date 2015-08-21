define(function(require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main');
    var PhoneCard = require('jsx!../components/phone-card.jsx');
    var phones = require('../../data/phones');
    var reactDND = require('../vendors/react-dnd');
    var DragDropContext = reactDND.DragDropContext;
    var HTML5Backend = reactDND.HTML5;

    const style = {
        width: 400
    };

    var mainHandler =  React.createClass({
        contextTypes: {
            module: React.PropTypes.object.isRequired
        },

        getInitialState() {
            return {
                phones: []
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

        render() {
            return <div className="Bootstrap mymodule"  style={style}>
                {
                    this.state.phones.map(phone => {
                        return <PhoneCard {...phone} moveCard={this.moveCard} />
                    })
                }
            </div>;

        }
    });

    module.exports = DragDropContext(HTML5Backend)(mainHandler);
});
