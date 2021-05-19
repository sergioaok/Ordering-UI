"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotNetworkConnectivity = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotNetworkConnectivity = function NotNetworkConnectivity(props) {
  var _props$isOnline, _theme$images, _theme$images$general;

  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "container",
    isOnline: (_props$isOnline = props.isOnline) !== null && _props$isOnline !== void 0 ? _props$isOnline : onlineStatus
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement("img", {
    id: "not-network",
    src: props.image || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notNetwork),
    alt: "Not network",
    width: "640",
    height: "320",
    loading: "lazy"
  })));
};

exports.NotNetworkConnectivity = NotNetworkConnectivity;