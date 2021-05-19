"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 10px;\n\n  @media (min-width: 769px) {\n    padding: 0px;\n  }\n"])));

exports.Container = Container;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 30px;\n  font-weight: 600;\n  padding: 0px 10px 15px;\n"])));

exports.Title = Title;