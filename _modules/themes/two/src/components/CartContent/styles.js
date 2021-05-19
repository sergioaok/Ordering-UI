"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotCarts = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0px 20px;\n\n  div:not(:last-child) {\n    padding-bottom: 5px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 10px;\n    padding: 0;\n  }\n"])));

exports.Container = Container;

var NotCarts = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));

exports.NotCarts = NotCarts;