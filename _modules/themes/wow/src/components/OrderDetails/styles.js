"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPaymentMethod = exports.CustomerInfo = exports.OrderDeliveryTimeContainer = exports.BusinessGeneralInfo = exports.ProgressItem = exports.OrderProgressBar = exports.EstimatedTime = exports.Line = exports.StatusItem = exports.OrderStatus = exports.ExclamationWrapper = exports.MessagesIcon = exports.BusinessAction = exports.BusinessInfo = exports.OrderBusiness = exports.BusinessLogo = exports.LogoWrapper = exports.RightContent = exports.LeftContent = exports.OrderDetailContent = exports.Map = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var Map = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));

exports.Map = Map;

var OrderDetailContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));

exports.OrderDetailContent = OrderDetailContent;

var LeftContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 20px;\n\n  @media (min-width: 1200px) {\n    width: calc(50% - 10px);\n  }  \n"])));

exports.LeftContent = LeftContent;

var RightContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 20px;\n  > button {\n    width: 100%;\n    margin: 10px 0;\n    padding: 5px 0;\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(50% - 10px);\n  }  \n\n"])));

exports.RightContent = RightContent;

var LogoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 60px;\n  max-height: 60px;\n  height: 60px;\n  width: 60px;\n"])));

exports.LogoWrapper = LogoWrapper;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 60px;\n  border-radius: 100%;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var OrderBusiness = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background: ", ";\n  border-radius: 15px;\n  opacity: 1;\n  margin: 20px 0px;\n  padding: 10px;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.OrderBusiness = OrderBusiness;

var BusinessInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 75px);\n  h1,\n  p {\n    margin: 3px 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #FFF;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessAction = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > span {\n    cursor: pointer;\n  }\n  svg {\n    font-size: 24px;\n    color: #FFF;\n\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "])));
});

exports.BusinessAction = BusinessAction;

var MessagesIcon = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n\n  ", "\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "])));
});

exports.MessagesIcon = MessagesIcon;

var ExclamationWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(0%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme3, _props$theme3$colors;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : (_props$theme3$colors = _props$theme3.colors) === null || _props$theme3$colors === void 0 ? void 0 : _props$theme3$colors.primaryContrast;
});

exports.ExclamationWrapper = ExclamationWrapper;

var OrderStatus = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n"])));

exports.OrderStatus = OrderStatus;

var StatusItem = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", "\n\n  display: flex;\n  align-items: center;\n\n  span {\n    font-weight: 600;\n\n    ", "\n  }\n\n  svg {\n    font-size: 20px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "])));
});

exports.StatusItem = StatusItem;

var Line = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 20px;\n  margin: 0px 9px;\n  background: #CCC;\n"])));

exports.Line = Line;

var EstimatedTime = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  p {\n    &:first-child {\n      color: ", ";\n      margin: 0px;\n    }\n\n    &:last-child {\n      color: ", ";\n      font-size: 24px;\n      margin: 10px 0;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.primary;
});

exports.EstimatedTime = EstimatedTime;

var OrderProgressBar = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n"])));

exports.OrderProgressBar = OrderProgressBar;

var ProgressItem = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 15px;\n  height: 8px;\n  width: calc(33% - 10px);\n  ", "\n"])), function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.grayColor;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    var _props$theme$colors5;

    return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primaryContrast;
  });
});

exports.ProgressItem = ProgressItem;

var BusinessGeneralInfo = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: calc(100% - 85px);\n"])));

exports.BusinessGeneralInfo = BusinessGeneralInfo;

var OrderDeliveryTimeContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #CCC;\n  padding: 10px 0;\n\n  p {\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors6;

  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.grayColor;
});

exports.OrderDeliveryTimeContainer = OrderDeliveryTimeContainer;

var CustomerInfo = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  border-bottom: 1px solid #CCC;\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors7;

  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.grayColor;
});

exports.CustomerInfo = CustomerInfo;

var OrderPaymentMethod = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  > div {\n    border-radius: 10px;\n    padding: 10px 15px;\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n\n    span {\n      color: ", ";\n      margin: 0 10px;\n    }\n\n    svg {\n      font-size: 24px;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors8;

  return (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.grayColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderPaymentMethod = OrderPaymentMethod;