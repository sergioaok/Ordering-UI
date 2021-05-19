"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadAppLink = exports.AppLinkWrapper = exports.LogoWrapper = exports.DownloadAppInnerContainer = exports.DownloadAppContainer = exports.PopoverListLink = exports.PopoverListItem = exports.PopoverList = exports.PopoverArrow = exports.PopoverBody = exports.HeaderItem = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    color: ", ";\n    height: 25px;\n    width: 25px;\n  }\n\n  span {\n    color: ", ";\n    font-weight: 500;\n    ", "\n  }\n"])), function (_ref) {
  var isPhoto = _ref.isPhoto;
  return isPhoto ? 'auto' : '25px';
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : "\n      margin-left: 5px;\n    ";
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding-top: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  opacity: 0.95;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;

var PopoverList = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.PopoverList = PopoverList;
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 15px;\n  border-bottom: 1px solid #eee;\n  align-items: center;\n  color: #333;\n  font-size: 18px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #eee;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});

var PopoverListItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), PopoverListItemStyles);

exports.PopoverListItem = PopoverListItem;

var PopoverListLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n  color: ", ";\n  ", "\n"])), PopoverListItemStyles, function (props) {
  return props.theme.colors.primary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return (0, _polished.lighten)(0.2, props.theme.colors.primary);
  });
});

exports.PopoverListLink = PopoverListLink;

var DownloadAppContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 10px 15px;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.DownloadAppContainer = DownloadAppContainer;

var DownloadAppInnerContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.DownloadAppInnerContainer = DownloadAppInnerContainer;

var LogoWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70px;\n  height: 70px;\n  margin-right: 10px;\n\n  ", "\n\n  img {\n    width: 80%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 10px;\n  "])));
});

exports.LogoWrapper = LogoWrapper;

var AppLinkWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));

exports.AppLinkWrapper = AppLinkWrapper;

var DownloadAppLink = _styledComponents.default.a(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  img {\n    width: 100px;\n    height: 31px;\n    border-radius: 5px;\n  }\n"])));

exports.DownloadAppLink = DownloadAppLink;