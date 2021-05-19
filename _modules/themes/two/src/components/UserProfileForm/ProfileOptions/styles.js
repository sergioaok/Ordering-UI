"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexTabs = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexTabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  div{\n    justify-content: space-evenly\n  }\n  \n  a{\n    text-decoration: none;\n    color: inherit;\n  }\n\n  svg{\n    position: relative;\n    top: 2px;\n  }\n\n  @media (min-width: 480px){\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 768px){\n    width: 50%;\n  }\n"])));

exports.FlexTabs = FlexTabs;