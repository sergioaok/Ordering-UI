"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapFloatingButton = exports.PaymentContent = exports.PickupOrderTitle = exports.WrapMaxLimtAndSavePrice = exports.WrapCartTotalPrice = exports.WrapCartPrice = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.WarningText = exports.CartsList = exports.NotFoundImage = exports.WarningMessage = exports.WrapperPlaceOrderButton = exports.DriverTipContainer = exports.UpsellingPageContainer = exports.PaymentMethodContainer = exports.CartContainer = exports.WrapDeliveryTimeSelect = exports.WrapOrderTypeMethod = exports.BusinessDetailsContainer = exports.UserDetailsContainer = exports.WrapperUserDetails = exports.RightInnerContainer = exports.RightContainer = exports.LeftContainer = exports.WrappContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 60px;\n"])));

exports.Container = Container;

var WrappContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: auto;\n  display: flex;\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n  }\n"])));

exports.WrappContainer = WrappContainer;

var LeftContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 70%;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.LeftContainer = LeftContainer;

var RightContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 30%;\n  border-left: 1px solid ", ";\n\n  ", "\n\n  @media (max-width: 992px) {\n    width: 100%;\n    border-left: none;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-left: none;\n    border-right: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.secondary;
  });
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-right: none;\n    "])));
});

exports.RightContainer = RightContainer;

var RightInnerContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 60px;\n  padding: 30px 10px;\n  max-height: calc(100vh - 60px);\n  overflow-x: hidden;\n"])));

exports.RightInnerContainer = RightInnerContainer;

var WrapperUserDetails = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.WrapperUserDetails = WrapperUserDetails;

var UserDetailsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 20px;\n  flex-wrap: wrap;\n"])));

exports.UserDetailsContainer = UserDetailsContainer;

var BusinessDetailsContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 20px;\n\n  > div {\n    &:not(:first-child) {\n      p {\n        margin: 0px;\n        font-size: 20px;\n        font-weight: 500;\n        &:first-child {\n          color: ", ";\n          text-transform: uppercase;\n          font-size: 18px;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.BusinessDetailsContainer = BusinessDetailsContainer;

var WrapOrderTypeMethod = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0;\n  border-bottom: 1px solid ", ";\n\n  h1 {\n    text-transform: uppercase;\n    margin: 0px;\n    width: 200px;\n    font-size: 20px;\n  }\n\n  > div {\n    flex: 1;\n  }\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n\n    h1 {\n      width: 100%;\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapOrderTypeMethod = WrapOrderTypeMethod;
var WrapDeliveryTimeSelect = (0, _styledComponents.default)(WrapOrderTypeMethod)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""])));
exports.WrapDeliveryTimeSelect = WrapDeliveryTimeSelect;
var CartContainer = (0, _styledComponents.default)(WrapOrderTypeMethod)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
exports.CartContainer = CartContainer;
var PaymentMethodContainer = (0, _styledComponents.default)(WrapOrderTypeMethod)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([""])));
exports.PaymentMethodContainer = PaymentMethodContainer;
var UpsellingPageContainer = (0, _styledComponents.default)(WrapOrderTypeMethod)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  h1 {\n    padding-bottom: 10px;\n  }\n"])));
exports.UpsellingPageContainer = UpsellingPageContainer;
var DriverTipContainer = (0, _styledComponents.default)(WrapOrderTypeMethod)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.DriverTipContainer = DriverTipContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 20px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  ", "\n\n  @media (min-width: 992px) {\n    display: flex;\n  }\n\n  @media (min-width: 513px) {\n    ", "\n  }\n"])), function (_ref) {
  var bottom = _ref.bottom;
  return !bottom && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
}, function (_ref2) {
  var bottom = _ref2.bottom;
  return bottom && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      button {\n        width: calc(100% - 200px);\n      }\n    "])));
});

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial\n    "])));
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));

exports.CartsList = CartsList;

var WarningText = _styledComponents.default.p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WarningText = WarningText;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  max-width: 70px;\n  max-height: 70px;\n  height: 70px;\n  width: 70px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  overflow: hidden;\n\n  > span {\n    > span {\n      border-radius: 5px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var WrapCartPrice = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  border-bottom: 1px solid ", ";\n\n  > div {\n    margin: 5px 0;\n    display: flex;\n    justify-content: space-between;\n    font-weight: 500;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapCartPrice = WrapCartPrice;

var WrapCartTotalPrice = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapCartTotalPrice = WrapCartTotalPrice;

var WrapMaxLimtAndSavePrice = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  > div {\n    font-weight: 500;\n    &:first-child {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 50px;\n    }\n    &:nth-child(2) {\n      background: #FEFF58;\n      display: flex;\n      justify-content: center;\n      column-gap: 5px;\n      padding: 10px 0;\n      margin-bottom: 20px;\n    }\n    &:nth-child(3) {\n      background: #D7F5F5;\n      display: flex;\n      justify-content: center;\n      column-gap: 5px;\n      padding: 10px 0;\n    }\n  }\n"])));

exports.WrapMaxLimtAndSavePrice = WrapMaxLimtAndSavePrice;

var PickupOrderTitle = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  padding: 20px 0 30px 0;\n  p {\n    text-align: center;\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n\n    &:not(:first-child) {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.PickupOrderTitle = PickupOrderTitle;

var PaymentContent = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.PaymentContent = PaymentContent;

var WrapFloatingButton = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  @media (max-width: 992px) {\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    background: #fff;\n    box-sizing: border-box;\n    width: 100vw;\n    z-index: 100;\n    border-top: 1px solid ", ";\n    box-shadow: 0px -3px 6px #00000029;\n    padding: 0 10px;\n    > div {\n      justify-content: center;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapFloatingButton = WrapFloatingButton;