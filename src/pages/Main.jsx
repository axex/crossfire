define(function(require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main');
    var PhoneCard = require('jsx!../components/phone-card.jsx');
    var phones = require('../../data/phones');
    var reactDND = require('../vendors/react-dnd');
    var DragDropContext = reactDND.DragDropContext;
    var HTML5Backend = reactDND.HTML5;

    var mainHandler =  React.createClass({
        contextTypes: {
            module: React.PropTypes.object.isRequired
        },
        render() {
            return <div className="Bootstrap mymodule">
                {
                    phones.map(function (phone) {
                        return <PhoneCard {...phone} />;
                    })
                }
            </div>;

        }
    });

    module.exports = DragDropContext(HTML5Backend)(mainHandler);
});
