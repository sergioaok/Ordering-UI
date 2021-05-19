"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadButtonGroup = exports.DownloadAppDescription = exports.LogoWrap = exports.WrapDownloadAppLink = exports.WrappUserAccountContent = exports.WrappAccountText = exports.MenuLinkSeparator = exports.TextInfo = exports.MenuLinkText = exports.MenuLinkIcon = exports.WrappContent = exports.MenuLink = exports.MenuClose = exports.SidebarContent = exports.IconContent = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    background: transparent;\n  }\n"])));

exports.Container = Container;

var IconContent = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #010002;\n  }\n"])));

exports.IconContent = IconContent;

var SidebarContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 0;\n  background-color: ", ";\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  box-shadow: ", ";\n\n  ", "\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.white;
}, function (_ref) {
  var isHome = _ref.isHome;
  return isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;';
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 0;\n  "])));
});

exports.SidebarContent = SidebarContent;

var MenuClose = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: ", ";\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? '#333' : 'rgb(247, 247, 247)';
}, function (_ref3) {
  var isHome = _ref3.isHome;
  return isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)';
}, function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? 'rgb(255, 255, 255)' : '#333';
});

exports.MenuClose = MenuClose;

var MenuLink = _styledComponents.default.a(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  outline: none !important;\n\n  ", ";\n\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"])), function (_ref5) {
  var isCustomer = _ref5.isCustomer;
  return isCustomer && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid black;\n\n    @media (min-width: 451px) {\n      display: none;\n    }\n  "])));
});

exports.MenuLink = MenuLink;

var WrappContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  padding: 16px;\n"])));

exports.WrappContent = WrappContent;

var MenuLinkIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  grid-area: 2 / 1 / auto / auto;\n  flex-shrink: 0;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n\n  svg {\n    flex-shrink: 0;\n    color: #000;\n    width: 24px;\n    height: 24px;\n    color: ", "\n  }\n"])), function (_ref6) {
  var active = _ref6.active,
      theme = _ref6.theme;
  return active ? theme.colors.darkGreen : '#000';
});

exports.MenuLinkIcon = MenuLinkIcon;

var MenuLinkText = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n  flex-basis: 100%;\n  grid-area: 2 / 2 / auto / auto;\n"])));

exports.MenuLinkText = MenuLinkText;

var TextInfo = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: capitalize;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", "\n\n  ", "\n"])), function (_ref7) {
  var active = _ref7.active,
      theme = _ref7.theme;
  return active ? theme.colors.darkGreen : '#000';
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    text-align: right;\n    display: inline-block;\n    color: #000;\n  "])));
});

exports.TextInfo = TextInfo;

var MenuLinkSeparator = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  grid-area: -1 / 1 / auto / -1;\n  margin: 15px -16px -16px 0px;\n\n  div {\n    width: 100%;\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n\n    ", "\n\n    hr {\n      display: block;\n      width: 100%;\n      margin: 0px;\n      border: none;\n      height: 1px;\n      background: rgb(231, 231, 231);\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      margin: 15px 0px -16px -16px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      margin: 15px -16px -16px 0px;\n    "])));
});

exports.MenuLinkSeparator = MenuLinkSeparator;

var WrappAccountText = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  span {\n    &:last-child {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkGreen;
});

exports.WrappAccountText = WrappAccountText;

var WrappUserAccountContent = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  padding: 16px;\n\n  img {\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n  }\n\n  svg {\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n  }\n"])));

exports.WrappUserAccountContent = WrappUserAccountContent;

var WrapDownloadAppLink = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  border-top: 1px solid #EEEEEE;\n  padding: 16px;\n  margin-top: 15px;\n"])));

exports.WrapDownloadAppLink = WrapDownloadAppLink;

var LogoWrap = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  border: 1px solid #EEEEEE;\n  border-radius: 5px;\n  padding: 3px 4px;\n"])));

exports.LogoWrap = LogoWrap;

var DownloadAppDescription = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 20px;\n  align-items: center;\n  margin-bottom: 15px;\n"])));

exports.DownloadAppDescription = DownloadAppDescription;

var DownloadButtonGroup = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 20px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n\n    svg {\n      font-size: 20px;\n    }\n  }\n"])));

exports.DownloadButtonGroup = DownloadButtonGroup;