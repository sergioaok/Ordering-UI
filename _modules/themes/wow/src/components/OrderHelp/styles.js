"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelpSection = exports.HelpItemHeader = exports.HelpItem = exports.HelpContent = exports.CancelButtonContainer = exports.BusinessInformation = exports.Logo = exports.OrderInfo = exports.InnerContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  padding: 30px 0;\n"])));

exports.Container = Container;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n\n  @media (min-width: 992px) {\n    width: 80%;\n  }\n"])));

exports.InnerContainer = InnerContainer;

var OrderInfo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.OrderInfo = OrderInfo;

var Logo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  box-shadow: 0px 3px 4px rgb(128 128 128 / 5%), 0px 3px 3px rgb(128 128 128 / 5%), 0px 1px 8px rgb(128 128 128 / 5%);\n  border-radius: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n\n  @media (min-width: 480px){\n    width: 75px;\n    height: 75px;\n  }\n"])));

exports.Logo = Logo;

var BusinessInformation = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 85px);\n  ", "\n\n  h2 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding-left: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});

exports.BusinessInformation = BusinessInformation;

var CancelButtonContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 20px;\n  > button {\n    padding: 5px 0;\n    width: 100%;\n    max-width: 300px;\n  }\n"])));

exports.CancelButtonContainer = CancelButtonContainer;

var HelpContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n"])));

exports.HelpContent = HelpContent;

var HelpItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});

exports.HelpItem = HelpItem;

var HelpItemHeader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  padding: 15px;\n\n  svg {\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.HelpItemHeader = HelpItemHeader;

var HelpSection = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  h1 {\n    color: ", ";\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.HelpSection = HelpSection;