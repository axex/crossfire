define(function(require, exports, module) {

    var {React, Router} = require('module!../../../libReact/src/main');
    var PhoneCard = require('module!../components/phone-card');
    var phones = require('../../data/phones');

    module.exports = React.createClass({

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

});
