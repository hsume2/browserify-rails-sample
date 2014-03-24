# browserify-rails-sample

This is an example of using [`browserify-rails`](https://github.com/hsume2/browserify-rails).

## Setup

Added this line in the Gemfile:

```ruby
gem 'hsume2-browserify-rails', '~> 0.1.0', :require => 'browserify-rails'
```

Created `package.json`:

```js
{
  "name": "browserify-rails-sample",
  "version": "0.0.1",
  "dependencies": {
    "jquery-browserify": "*"
  },
  "devDependencies" : {
    "browserify": "2.13.x",
    "module-deps": "1.7.x"
  },
  "license": "MIT",
  "engines": {
    "node": ">= 0.6"
  }
}

```

Added files to `app/assets/javascripts`:

```js
// app/assets/javascripts/application.js
var foo = require('./foo');

var $ = require('jquery-browserify');

$('document').ready(function() {
  $('#root').html("It works! " + foo(11));
});

// app/assets/javascripts/foo.js
var bar = require('./bar');

module.exports = function (n) { return n * 11 }

// app/assets/javascripts/bar.js
require('./baz');

console.log('bar');

// app/assets/javascripts/baz.js
console.log('baz');
```

## Usage

1. `bundle install`
2. `npm install`
3. `bundle exec rails server`
4. Then visit `http://localhost:3000` in your browser.
5. You should see "It works! 121".
