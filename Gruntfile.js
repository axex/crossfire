module.exports = function (grunt) {

  //require('time-grunt')(grunt);

  require('../../tools/grunt-helper')(grunt, {
    npmTasks: [
      'grunt-concurrent',
      'grunt-contrib-clean',
      'grunt-contrib-copy',
      'grunt-contrib-requirejs',
      'grunt-contrib-uglify',
      'grunt-text-replace'
    ]
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    rcCopy: {main: {}},
    rcClean: {main: {}},
    rcReplace: {main: {}},
    rcUglify: {main: {}},
    rcRequireJS: {main: {}}
  });

  grunt.registerTask('default', [
    'rcClean',
    'rcCopy',
    'rcRequireJS',
    'rcReplace',
    //'rcUglify',
    'rcClean'
  ]);

};
