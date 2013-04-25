var foo = require('./foo');

var $ = require('jquery-browserify');

$('document').ready(function() {
  $('#root').html("It works! " + foo(11));
});
