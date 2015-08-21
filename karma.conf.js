module.exports = function (config) {

  var helper = require('../../tools/karma-helper')(config, __dirname);

  config.set(helper.config);

  return config;

};
