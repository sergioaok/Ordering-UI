"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupAndSelector = exports.DeliveryAndMin = exports.WrapperBottom = exports.BusinessDetail = exports.BusinessName = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.BusinessContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 350px;\n  height: 350px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 300px;\n  border-radius: 5px;\n\n  ", "\n\n  ", "\n\n  @media (max-width: 767px) {\n    border-radius: initial;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #F8F8F8;\n  "])));
}, function (props) {
  return props.bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
});

exports.BusinessContainer = BusinessContainer;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  max-width: 90px;\n  max-height: 90px;\n  height: 90px;\n  width: 90px;\n  bottom: -45px;\n  left: 45px;\n\n  > span {\n    > span {\n      border-radius: 50%;\n    }\n  }\n"])));

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px #00000029;\n"])));

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

var BusinessInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n\n  @media (max-width: 767px) {\n    width: 91%;\n    margin: 70px auto 0 auto;\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessInfoItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n  div {\n    font-size: 14px;\n    display: flex;\n\n    h5 {\n      font-weight: 300;\n      svg{\n        margin-bottom: 1px;\n      }\n    }\n\n    h5,\n    p {\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      text-transform: capitalize;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n\n      svg {\n        margin-right: 4px;\n\n        ", "\n\n        &.start {\n          color: #FFC917;\n        }\n\n        &.popup {\n          color: ", ";\n          cursor: pointer;\n          transform: rotate(180deg);\n        }\n      }\n\n      &.bold {\n        font-weight: 600;\n      }\n\n      &.type {\n        font-weight: 300;\n      }\n    }\n\n    @media (min-width: 481px) {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 0px 16px 0px 5px;\n  "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessInfoItem = BusinessInfoItem;

var BusinessName = _styledComponents.default.h1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin: 0px;\n\n  @media (max-width: 576px) {\n    font-size: 32px;\n  }\n"])));

exports.BusinessName = BusinessName;

var BusinessDetail = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  flex-wrap: wrap;\n  margin: 15px 0;\n\n  > p {\n    &:first-child {\n      color: ", ";\n      font-weight: 500;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.greenColor;
});

exports.BusinessDetail = BusinessDetail;

var WrapperBottom = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  border-bottom: 1px solid ", ";\n  padding-bottom: 20px;\n\n  @media (max-width: 767px){\n    width: 91%;\n    margin: 0 auto;\n    > div {\n      width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapperBottom = WrapperBottom;

var DeliveryAndMin = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  padding: 10px 0;\n  > div {\n    width: 50%;\n    min-width: 130px;\n    padding: 0 15px;\n    &.delivery {\n      border-right: 1px solid ", ";\n    }\n\n    p {\n      text-align: center;\n      margin: 0px;\n      &:frist-child {\n        font-weight: 500;\n      }\n      &:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.secondary;
});

exports.DeliveryAndMin = DeliveryAndMin;

var GroupAndSelector = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  overflow: auto;\n\n  button {\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  @media (max-width: 767px){\n    justify-content: space-between;\n  }\n"])));

exports.GroupAndSelector = GroupAndSelector;