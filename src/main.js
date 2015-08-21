define(function(require, exports, module) {

    //require('style!./css/main.less');
    require('module!../../libUI/src/main');

    var AbstractReactModule = require('module!../../libReact/src/main').AbstractReactModule;

    /**
     * @param {object} options
     * @param {ModuleContext} context
     * @extends AbstractReactModule
     * @constructor
     */
    function ReactModule(options, context) {
        AbstractReactModule.apply(this, arguments);
    }

    ReactModule.prototype = Object.create(AbstractReactModule.prototype);

    ReactModule.prototype.name = 'crossfire';

    ReactModule.prototype.getRoutes = function() {
        return require('jsx!./routes.jsx');
    };

    return ReactModule;

});
