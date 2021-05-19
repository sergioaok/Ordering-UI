"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLogo = exports.WrapLogo = exports.CardInfo = exports.SoldOut = exports.CardContainer = void 0;

var _polished = require("polished");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 42px);\n  padding: 10px;\n  margin: 10px;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid ", ";\n  background: ", ";\n  ", "\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (_ref) {
  var soldOut = _ref.soldOut;
  return soldOut ? '#B8B8B8' : '#FFF';
}, function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 42px);\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(50% - 42px);\n    }\n\n    @media (min-width: 993px) {\n      width: calc(33% - 42px);\n    }\n  "])));
});

exports.CardContainer = CardContainer;

var SoldOut = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #D6D6D6 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  padding: 5px 10px;\n  top: 8px;\n  right: 6px;\n  text-transform: uppercase;\n  font-size: 14px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    left: 6px;\n    right: initial;\n  "])));
});

exports.SoldOut = SoldOut;

var CardInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 90px);\n  > * {\n    margin: 5px;\n  }\n\n  h1 {\n    font-size: 16px;\n    font-weight: ", ";\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    font-weight: ", ";\n    text-align: left;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-weight: bold;\n  }\n\n  p, span {\n    font-size: 13px;\n  }\n\n  @media (min-width: 1024px) {\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 16px;\n    }\n\n    span {\n      font-size: 15px;\n    }\n  }\n"])), function (_ref3) {
  var soldOut = _ref3.soldOut;
  return soldOut ? 'bold' : '500';
}, function (_ref4) {
  var soldOut = _ref4.soldOut;
  return soldOut ? 'bold' : '200';
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (_ref5) {
  var soldOut = _ref5.soldOut,
      theme = _ref5.theme;
  return soldOut ? (0, _polished.lighten)(0.05, theme.colors.primary) : theme.colors.primary;
});

exports.CardInfo = CardInfo;

var WrapLogo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n  margin-right: 5px;\n  ", "\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});

exports.WrapLogo = WrapLogo;

var CardLogoStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 75px;\n  border-radius: 10px;\n"])));

var CardLogo = function CardLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }

  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.CardLogo = CardLogo;