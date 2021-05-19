"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCard = exports.WrapDriverTip = exports.DriverTipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriverTipContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  p {\n    font-size: 12px;\n    margin-top: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});

exports.DriverTipContainer = DriverTipContainer;

var WrapDriverTip = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"])));

exports.WrapDriverTip = WrapDriverTip;

var TipCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  cursor: pointer;\n  text-transform: capitalize;\n  height: 30px;\n  width: 30px;\n  font-size: 14px;\n  background-color: ", ";\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    padding: 5px 30px;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.TipCard = TipCard;