// Generated using generator-angular-flow - https://github.com/myflowpl/generator-angular-flow
"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            app: '.'
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '<%= yeoman.app %>/**/*.css',
                    '<%= yeoman.app %>/**/*.js',
                    '<%= yeoman.app %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            dev: {
                options: {
                    open: 'http://localhost:9000',
                    base: '<%= yeoman.app %>'
                }
            }
        }
    });

    /**
     * default task is to compile sass, link assets to head and watch for changes
     */
    grunt.registerTask('default', [
        'connect:dev',
        'watch'
    ]);
};