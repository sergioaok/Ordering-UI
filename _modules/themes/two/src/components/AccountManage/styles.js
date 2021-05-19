"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountDeleteSection = exports.AccountDataSection = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  h1 {\n    font-size: 32px;\n  }\n  @media (max-width: 992px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));

exports.Container = Container;

var AccountDataSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-bottom: 20px;\n  h2 {\n    font-size: 24px;\n  }\n\n  p {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  button {\n    color: ", ";\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 18px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.AccountDataSection = AccountDataSection;
var AccountDeleteSection = (0, _styledComponents.default)(AccountDataSection)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secondary;
});
exports.AccountDeleteSection = AccountDeleteSection;