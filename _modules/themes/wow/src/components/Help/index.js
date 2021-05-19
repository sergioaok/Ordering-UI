"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = void 0;

var _react = _interopRequireDefault(require("react"));

var _WithMyOrders = require("../WithMyOrders");

var _styles = require("./styles");

var _HelpList = require("../HelpList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Help = function Help(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_HelpList.HelpList, null), /*#__PURE__*/_react.default.createElement(_WithMyOrders.WithMyOrders, null));
};

exports.Help = Help;