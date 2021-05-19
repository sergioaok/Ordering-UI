"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundImage = exports.NotFound = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NotFound = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: auto;\n  margin: 20px auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 840px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));

exports.NotFound = NotFound;

var NotFoundImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 300px;\n"])));

exports.NotFoundImage = NotFoundImage;