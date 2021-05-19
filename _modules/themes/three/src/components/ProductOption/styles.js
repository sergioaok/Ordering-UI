"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOptionTitle = exports.Flag = exports.Title = exports.WrapHeader = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.error {\n    background-color: orange;\n  }\n"])));

exports.Container = Container;

var WrapHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 0 15px;\n  margin: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.WrapHeader = WrapHeader;

var Title = _styledComponents.default.h3(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])));

exports.Title = Title;

var Flag = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 13px;\n  margin: 0px;\n  text-transform: capitalize;\n  color: ", ";\n  font-weight: 500;\n\n  @media (min-width: 381px) {\n    font-size: 14px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGray;
});

exports.Flag = Flag;

var WrapOptionTitle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  display: flex;\n  flex-direction: column;\n"])));

exports.WrapOptionTitle = WrapOptionTitle;