"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapCartContent = exports.MenuClose = exports.SidebarContent = exports.BackDropContainer = exports.IconContent = exports.TopContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

exports.Container = Container;

var TopContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 15px 0 15px;\n  align-items: center;\n"])));

exports.TopContainer = TopContainer;

var IconContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 0 5px;\n  span {\n    display: flex;\n    position: relative;\n    p {\n      position: absolute;\n      right: -10px;\n      top: -10px;\n      height: 20px;\n      width: 20px;\n      margin: 0;\n      background: #F7705D;\n      color: #FFF;\n      border-radius: 100%;\n      border: 1px solid #FFF;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 10px;\n      ", " \n    }\n    svg {\n      color: ", ";\n      font-size: 26px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        left: -10px;\n        right: initial;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.IconContent = IconContent;

var BackDropContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.6;\n  left: 0;\n  z-index: 1000;\n"])));

exports.BackDropContainer = BackDropContainer;

var SidebarContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 0;\n  background: ", ";\n  overflow-x: hidden;\n  transition: 0.5s;\n  box-shadow: ", ";\n\n  ", "\n\n  h1 {\n    color: ", ";\n    text-align: center;\n    margin: 0px;\n    font-size: 24px;\n  }\n\n  @media (min-width: 576px) {\n    ", "\n  }\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.lightGrayColor;
}, function (_ref) {
  var isHome = _ref.isHome;
  return isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;';
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      left: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n    "])));
});

exports.SidebarContent = SidebarContent;

var MenuClose = _styledComponents.default.button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: #FFF;\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: rgba(255,255,255,0.1);\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.MenuClose = MenuClose;

var WrapCartContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  padding: 10px 15px;\n"])));

exports.WrapCartContent = WrapCartContent;