module.exports  = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
       dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['**/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }],
        options: {
          style: 'compressed',
          sourcemap: true
        },
       }
    },
    imagemin: {
      dist: {
        files: [{
           expand: true,
           cwd: 'src/images/',
           src: ['**/*.{png,jpg,gif}'],
           dest: 'dist/images/',
        }]
      }
    },
    uglify: {
       options: {
          mangle: false,
          sourceMap: true
       },
       my_target: {
          files: [{
           expand: true,
           cwd: 'src/scripts/',
           src: ['**/*.js'],
           dest: 'dist/scripts/',
        }]
       }
    },
    htmlmin: {
       dist: {
          options: {
             removeComments: true,
             collapseWhitespace: true
          },
          files: [{
           expand: true,
           cwd: 'src/',
           src: ['**/*.html'],
           dest: 'dist/',
        }]
       }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: 'src/**/*.scss',
        tasks: ['sass'],
      },
      images: {
        files: 'src/images/**/*.{png,jpg,gif}',
        tasks: ['imagemin'],
      },
      js: {
        files: 'src/scripts/*.js',
        tasks: ['uglify'],
      },
      html: {
        files: 'src/*.html',
        tasks: ['htmlmin'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['watch']);
}