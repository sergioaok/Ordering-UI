"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartContainer = exports.DeliveryDetailsInfo = exports.DeliveryDetailsInfoWrap = exports.DeliverDetailsContainer = exports.Menu = exports.LogoHeader = exports.RightHeader = exports.LeftHeader = exports.InnerHeader = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  position: fixed;\n  width: 100%;\n  z-index: 1001;\n  box-sizing: border-box;\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.secundary;
});

exports.HeaderContainer = HeaderContainer;

var InnerHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 10px auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));

exports.InnerHeader = InnerHeader;

var LeftHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"])));

exports.RightHeader = RightHeader;

var LogoHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 170px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});

exports.LogoHeader = LogoHeader;

var Menu = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n"])));

exports.Menu = Menu;

var DeliverDetailsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isSearchBarVisiable = _ref.isSearchBarVisiable;
  return isSearchBarVisiable && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: 260px;\n    ", "\n  "])), function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: initial;\n      margin-left: 260px;\n    "])));
  });
});

exports.DeliverDetailsContainer = DeliverDetailsContainer;

var DeliveryDetailsInfoWrap = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.DeliveryDetailsInfoWrap = DeliveryDetailsInfoWrap;

var DeliveryDetailsInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  cursor: pointer;\n\n  p {\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 150px;\n  }\n"])));

exports.DeliveryDetailsInfo = DeliveryDetailsInfo;

var CartContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n  background-color: ", ";\n  padding: 5px 10px;\n  border-radius: 20px;\n\n  svg {\n    color: ", ";\n    font-size: 20px;\n  }\n\n  p {\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.white;
});

exports.CartContainer = CartContainer;