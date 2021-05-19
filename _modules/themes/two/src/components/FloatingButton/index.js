"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FloatingButtonUI = function FloatingButtonUI(props) {
  var btnText = props.btnText,
      btnValue = props.btnValue,
      handleButtonClick = props.handleButtonClick,
      disabled = props.disabled,
      isSecondaryBtn = props.isSecondaryBtn;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: isSecondaryBtn ? 'secundary' : 'primary',
    onClick: handleButtonClick,
    disabled: disabled
  }, btnText, /*#__PURE__*/_react.default.createElement(_styles.BtnValue, null, btnValue)));
};

var FloatingButton = function FloatingButton(props) {
  var floatingButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FloatingButtonUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.FloatingButton, floatingButtonProps);
};

exports.FloatingButton = FloatingButton;