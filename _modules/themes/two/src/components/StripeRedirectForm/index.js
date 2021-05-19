"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeRedirectForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StripeRedirectFormUI = function StripeRedirectFormUI(props) {
  var paymethods = props.paymethods,
      handleSubmitPaymentMethod = props.handleSubmitPaymentMethod;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors,
      formState = _useForm.formState;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.FormRedirect, {
    onSubmit: handleSubmit(handleSubmitPaymentMethod)
  }, /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('SELECT_A_PAYMENT_METHOD', 'Select a payment method')), /*#__PURE__*/_react.default.createElement("select", {
    name: "type",
    ref: register({
      required: true
    })
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, t('SELECT_A_PAYMENT_METHOD', 'Select a payment method')), (paymethods === null || paymethods === void 0 ? void 0 : paymethods.length) > 0 && paymethods.map(function (paymethod, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: paymethod.value
    }, paymethod.name);
  })), errors.type && errors.type.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('ACCOUNT_HOLDER', 'Account holder')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    defaultValue: user === null || user === void 0 ? void 0 : user.name,
    placeholder: t('TYPE_ACCOUNT_HOLDER', 'Type an Account holder'),
    ref: register({
      required: true
    }),
    autoComplete: "off"
  }), errors.name && errors.name.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "email",
    type: "email",
    defaultValue: user === null || user === void 0 ? void 0 : user.email,
    placeholder: t('TYPE_AN_EMAIL', 'Type an email'),
    ref: register({
      required: true
    }),
    autoComplete: "off"
  }), errors.email && errors.email.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.isSubmitting
  }, formState.isSubmitting ? t('LOADING', 'Loading...') : t('OK', 'OK')));
};

var StripeRedirectForm = function StripeRedirectForm(props) {
  var stripeRedirectFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: StripeRedirectFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.StripeRedirectForm, stripeRedirectFormProps);
};

exports.StripeRedirectForm = StripeRedirectForm;