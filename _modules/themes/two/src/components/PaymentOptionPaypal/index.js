"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionPaypal = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaymentOptionPaypalUI = function PaymentOptionPaypalUI(props) {
  var isSdkReady = props.isSdkReady,
      PaypalButton = props.PaypalButton,
      noAuthMessage = props.noAuthMessage,
      paypalButtonProps = props.paypalButtonProps;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, noAuthMessage ? /*#__PURE__*/_react.default.createElement("p", null, noAuthMessage) : isSdkReady ? PaypalButton && /*#__PURE__*/_react.default.createElement(PaypalButton, paypalButtonProps) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    count: 3,
    height: 55
  })));
};

var PaymentOptionPaypal = function PaymentOptionPaypal(props) {
  var paymentPaypalProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionPaypalUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionPaypal, paymentPaypalProps);
};

exports.PaymentOptionPaypal = PaymentOptionPaypal;