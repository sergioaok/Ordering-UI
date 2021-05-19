"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserData = exports.Header = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0;\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 700px){\n    flex-direction: column;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.Container = Container;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 200px;\n  h1 {\n    text-transform: uppercase;\n    margin: 0px;\n    font-size: 20px;\n  }\n  span {\n    cursor: pointer;\n    color: ", ";\n    font-weight: 600;\n  }\n\n  @media (max-width: 700px){\n    width: 100%;\n    display: flex;\n    column-gap: 10px;\n    padding-bottom: 10px;\n    h1 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Header = Header;

var UserData = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.UserData = UserData;