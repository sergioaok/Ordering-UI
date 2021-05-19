"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _two = require("./two");

Object.keys(_two).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _two[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _two[key];
    }
  });
});