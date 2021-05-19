"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperIngredients = exports.ProductInfoInnerContainer = exports.WrapperSubOption = exports.SkeletonBlock = exports.ProductActionContent = exports.ProductActionHeader = exports.ProductActions = exports.ProductComment = exports.SectionTitle = exports.ProductEdition = exports.ProductFormTitle = exports.ProductInfo = exports.ProductImage = exports.ProductImageStyled = exports.ProductContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  position: relative;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 1201px) {\n    overflow: auto;\n    max-height: 70vh;\n  }\n"])));

exports.ProductContainer = ProductContainer;

var ProductImageStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  min-height: 200px;\n\n  button{\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  ", "\n  @media (min-width: 768px) {\n    height: 300px;\n    min-height: 300px;\n  }\n\n  @media (min-width: 1400px) {\n    height: 350px;\n    min-height: 350px;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.ProductImageStyled = ProductImageStyled;

var ProductImage = function ProductImage(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: -10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #FFF;\n  backdrop-filter: blur(15px);\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    margin-top: 0px;\n    line-height: 1.5em;\n    width: 100%;\n    text-align: left;\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n\n  h1 {\n    display: flex;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n    margin-top: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 18px;\n  padding: 15px 0px;\n  margin: 0px;\n  font-weight: 600;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 115px;\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n  }\n"])));

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 15px;\n  box-sizing: border-box;\n  width: 100%;\n  position: sticky;\n  bottom: 0;\n  background-color: #FFF;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  box-shadow: rgb(0 0 0 / 16%) 0px -3px 6px;\n"])));

exports.ProductActions = ProductActions;

var ProductActionHeader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: ", ";\n  h1 {\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    > span {\n      font-size: 20px;\n      font-weight: 500;\n    }\n\n    > p {\n      margin: 0px 15px;\n      span {\n        font-size: 14px;\n        font-weight: 300;\n        &:last-child {\n          margin: 5px;\n        }\n      }\n    }\n  }\n\n  > span {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n    margin: 0 auto 10px auto;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ProductActionHeader = ProductActionHeader;

var ProductActionContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  div.incdec-control {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    justiy-content: space-around;\n\n    svg {\n      width: 35px;\n      height: 35px;\n      cursor: pointer;\n      color: ", ";\n    }\n\n    span {\n      color: ", ";\n      font-weight: 500;\n      margin: 0 20px;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n  }\n\n  button.add {\n    width: 90%;\n    padding: 5px 10px;\n    margin: 10px 0px 0px;\n    position: relative;\n\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 577px) {\n    justify-content: space-between;\n    flex-direction: row;\n\n    div:last-child {\n      width: 75%;\n    }\n    button.add {\n      width: 75%;\n      margin: 0 10px;\n    }\n\n    div.incdec-control {\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button.add {\n      width: 100%;\n      margin: 0px;\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.incdec-control {\n      span {\n        margin: 0 30px;\n      }\n      ", "\n    }\n    div:last-child {\n      width: 70%;\n      button {\n        width: 100%;\n      }\n    }\n    button.add {\n      width: 68%;\n    }\n  }\n\n  @media (max-width: 576px) {\n    div.incdec-control {\n      justify-content: space-around;\n      width: 90%;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primaryContrast;
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n      "])));
});

exports.ProductActionContent = ProductActionContent;

var SkeletonBlock = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n\n  > div:last-child {\n    border-bottom: none;\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));

exports.WrapperSubOption = WrapperSubOption;

var ProductInfoInnerContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  @media (min-width: 1201px) {\n    padding: 10px 20px;\n  }\n"])));

exports.ProductInfoInnerContainer = ProductInfoInnerContainer;

var WrapperIngredients = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", "\n\n  > div:last-child {\n    border-bottom: none;\n  }\n"])), function (_ref3) {
  var isProductSoldout = _ref3.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;