"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroupPrimary = exports.InputSecundary = exports.InputPrimary = exports.InputGroupRight = exports.TextArea = exports.InputGroupLeft = exports.InputGroup = exports.Input = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _Buttons = require("../Buttons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n  &:focus {\n    border-color: ", ";\n  }\n  ", "\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #DBDCDB;\n  }\n  &:-ms-input-placeholder {\n    color: #DBDCDB;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var w = _ref.w;
  return w && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 20%;\n  "])));
});

exports.Input = Input;

var InputGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  & > ", ":not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n    padding-left: 0;\n  }\n  & > ", ":not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 0;\n    padding-right: 0;\n  }\n"])), Input, Input);

exports.InputGroup = InputGroup;

var InputGroupLeft = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  line-height: 34px;\n  padding-left: 7px;\n  padding-right: 7px;\n  font-size: 16px;\n  border-width: 1px;\n  height: 34px;\n  border-style: solid;\n  ", "\n  & ", " {\n    margin-left: -7px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left-width: 0;\n      border-radius: 34px 34px 0 0;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-radius: 34px 0 0 34px;\n      border-right-width: 0;\n  "])));
}, _Buttons.Button, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: -7px;\n        margin-left: 0;\n    "])));
});

exports.InputGroupLeft = InputGroupLeft;

var TextArea = _styledComponents.default.textarea(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n  resize: none;\n  &:focus {\n    border-color: ", ";\n  }\n  ", "\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #DBDCDB;\n  }\n  &:-ms-input-placeholder {\n    color: #DBDCDB;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref2) {
  var w = _ref2.w;
  return w && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: 20%;\n  "])));
});

exports.TextArea = TextArea;
var InputGroupRight = (0, _styledComponents.default)(InputGroupLeft)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 0 34px 34px 0;\n  line-height: 34px;\n  border-right-width: 1px;\n  border-left-width: 0;\n  ", "\n  & ", " {\n    margin-left: 0;\n    margin-right: -7px;\n    ", "\n  }\n  \n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        border-left-width: 1px;\n        border-right-width: 0;\n        border-radius: 0 0 34px 34px;\n    "])));
}, _Buttons.Button, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: -7px;\n        margin-right: 0\n    "])));
});
exports.InputGroupRight = InputGroupRight;
var InputPrimary = (0, _styledComponents.default)(Input)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.primary);
});
exports.InputPrimary = InputPrimary;
var InputSecundary = (0, _styledComponents.default)(Input)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
exports.InputSecundary = InputSecundary;
var InputGroupPrimary = (0, _styledComponents.default)(InputGroup)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  & > ", " {\n    color: ", ";\n    border-color: ", ";\n  }\n"])), InputGroupLeft, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.InputGroupPrimary = InputGroupPrimary;