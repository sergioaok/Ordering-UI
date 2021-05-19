"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagesListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagesListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 30px 10px 30px;\n  a{\n    display: inline;\n    text-decoration: none;\n    color: #000\n  }\n"])));

exports.PagesListContainer = PagesListContainer;