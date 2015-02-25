"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var typeOf = _interopRequire(require("./"));




it("fj-typeof", function () {
  assert.equal(typeof typeOf, "function");
  assert(typeOf("function", typeOf));
  assert(typeOf("string")("foo"));
  assert(typeOf("object")({}));
  assert(typeOf("undefined")(undefined));
});