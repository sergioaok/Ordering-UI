"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 20px 0;\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div {\n      &:first-child {\n        background: #fff;\n        border-radius: 5px;\n        box-sizing: border-box;\n        border: 1px solid ", ";\n      }\n      &:not(:first-child) {\n        width: 100%;\n      }\n    }\n  }\n\n  @media (max-width: 576px) {\n    margin-bottom: 90px;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.Container = Container;

var Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-left: 20px;\n  font-size: 14px;\n"])));

exports.Option = Option;