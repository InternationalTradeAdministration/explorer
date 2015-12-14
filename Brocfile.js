/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/jquery-ui/jquery-ui.js');
app.import('bower_components/jquery-ui/ui/datepicker.js');
app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');

app.import('bower_components/pure/pure-min.css');
app.import('bower_components/pure/grids-responsive-min.css');

app.import('bower_components/select2/select2.js');
app.import('bower_components/select2/select2.css');

app.import('bower_components/JavaScript-MD5/js/md5.min.js');

app.import('vendor/bootstrap/dist/js/bootstrap.min.js');
app.import('vendor/bootstrap/dist/css/bootstrap.min.css');

app.import('vendor/affix.js');
app.import('vendor/ie10-viewport-bug-workaround.js');
app.import('vendor/jquery-xdomainrequest.js');
app.import('vendor/jquery.autosize.js');
app.import('vendor/mrl-query.js');
app.import('vendor/scale.fix.js');

module.exports = app.toTree();
