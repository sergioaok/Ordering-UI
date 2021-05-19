"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.CustomerInfo = exports.SubMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.RightHeader = exports.LeftHeader = exports.LogoHeader = exports.InnerHeader = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Selects = require("../../styles/Selects");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;  \n\n  ", "\n"])), function (props) {
  return props.home ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #333;\n\n  & ", " {\n    background-color: transparent;\n    border-color: transparent;\n    color: ", "\n  }\n\n  & ", " {\n    color: #FFF;\n  }\n\n  "])), _Selects.Select, function (props) {
    return props.theme.colors.primaryContrast;
  }, MenuLink) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    & ", "{\n      div{\n        color: #333;\n      }\n    }\n  "])), SubMenu);
});

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  justify-content: space-between;\n  width: 98%;\n  margin: 10px auto;\n"])));

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 150px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  &.left-header {\n    > :first-child {\n      margin-left: 15px;\n      ", "\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n        margin-left: 0;\n      "])));
});

exports.Menu = Menu;

var MenuItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.MenuItem = MenuItem;

var MenuLink = _styledComponents.default.a(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 16px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 100px;\n    padding: 5px 15px;\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  });
});

exports.MenuLink = MenuLink;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
exports.SubMenu = SubMenu;

var CustomerInfo = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});

exports.CustomerInfo = CustomerInfo;

var UserEdit = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));

exports.UserEdit = UserEdit;