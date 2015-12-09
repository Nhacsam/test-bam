/*
 * This file is a configuration for the bam command line tool
 * @see https://github.com/bamlab/bam-cmd
 */

var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


var spawn = require('child_process').spawn;

module.exports = {
  scriptVersion: '0.1.0',
  dirName: 'bam-test',
  linkedRepos: [],
  install: function() {
    // run at the installation. Do not accept any argument
    spawn('ls', [], {stdio: 'inherit'});
  },
  buildOptions: function(commander) {
    commander
      .option('-d --doge', 'Doge');
  },
  build: function(options) {
    console.log(options.env);
    console.log(options.doge);
  },
  deploy: function(options) {
    console.log(options.env);
    console.log(options.doge);
  }
};
