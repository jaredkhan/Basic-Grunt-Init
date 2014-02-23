'use strict';

exports.description = 'A nice starting point.';
exports.notes = 'This template gives you a directory structure and uses Sass, Uglify, imagemin, htmlmin and livereload';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  init.process({}, [], function(err, props) {
    
    grunt.file.mkdir('src/css');
    grunt.file.mkdir('src/images');
    grunt.file.mkdir('src/scripts');

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    
    var devDependencies = {
      "grunt": "~0.4.1",
      "grunt-sass": "~0.11.0",
      "grunt-contrib-watch": "~0.5.3",
      "grunt-contrib-imagemin": "~0.4.0",
      "grunt-contrib-uglify": "~0.3.2",
      "grunt-contrib-htmlmin": "~0.2.0"
    };
    // Generate package.json file
    init.writePackageJSON('package.json', {
      node_version: '>= 0.10.0',
      devDependencies: devDependencies
    });
    // All done!
    done();
  });
};
