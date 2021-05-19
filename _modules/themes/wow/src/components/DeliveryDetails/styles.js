"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressContainer = exports.TimeWrapper = exports.DeliveryTimeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeliveryTimeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 10px;\n\n  > button {\n    font-weight: 600;\n  }\n"])));

exports.DeliveryTimeContainer = DeliveryTimeContainer;

var TimeWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 10px 0;\n\n  span:first-child {\n    color: ", ";\n  }\n\n  span:not(:first-child) {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});

exports.TimeWrapper = TimeWrapper;

var AddressContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h1 {\n    color: ", ";\n    font-size: 18px;\n    font-weight: 600;\n    margin: 10px 0;\n  }\n\n  p {\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});

exports.AddressContainer = AddressContainer;