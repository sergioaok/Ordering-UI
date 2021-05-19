"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarContainer = exports.WrapSearchBar = exports.UserEdit = exports.CustomerInfo = exports.MenuLink = exports.MenuItem = exports.Menu = exports.RightHeader = exports.LeftHeader = exports.LogoHeader = exports.InnerHeader = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;  \n  background-color: ", ";\n  position: relative;\n  z-index: 1005;\n\n  @media (min-width: 1200px) {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (_ref) {
  var home = _ref.home;
  return !home && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-bottom-right-radius: 15px;\n      border-bottom-left-radius: 15px;\n    "])));
});

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  justify-content: space-between;\n  width: 91%;\n  margin: 0px auto;\n  padding: 10px 0;\n  ", "\n"])), function (_ref2) {
  var home = _ref2.home;
  return home && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #fff;\n  "])));
});

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 80px;\n    height: 30px;\n    margin: 0;\n    vertical-align: middle;\n\n    @media (min-width: 768px) {\n      width: 120px;\n      height: 45px;\n    }\n  }\n"])));

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n  align-items: center;\n"])));

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  &.left-header {\n    > :first-child {\n      margin-left: 15px;\n      ", "\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  #select-input {\n    background-color: ", " !important;\n    color: #FFF !important;\n  }\n\n  .address-popover {\n    > div {\n      &:first-child {\n        color: ", " !important;\n        font-weight: 600;\n      }\n    }\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n        margin-left: 0;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Menu = Menu;

var MenuItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.MenuItem = MenuItem;

var MenuLink = _styledComponents.default.a(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 16px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 600;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref3) {
  var highlight = _ref3.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    border-radius: 100px;\n    padding: 5px 15px;\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.MenuLink = MenuLink;

var CustomerInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});

exports.CustomerInfo = CustomerInfo;

var UserEdit = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));

exports.UserEdit = UserEdit;

var WrapSearchBar = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 5px;\n  box-sizing: border-box;\n  justify-content: flex-end;\n  @media (max-width: 1200px) {\n    width: 91%;\n    margin: 0px auto;\n  }\n"])));

exports.WrapSearchBar = WrapSearchBar;

var SearchBarContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 100%;\n  padding: 10px 0;\n  position: sticky;\n  top: 0px;\n  z-index: 1000;\n  @media (max-width: 1200px) {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (_ref4) {
  var home = _ref4.home;
  return !home && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      border-bottom-right-radius: 15px;\n      border-bottom-left-radius: 15px;\n    "])));
});

exports.SearchBarContainer = SearchBarContainer;