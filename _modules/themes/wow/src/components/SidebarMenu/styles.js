"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadAppLinkContainer = exports.DownloadAppLink = exports.LogoWrapper = exports.DownloadAppContainer = exports.MenuLinkSeparator = exports.TextInfo = exports.MenuLinkText = exports.MenuLinkIcon = exports.WrappContent = exports.MenuLink = exports.MenuClose = exports.SidebarContent = exports.BackDropContainer = exports.IconContent = exports.CustomerInfo = exports.TopContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var auth = _ref.auth;
  return auth && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @media (min-width: 769px) {\n      display: none;\n    }\n  "])));
}, function (_ref2) {
  var auth = _ref2.auth;
  return !auth && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    @media (min-width: 871px) {\n      display: none;\n    }\n  "])));
});

exports.Container = Container;

var TopContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 15px 16px;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.TopContainer = TopContainer;

var CustomerInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: ", ";\n    height: 40px;\n    width: 40px;\n  }\n\n  img {\n    width: 40px !important;\n    height: 40px !important;\n  }\n\n  span {\n    color: ", ";\n    font-weight: 500;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : "\n      margin-left: 5px;\n    ";
});

exports.CustomerInfo = CustomerInfo;

var IconContent = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: transparent;\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.IconContent = IconContent;

var BackDropContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.6;\n  left: 0;\n  z-index: 1000;\n"])));

exports.BackDropContainer = BackDropContainer;

var SidebarContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 0;\n  ", "\n  background-color: ", ";\n  overflow-x: hidden;\n  transition: 0.5s;\n  box-shadow: ", ";\n\n  ", "\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    border-top-right-radius: 20px;\n  "]))) : "\n    border-top-left-radius: 20px;\n  ";
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage;
}, function (_ref3) {
  var isHome = _ref3.isHome;
  return isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;';
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      left: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      right: 0;\n  "])));
});

exports.SidebarContent = SidebarContent;

var MenuClose = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: #FFF;\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: rgba(255,255,255,0.1);\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.MenuClose = MenuClose;

var MenuLink = _styledComponents.default.a(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  padding: 0 16px;\n  box-sizing: border-box;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  width: 100%;\n  background: ", ";\n  outline: none !important;\n\n  &:hover {\n    color: #f1f1f1;\n  }\n\n  ", ";\n\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage;
}, function (_ref4) {
  var isCustomer = _ref4.isCustomer;
  return isCustomer && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid black;\n\n    @media (min-width: 451px) {\n      display: none;\n    }\n  "])));
});

exports.MenuLink = MenuLink;

var WrappContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  padding: 16px 0;\n  border-bottom: 1px solid #CCC;\n"])));

exports.WrappContent = WrappContent;

var MenuLinkIcon = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  grid-area: 2 / 1 / auto / auto;\n  flex-shrink: 0;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n\n  svg {\n    flex-shrink: 0;\n    color: #000;\n    width: 24px;\n    height: 24px;\n    color: ", ";\n  }\n"])), function (_ref5) {
  var active = _ref5.active,
      theme = _ref5.theme;
  return active ? (0, _polished.lighten)(0.2, theme.colors.primary) : theme.colors.primary;
});

exports.MenuLinkIcon = MenuLinkIcon;

var MenuLinkText = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n  flex-basis: 100%;\n  grid-area: 2 / 2 / auto / auto;\n"])));

exports.MenuLinkText = MenuLinkText;

var TextInfo = _styledComponents.default.span(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: capitalize;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", ";\n\n  ", "\n"])), function (_ref6) {
  var active = _ref6.active,
      theme = _ref6.theme;
  return active ? (0, _polished.lighten)(0.2, theme.colors.primary) : theme.colors.primary;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    text-align: right;\n    display: inline-block;\n    color: #000;\n  "])));
});

exports.TextInfo = TextInfo;

var MenuLinkSeparator = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  grid-area: -1 / 1 / auto / -1;\n  margin: 15px -16px -16px 0px;\n\n  div {\n    width: 100%;\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n\n    ", "\n\n    hr {\n      display: block;\n      width: 100%;\n      margin: 0px;\n      border: none;\n      height: 1px;\n      background: rgb(231, 231, 231);\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      margin: 15px 0px -16px -16px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      margin: 15px -16px -16px 0px;\n    "])));
});

exports.MenuLinkSeparator = MenuLinkSeparator;

var DownloadAppContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 16px;\n  border-top: 1px solid #ccc;\n  position: absolute;\n  bottom: 0px;\n"])));

exports.DownloadAppContainer = DownloadAppContainer;

var LogoWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n\n  ", "\n\n  img {\n    width: 80%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 20px;\n  "])));
});

exports.LogoWrapper = LogoWrapper;

var DownloadAppLink = _styledComponents.default.a(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  img {\n    width: 100px;\n    height: 31px;\n    border-radius: 5px;\n  }\n"])));

exports.DownloadAppLink = DownloadAppLink;

var DownloadAppLinkContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  flex: 1;\n  p {\n    color: ", ";\n    font-weight: 500;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.DownloadAppLinkContainer = DownloadAppLinkContainer;