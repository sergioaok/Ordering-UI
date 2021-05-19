"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reorder = exports.Map = exports.Card = exports.Logo = exports.Price = exports.Content = exports.OpenOrder = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OpenOrder = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 15%;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 10px;\n  button {\n    width: 100%;\n    font-size: 0.8em;\n    height: 36px;\n  }\n\n  @media (min-width: 480px){\n    button{\n      font-size: 1em\n    }\n  }\n"])));

exports.OpenOrder = OpenOrder;

var Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n\n"])));

exports.Content = Content;

var Price = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 35%;\n  h2 {\n    font-size: 14px;\n    margin-block-end: ", ";\n    margin-block-start: 0.1em;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: ", ";\n    color: #ff9300;\n    font-size: 0.8em;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    margin-left: 5px;\n  }\n  p[name='view-cart']{\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (_ref) {
  var isBusinessesPage = _ref.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (_ref2) {
  var isBusinessesPage = _ref2.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (props) {
  return props.theme.colors.primary;
});

exports.Price = Price;

var Logo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n\n  @media (min-width: 480px){\n    width: 75px;\n    height: 75px;\n  }\n"])));

exports.Logo = Logo;

var Card = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  min-width: 300px;\n  width: 300px;\n  margin: 10px;\n  display: inline-block;\n  background: white;\n  height: ", ";\n  max-height: ", ";\n  border-radius: 16px;\n  text-align: left;\n  cursor: ", ";\n\n  button.load-orders {\n    padding: 10px 30px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  @media (min-width: 480px){\n    min-width: 400px;\n    max-height: ", ";;\n    width: 400px;\n  }\n\n  @media(min-width: 993px){\n    ", "\n  }\n\n"])), function (_ref3) {
  var isBusinessesPage = _ref3.isBusinessesPage;
  return isBusinessesPage && '300px';
}, function (_ref4) {
  var isBusinessesPage = _ref4.isBusinessesPage;
  return isBusinessesPage ? '300px' : '220px';
}, function (_ref5) {
  var isBusinessesPage = _ref5.isBusinessesPage;
  return isBusinessesPage && 'pointer';
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  return (props.nobg || props.isBusinessesPage) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: transparent;\n  "])));
}, function (props) {
  return props.flex && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])));
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  "])));
}, function (_ref6) {
  var isBusinessesPage = _ref6.isBusinessesPage;
  return isBusinessesPage ? '300px' : '250px';
}, function (_ref7) {
  var isBusinessesPage = _ref7.isBusinessesPage;
  return isBusinessesPage && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin: 30px 20px;\n      width: calc(33% - 40px);\n    "])));
});

exports.Card = Card;

var Map = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  min-height: ", ";\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-radius: ", ";\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n  @media(min-width: 480px){\n    height: ", ";\n    min-height: ", "\n  }\n"])), function (_ref8) {
  var isBusinessesPage = _ref8.isBusinessesPage;
  return isBusinessesPage ? '200px' : '88px';
}, function (_ref9) {
  var isBusinessesPage = _ref9.isBusinessesPage;
  return isBusinessesPage && '175px';
}, function (_ref10) {
  var isBusinessesPage = _ref10.isBusinessesPage;
  return isBusinessesPage && '16px';
}, function (_ref11) {
  var isBusinessesPage = _ref11.isBusinessesPage;
  return isBusinessesPage ? '200px' : '100px';
}, function (_ref12) {
  var isBusinessesPage = _ref12.isBusinessesPage;
  return isBusinessesPage && '200px';
});

exports.Map = Map;

var Reorder = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  button{\n    line-height: 0;\n    height: 30px;\n    font-size: 14px;\n  }\n"])));

exports.Reorder = Reorder;