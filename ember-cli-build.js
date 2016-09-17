/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    }
  });

  var materialSVG = pickFiles('bower_components/material-design-lite/src/images', {
      srcDir: '/',
      files: ['**/*.svg'],
      destDir: '/images'
  });

  return mergeTrees([app.toTree(), materialSVG]);
};
