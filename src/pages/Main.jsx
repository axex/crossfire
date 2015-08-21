define(function(require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main'),
        Menu = require('module!../../../libReact/src/main').react.Menu;

    module.exports = React.createClass({

        contextTypes: {
            module: React.PropTypes.object.isRequired
        },
        render() {

            return <div className="Bootstrap mymodule">
                todo...
            </div>;

        }

    });

});
