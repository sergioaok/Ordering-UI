"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMobileViewInnerBottom = exports.HeaderMobileViewBottom = exports.WrapMomentAndAddress = exports.ToText = exports.LeftHeader = exports.SubMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.RightHeader = exports.CenterHeader = exports.LogoHeader = exports.InnerHeader = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  background-color: transparent;\n  height: 60px;\n  ", "\n  ", "\n  ", "\n"])), function (_ref) {
  var isHome = _ref.isHome;
  return isHome && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n  "])));
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return !isHome && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    position: fixed;\n    top: 0px;\n    background-color: #fff;\n    z-index: 1100;\n  "])), function (props) {
    return props.theme.colors.secondary;
  });
}, function (_ref3) {
  var isAuthPage = _ref3.isAuthPage;
  return isAuthPage && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    @media (max-width: 576px) {\n      display: none;\n    }\n  "])));
});

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #FFF;\n  width: 91%;\n  margin: 0px auto;\n  position: relative;\n  justify-content: space-between;\n"])));

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  img {\n    margin: 0;\n    vertical-align: middle;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 173px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  "])));
});

exports.LogoHeader = LogoHeader;

var CenterHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  top: 0px;\n\n  @media (max-width: 992px) {\n    ", "\n  }\n\n  @media (max-width: 576px) {\n    ", "\n  }\n"])), function (_ref5) {
  var isHome = _ref5.isHome;
  return !isHome && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      position: relative;\n      flex: 1;\n      justify-content: flex-start;\n    "])));
}, function (_ref6) {
  var isHome = _ref6.isHome;
  return isHome && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      top: 70px;\n    "])));
});

exports.CenterHeader = CenterHeader;

var RightHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n  z-index: 2;\n"])));

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  &.left-header {\n    > :first-child {\n      margin-left: 15px;\n      ", "\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 15px;\n  }\n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n        margin-left: 0;\n      "])));
});

exports.Menu = Menu;

var MenuItem = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.MenuItem = MenuItem;

var MenuLink = _styledComponents.default.a(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 7px 20px;\n  color: #FFF;\n  cursor: pointer;\n  border: 1px solid #c31d20;\n  background-color: #c31d20;\n  border-radius: 100px;\n\n  ", "\n"])), function (_ref7) {
  var highlight = _ref7.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background-color: #fff;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.grayTextColor;
  });
});

exports.MenuLink = MenuLink;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
exports.SubMenu = SubMenu;

var LeftHeader = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  z-index: 3;\n"])));

exports.LeftHeader = LeftHeader;

var ToText = _styledComponents.default.p(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-transform: lowercase;\n  padding: 0 10px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.ToText = ToText;

var WrapMomentAndAddress = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.WrapMomentAndAddress = WrapMomentAndAddress;

var HeaderMobileViewBottom = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  background: #fff;\n  border-bottom: 1px solid ", ";\n  width: 100vw;\n  height: 60px;\n  margin-top: 60px;\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.HeaderMobileViewBottom = HeaderMobileViewBottom;

var HeaderMobileViewInnerBottom = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));

exports.HeaderMobileViewInnerBottom = HeaderMobileViewInnerBottom;