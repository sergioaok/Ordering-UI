"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapCheckoutBill = exports.TotalPrice = exports.ActionContainer = exports.WarningText = exports.CartsList = exports.NotFoundImage = exports.WarningMessage = exports.WrapperPlaceOrderButton = exports.SectionContainer = exports.PaymentMethodContainer = exports.CheckoutActionInnerContent = exports.CheckoutActionContent = exports.CheckoutInfoContent = exports.WrappContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));

exports.Container = Container;

var WrappContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 91%;\n  margin: auto;\n\n  @media (min-width: 576px) {\n    width: 85%;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));

exports.WrappContainer = WrappContainer;

var CheckoutInfoContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 992px) {\n    width: 48%;\n  }\n"])));

exports.CheckoutInfoContent = CheckoutInfoContent;

var CheckoutActionContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;  \n  @media (min-width: 992px) {\n    width: 48%;\n  }\n"])));

exports.CheckoutActionContent = CheckoutActionContent;

var CheckoutActionInnerContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: #FFFFFF;\n  margin: 20px 0;\n  position: sticky;\n  top: 80px;\n\n  @media (min-width: 992px) {\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0px 6px 10px rgb(128 128 128 / 5%), 0px 1px 18px rgb(128 128 128 / 5%), 0px 3px 5px rgb(128 128 128 / 5%);\n  }\n\n  @media (min-width: 1200px) {\n    top: 20px;\n  }\n"])));

exports.CheckoutActionInnerContent = CheckoutActionInnerContent;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-size: 24px;\n  }\n"])));

exports.PaymentMethodContainer = PaymentMethodContainer;
var SectionContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: #FFFFFF;\n  border-bottom: 1px solid #CCC;\n  padding: 15px;\n  margin-bottom: 20px;\n  h1 {\n    margin: 10px 0px;\n    font-size: 18px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.SectionContainer = SectionContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial\n    "])));
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));

exports.CartsList = CartsList;

var WarningText = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WarningText = WarningText;

var ActionContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding: 15px;\n  border-top: 1px solid #CCC;\n\n  @media (min-width: 992px) {\n    border: none;\n    border-radius: 15px;\n    box-shadow: rgb(0 0 0 / 16%) 0px -3px 6px;\n  }\n"])));

exports.ActionContainer = ActionContainer;

var TotalPrice = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n\n  span {\n    font-size: 24px;\n    font-weight: 600;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    span:not(:first-child) {\n      margin: 0 10px;\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.TotalPrice = TotalPrice;

var WrapCheckoutBill = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 15px;\n"])));

exports.WrapCheckoutBill = WrapCheckoutBill;