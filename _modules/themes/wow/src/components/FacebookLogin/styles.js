"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FacebookButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #405993;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 30px;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  &:active {\n    background: ", ";\n  }\n  svg {\n    font-size: 28px;\n    color: #FFF;\n  }\n\n  div {\n    margin: 0 auto;\n    color: #FFF;\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.07, '#405993');
});

exports.FacebookButton = FacebookButton;