"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchAddress = exports.WrapInput = exports.SearchFormContainer = exports.Title = exports.ContentWrapper = exports.HeroContainer = exports.HeroContainerStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 400px;\n\n  button{\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  ", "\n  @media (min-width: 768px) {\n    height: 500px;\n  }\n\n  @media (min-width: 1400px) {\n    height: 550px;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n  "])));
});

exports.HeroContainerStyled = HeroContainerStyled;

var HeroContainer = function HeroContainer(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.HeroContainer = HeroContainer;

var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 0px 20px 0px;\n\n  ", "\n\n  button {\n    width: 180px;\n  }\n\n  input {\n    width: 90%;\n    margin-bottom: 15px;\n  }\n\n  @media (min-width: 425px) {\n    input {\n      width: 97%;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 0px 40px 0px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 0px 20px 0px;\n  "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 0px 40px 0px;\n    "])));
});

exports.ContentWrapper = ContentWrapper;

var Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  letter-spacing: 0px;\n  text-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  font-size: 24px;\n  margin-bottom: 15px;\n  text-align: center;\n  color: ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Title = Title;

var SearchFormContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > button {\n    height: 50px;\n    width: 100%;\n    max-width: 600px;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: center;\n    \n    > button {\n      width: initial;\n    }\n  }\n"])));

exports.SearchFormContainer = SearchFormContainer;

var WrapInput = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n  border-radius: 30px;\n  padding: 0 5px;\n  margin-right: 15px;\n  box-sizing: border-box;\n  ", "\n  @media (max-width: 992px) {\n    width: 100%;\n    max-width: 600px;\n    margin: 0 0 10px 0;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 15px;\n  "])));
});

exports.WrapInput = WrapInput;

var SearchAddress = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 10px;\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n\n  span {\n    padding: 0 5px;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 50px;\n  }\n\n  @media (min-width: 768px) {\n    span {\n      max-width: initial;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayColor;
}, function (props) {
  return props.theme.colors.grayColor;
});

exports.SearchAddress = SearchAddress;