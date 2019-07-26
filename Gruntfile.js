module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dev: {
                options: {
                    prepend: ['/*! binarypack.js build:<%= pkg.version %>. ' +
                    'Copyright(c) 2019 Pavol Cvengros <pavol.cvengros@securcom.me>, 2012-2019 Eric Zhang <eric@ericzhang.com> MIT Licensed */']
                },
                src: ['lib/exports.js'],
                dest: 'dist/binarypack.js'
            }
        },

        uglify: {
            prod: {
                options: {
                    mangle: true,
                    compress: true,
                },
                src: 'dist/binarypack.js',
                dest: 'dist/binarypack.min.js'
            }
        },

        concat: {
            dev: {
                options: {
                    banner: '/*! binarypack.js build:<%= pkg.version %>. ' +
                        'Copyright(c) 2019 Pavol Cvengros <pavol.cvengros@securcom.me>, 2012-2019 Eric Zhang <eric@ericzhang.com> MIT Licensed */'
                },
                src: 'dist/binarypack.js',
                dest: 'dist/binarypack.js',
            },
            prod: {
                options: {
                    banner: '/*! binarypack.js build:<%= pkg.version %>. ' +
                        'Copyright(c) 2019 Pavol Cvengros <pavol.cvengros@securcom.me>, 2012-2019 Eric Zhang <eric@ericzhang.com> MIT Licensed */'
                },
                src: 'dist/binarypack.min.js',
                dest: 'dist/binarypack.min.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['browserify', 'uglify', 'concat']);
};
