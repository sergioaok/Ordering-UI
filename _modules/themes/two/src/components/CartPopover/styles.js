"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverArrow = exports.PopoverBody = exports.HeaderItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  span {\n    display: flex;\n    align-items: center;\n    column-gap: 15px;\n    p {\n     color: #fff;\n     margin: 0px;\n    }\n    svg {\n      color: #fff;\n      font-size: 24px;\n    }\n  }\n\n  &:active {\n    background-color:  ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;