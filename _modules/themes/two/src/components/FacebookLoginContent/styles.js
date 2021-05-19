"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cancel = exports.TermsAndPrivacy = exports.EditThisButton = exports.Tagline = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 40px auto;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  justify-content: center;\n  align-items: center;\n\n  > p {\n    color: ", ";\n    text-align: center;\n  }\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    font-size: 18px;\n  }\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Container = Container;

var Tagline = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  p {\n    margin: 0px;\n    font-weight: 500;\n    text-align: center;\n    > span {\n      font-weight: 600;\n    }\n  }\n"])));

exports.Tagline = Tagline;

var EditThisButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: ", ";\n  background: transparent;\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  cursor: pointer;\n\n  &:active {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.blueColor;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.blueColor);
});

exports.EditThisButton = EditThisButton;

var TermsAndPrivacy = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  span {\n    color: ", ";\n    cursor: pointer;\n    &:active {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.blueColor;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.blueColor);
});

exports.TermsAndPrivacy = TermsAndPrivacy;

var Cancel = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 18px;\n  &:active {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.blueColor);
});

exports.Cancel = Cancel;