"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonWrapper = exports.Tab = exports.ContentOption = exports.SelectedOption = exports.Option = exports.OrderTypeWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderTypeWrapper = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isTabStyle = _ref.isTabStyle;
  return isTabStyle ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    background-color: ", ";\n    width: fit-content;\n    border-radius: 30px;\n    > div:first-child:after {\n      display: none;\n    }\n    > div:first-child {\n      margin: 0;\n    }\n  "])), function (props) {
    return props.theme.colors.lightGrayColor;
  }) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    div {\n      max-width: 120px;\n    }\n    @media (min-width: 380px) {\n      div{\n        max-width: initial;\n      }\n    }\n  "])));
});

exports.OrderTypeWrapper = OrderTypeWrapper;

var Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    min-width: 14px;\n    margin-right: 5px;\n    ", "\n  }  \n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});

exports.Option = Option;

var SelectedOption = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["  \n  margin: 0;\n  max-width: 60px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  \n  @media (min-width: 380px) {\n    max-width: initial;\n  }\n"])));

exports.SelectedOption = SelectedOption;
var ContentOption = (0, _styledComponents.default)(SelectedOption)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 80px;\n"])));
exports.ContentOption = ContentOption;

var Tab = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 7px 15px;\n  margin-left: 10px;\n  border-radius: 25px;\n  position: relative;\n  &:after {\n    display: block;\n    position: absolute;\n    top: 7px;\n    bottom: 7px;\n    border-right: 1px solid ", ";\n    content: '';\n    margin: 0 -20px;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  p {\n    display: none;\n  }\n\n  svg,\n  p {\n    color: ", ";\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.grayColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    svg,\n    p {\n      color: #FFF;\n      display: block;\n    }\n    @media (max-width: 576px) {\n      p {\n        display: none;\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.Tab = Tab;

var SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  > span {\n    display: flex;\n  }\n  span {\n    border-radius: 30px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;