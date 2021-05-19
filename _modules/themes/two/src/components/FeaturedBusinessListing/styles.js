"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackView = exports.ErrorMessage = exports.PopularBusinesssList = exports.TextContent = exports.PositionedContainer = exports.PopularBusinessContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PopularBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 40px;\n\n  button.mobile {\n    display: none;\n  }\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n    button.desktop {\n      display: none;\n    }\n    button.mobile {\n      display: flex;\n      margin: 20px 0;\n      width: 120px;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n\n  ", "\n"])), function (_ref) {
  var isFeaturePage = _ref.isFeaturePage;
  return isFeaturePage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 91%;\n    margin: 0 auto;\n    padding-top: 60px;\n  "])));
});

exports.PopularBusinessContainer = PopularBusinessContainer;

var PositionedContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: static;\n\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.absolute && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      position: absolute;\n    "])));
}, function (props) {
  return props.fixed && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      position: fixed;\n    "])));
}, function (props) {
  return props.relative && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      position: relative;\n    "])));
});

exports.PositionedContainer = PositionedContainer;

var TextContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 30%;\n  padding: 20px 0;\n  h1 {\n    margin: 0px;\n  }\n  button {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.TextContent = TextContent;

var PopularBusinesssList = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 992px) {\n    > div {\n      margin: 10px;\n\n      &:first-child {\n        width: 100%;\n      }\n\n      &:not(:first-child) {\n        width: calc(50% - 20px);\n      }\n    }\n  }\n  @media (max-width: 576px) {\n    > div {\n      margin: 10px 5px;\n\n      &:not(:first-child) {\n        width: 100%;\n      }\n    }\n  }\n"])));

exports.PopularBusinesssList = PopularBusinesssList;

var ErrorMessage = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var BackView = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  span {\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n    color: ", ";\n    font-weight: 500;\n    font-size: 20px;\n    cursor: pointer;\n    width: 100px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.BackView = BackView;