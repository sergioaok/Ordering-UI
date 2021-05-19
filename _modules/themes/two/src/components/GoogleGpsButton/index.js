"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleGpsButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleGpsButtonUI = function GoogleGpsButtonUI(props) {
  var handleGPS = props.handleGPS,
      isGoogleButton = props.isGoogleButton,
      googleReady = props.googleReady,
      isLoading = props.isLoading,
      IconButton = props.IconButton,
      IconLoadingButton = props.IconLoadingButton;
  return /*#__PURE__*/_react.default.createElement(_styles.GpsButtonStyle, {
    className: props.className || '',
    type: "button",
    disabled: isGoogleButton && !googleReady || isLoading,
    onClick: handleGPS
  }, isLoading ? IconLoadingButton ? /*#__PURE__*/_react.default.createElement(IconLoadingButton, null) : '...' : IconButton ? /*#__PURE__*/_react.default.createElement(IconButton, null) : 'GPS');
};

var GoogleGpsButton = function GoogleGpsButton(props) {
  var gpsButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GoogleGpsButtonUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleGpsButton, gpsButtonProps);
};

exports.GoogleGpsButton = GoogleGpsButton;