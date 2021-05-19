"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductQuantity = exports.ProductOptionsList = exports.ProductNotAvailable = exports.ProductSelect = exports.ProductPrice = exports.ProductPriceSection = exports.ProductActionsDelete = exports.ProductActionsEdit = exports.ProductActions = exports.ProductError = exports.ProductInfo = exports.ProductComment = exports.AccordionText = exports.AccordionContent = exports.ContentInfo = exports.ProductImage = exports.WrapperProductImage = exports.Accordion = exports.AccordionSection = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0px;\n  background: #FFF;\n"])));

exports.AccordionSection = AccordionSection;

var AccordionStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: initial;\n  transition: background-color 0.6s ease;\n  margin: 0 10px;\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n    ", "\n  }\n\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "])));
});

var Accordion = function Accordion(props) {
  var style = {};

  if (!props.isValid) {
    style.opacity = '0.5';
  }

  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.Accordion = Accordion;

var WrapperProductImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: 55px;\n  max-height: 55px;\n  height: 55px;\n  width: 55px;\n\n  @media (min-width: 361px) {\n    max-width: 65px;\n    max-height: 65px;\n    height: 65px;\n    width: 65px;\n  }\n\n  @media (min-width: 411px) {\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n"])));

exports.WrapperProductImage = WrapperProductImage;

var ProductImageStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));

var ProductImage = function ProductImage(props) {
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.ProductImage = ProductImage;

var ContentInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: 55%;\n\n  @media (min-width: 411px) {\n    flex: 1;\n  }\n\n  ", "\n\n  h3 {\n     font-size: 18px;\n    margin: 0px;\n    font-weight: 600;\n  }\n\n  span {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px;\n\n    p {\n      margin: 0px;\n       font-size: 18px;\n    }\n\n    div {\n      display: flex;\n\n      span {\n        height: 20px;\n        svg {\n          font-size: 20px;\n          &:nth-child(1) {\n            margin-right: 3px;\n            ", "\n          }\n        }\n      }\n    }\n  }\n\n  @media (max-width: 576px) {\n    h3 {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n              margin-left: 3px;\n              margin-right: 0px;\n            "])));
});

exports.ContentInfo = ContentInfo;

var AccordionContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  padding-left: 43px;\n"])));

exports.AccordionContent = AccordionContent;

var AccordionText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 18px;\n  padding: 18px;\n"])));

exports.AccordionText = AccordionText;

var ProductComment = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding-left: 40px;\n  ", "\n  p {\n    font-weight: bold;\n    margin: 0px;\n  }\n\n  h3 {\n    font-weight: normal;\n    text-transform: capitalize;\n    margin: 0px 20px 0px 40px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow-x: hidden;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin: 0px 40px 0px 20px\n    "])));
});

exports.ProductComment = ProductComment;

var ProductInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 80%;\n\n  h1,\n  h3 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    font-size: 20px;\n    margin: 0px 5px;\n  }\n\n  @media (min-width: 481px) {\n    width: 70%;\n  }\n"])));

exports.ProductInfo = ProductInfo;

var ProductError = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  span {\n    font-size: 18px;\n    text-align: center;\n  }\n\n  @media (min-width: 411px){\n    width: 35%;\n\n    span{\n      text-align: right;\n    }\n  }\n"])));

exports.ProductError = ProductError;

var ProductActions = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 50px;\n  ", "\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    padding-left: 0px;\n    padding-right: 50px;\n  "])));
});

exports.ProductActions = ProductActions;

var ProductActionsEdit = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n  font-size: 13px;\n  svg {\n    font-size: 20px;\n    margin-right: 5px;\n    cursor: pointer;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});

exports.ProductActionsEdit = ProductActionsEdit;
var ProductActionsDelete = (0, _styledComponents.default)(ProductActionsEdit)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  svg {\n    margin-right: 0px;\n  }\n"])));
exports.ProductActionsDelete = ProductActionsDelete;

var ProductPriceSection = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"])));

exports.ProductPriceSection = ProductPriceSection;

var ProductPrice = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n\n  p,\n  span {\n     font-size: 18px;\n  }\n\n  span {\n    font-weight: 500;\n    white-space: nowrap;\n  }\n\n  p {\n    margin: 0px 5px;\n  }\n\n  svg {\n    cursor: pointer;\n  }\n\n  @media (max-width: 576px) {\n    p,\n    span {\n      font-size: 14px;\n    }\n  }\n"])));

exports.ProductPrice = ProductPrice;

var ProductSelect = _styledComponents.default.select(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  max-width: 55px;\n  height: 50px;\n  border: 0;\n  background-color: transparent;\n  font-size: 17px;\n  outline: none;\n  margin-right: 5px;\n  cursor: pointer;\n\n  ", "\n"])), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});

exports.ProductSelect = ProductSelect;

var ProductNotAvailable = _styledComponents.default.span(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  color: #D81212;\n"])));

exports.ProductNotAvailable = ProductNotAvailable;

var ProductOptionsList = _styledComponents.default.ul(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px;\n\n  .suboption {\n    margin-left: 25px;\n    ", "\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n  }\n\n  p {\n    font-weight: 400;\n    margin: 0px;\n    font-size: 13px;\n  }\n\n  li span {\n    font-weight: 300;\n    font-size: 13px;\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-right: -25px;\n      margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});

exports.ProductOptionsList = ProductOptionsList;

var ProductQuantity = _styledComponents.default.span(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n  ", "\n"])), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});

exports.ProductQuantity = ProductQuantity;