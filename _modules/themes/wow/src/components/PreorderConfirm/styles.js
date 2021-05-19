"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotNowAction = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    font-size: 20px;\n    color: ", ";\n    text-align: center;\n  }\n\n  p {\n    color: ", ";\n    text-align: center;\n    margin-top: 0px;\n  }\n\n  button {\n    width: 100%;\n    max-width: 350px;\n    margin: 10px 0;\n    padding: 5px 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});

exports.Container = Container;

var NotNowAction = _styledComponents.default.a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});

exports.NotNowAction = NotNowAction;