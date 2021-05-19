"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotNetworkConnectivity = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _useOnlineStatus = require("../../hooks/useOnlineStatus");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NotNetworkConnectivity = function NotNetworkConnectivity(props) {
  var _props$beforeElements, _props$beforeComponen, _props$isOnline, _theme$images, _theme$images$general, _props$afterComponent, _props$afterElements;

  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "container",
    isOnline: (_props$isOnline = props.isOnline) !== null && _props$isOnline !== void 0 ? _props$isOnline : onlineStatus
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement("img", {
    id: "not-network",
    src: props.image || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notNetwork),
    alt: "Not network",
    width: "640",
    height: "320",
    loading: "lazy"
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.NotNetworkConnectivity = NotNetworkConnectivity;