"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapButton = exports.WrapSectionTitle = exports.WrapperIngredients = exports.WrapperSubOption = exports.SkeletonBlock = exports.ProductActions = exports.ProductComment = exports.SectionTitle = exports.ProductEdition = exports.ProductFormTitle = exports.ProductInfo = exports.ProductImage = exports.WrapperImage = exports.ProductContainer = void 0;

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  position: relative;\n  padding: 10px;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 1201px) {\n    flex-wrap: nowrap;\n    overflow: auto;\n    max-height: 70vh;\n  }\n"])));

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));

exports.WrapperImage = WrapperImage;

var ProductImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 300px;\n\n  img {\n    border-radius: 16px;\n    object-fit: contain;\n    height: 100%;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 1201px) {\n    height: 400px;\n    img {\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n"])));

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  position: relative;\n  margin-top: 10px;\n  box-sizing: border-box;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n    color: #263238;\n    margin-top: 0px;\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    margin-top: 0px;\n    line-height: 1.5em;\n    width: 100%;\n    text-align: left;\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 411px) {\n    padding: 10px 0px;\n  }\n\n  @media (min-width: 1201px) {\n    top: 0;\n    margin-top: 0px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n  @media (min-width: 1201px) {\n    width: calc(100% - 25px);\n  }\n"])));

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 18px;\n  padding: 15px 0px;\n  margin: 0px;\n  font-weight: 600;\n  color: #333333;\n"])));

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 115px;\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  textarea {\n    border-radius: unset;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n  }\n"])));

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n\n  button {\n    border-radius: unset;\n  }\n\n  div.incdec-control {\n    width: 50%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    svg {\n      width: 35px;\n      height: 35px;\n      cursor: pointer;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n  }\n\n  button.add {\n    width: 90%;\n    padding: 5px 10px;\n    margin: 10px 0px 0px;\n    position: relative;\n\n    span:last-child {\n      position: absolute;\n      right: 0;\n      margin-right: 10px;\n\n      ", "\n    }\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 577px) {\n    justify-content: space-between;\n    flex-direction: row;\n\n    div.incdec-control {\n      width: 25%;\n    }\n    div:last-child {\n      width: 75%;\n    }\n    button.add {\n      width: 75%;\n      margin: 0 10px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    position: relative;\n    bottom: initial;\n    right: initial;\n\n    button.add {\n      width: 100%;\n      margin: 0px;\n    }\n  }\n\n  @media (min-width: 1201px) {\n    position: sticky;\n    top: 100%;\n    padding: 10px 0px;\n\n    div.incdec-control {\n      width: 30%;\n    }\n    div:last-child {\n      width: 70%;\n      button {\n        width: 100%;\n      }\n    }\n    button.add {\n      width: 68%;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        position: absolute;\n        left: 0;\n        right: initial;\n        margin-left: 10px;\n        margin-right: 0px;\n      "])));
});

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));

exports.WrapperSubOption = WrapperSubOption;

var WrapperIngredients = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isProductSoldout = _ref2.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var WrapSectionTitle = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.WrapSectionTitle = WrapSectionTitle;

var WrapButton = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: #FFF;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));

exports.WrapButton = WrapButton;