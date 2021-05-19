"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = void 0;

var _react = require("react");

/**
 * Execute the cb function when an event click
 * is triggered outside ref component
 * @param {object} ref
 * @param {Function} cb
 */
var useOutsideClick = function useOutsideClick(ref, cb) {
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) cb();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

exports.useOutsideClick = useOutsideClick;