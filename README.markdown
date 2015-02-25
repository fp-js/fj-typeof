# fj-typeof

[![Build Status](https://travis-ci.org/fp-js/fj-typeof.svg)](https://travis-ci.org/fp-js/fj-typeof) [![npm version](https://badge.fury.io/js/fj-typeof.svg)](http://badge.fury.io/js/fj-typeof)
> FP-style typeof

## Installation

`npm install fj-typeof --save`

## Usage

```js
var typeOf = require('fj-typeof');

typeOf('function', typeOf); // => true
typeOf('string')('foo'); // => true
typeOf('object')({}); // => true
typeOf('undefined')(undefined); // => true
```
