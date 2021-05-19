"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Header = exports.AddressContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.AddressContainer = AddressContainer;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n"])));

exports.Header = Header;

var Text = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    font-weight: 500;\n  }\n  a {\n    cursor: pointer;\n    font-size: 14px;\n    text-decoration: underline;\n    font-weight: 600;\n  }\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n    span {\n      font-size: 18px;\n    }\n  }\n"])));

exports.Text = Text;