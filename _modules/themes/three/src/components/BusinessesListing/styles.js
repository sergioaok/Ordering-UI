"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = exports.FeaturedBusinessContainer = exports.WrapBusinessTypeFilter = exports.AdviceDescriptionContainer = exports.WrapImage = exports.ImageContainerStyled = exports.AdviceRightContent = exports.AdviceLeftContent = exports.AdviceInnerContainer = exports.AdviceContainer = exports.BusinessContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 112px 0 30px 0;\n\n  @media (min-width: 992px) {\n    padding: 65px 0 30px 0;\n  }\n"])));

exports.BusinessContainer = BusinessContainer;

var AdviceContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #122428;\n  padding: 30px 0;\n"])));

exports.AdviceContainer = AdviceContainer;

var AdviceInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  display: flex;\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"])));

exports.AdviceInnerContainer = AdviceInnerContainer;

var AdviceLeftContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h1 {\n    color: ", ";\n    margin: 0px;\n  }\n  p {\n    color: ", ";\n  }\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.white;
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.white;
});

exports.AdviceLeftContent = AdviceLeftContent;

var AdviceRightContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"])));

exports.AdviceRightContent = AdviceRightContent;

var ImageContainerStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 200px;\n  ", "\n  @media (max-width: 992px) {\n    width: 50%;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.ImageContainerStyled = ImageContainerStyled;

var WrapImage = function WrapImage(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(ImageContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.WrapImage = WrapImage;

var AdviceDescriptionContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 40%;\n  background-color: #FFC043;\n  padding: 10px;\n\n  p {\n    font-weight: 600;\n    color: ", ";\n  }\n\n  @media (max-width: 992px) {\n    width: 50%;\n  }\n"])), function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.black;
});

exports.AdviceDescriptionContainer = AdviceDescriptionContainer;

var WrapBusinessTypeFilter = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  padding: 20px 0;\n  border-bottom: 1px solid ", ";\n  img {\n    border: 1px solid transparent;\n    border-radius: unset;\n    width: 100px;\n    height: 100px;\n  }\n"])), function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.secundary;
});

exports.WrapBusinessTypeFilter = WrapBusinessTypeFilter;

var FeaturedBusinessContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  padding: 30px 0;\n"])));

exports.FeaturedBusinessContainer = FeaturedBusinessContainer;

var SectionTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 32px;\n  margin: 0 0 10px 0;\n  color: ", ";\n"])), function (props) {
  var _props$theme$colors5;

  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.darkTextColor;
});

exports.SectionTitle = SectionTitle;