"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerLoader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerLoader = function SpinnerLoader(props) {
  var logotype = props.logotype,
      content = props.content,
      style = props.style;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    style: style
  }, logotype && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: logotype,
    alt: "logo",
    width: "266px",
    height: "150px",
    loading: "lazy"
  })), content && /*#__PURE__*/_react.default.createElement(_styles.Content, null, content), /*#__PURE__*/_react.default.createElement(_styles.Spinner, {
    className: "spinner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-content"
  }, /*#__PURE__*/_react.default.createElement("div", null))));
};

exports.SpinnerLoader = SpinnerLoader;