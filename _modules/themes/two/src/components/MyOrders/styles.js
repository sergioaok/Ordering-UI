"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 60px;\n  padding-bottom: 30px;\n\n  > h1 {\n    font-size: 32px;\n\n    @media (max-width: 576px) {\n      font-size: 24px;\n    }\n  }\n"])));

exports.Container = Container;