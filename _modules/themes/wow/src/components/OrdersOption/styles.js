"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundContent = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var NotFoundContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    color: ", ";\n    margin: 0px;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n  }\n\n  p {\n    color: ", ";\n    text-align: center;\n  }\n\n  button {\n    font-weight: 600;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin-top: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});

exports.NotFoundContent = NotFoundContent;