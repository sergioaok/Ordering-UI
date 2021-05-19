"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperMap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 0 20px;\n  > div {\n    position: relative !important; \n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n\n  @media(min-width: 681px){\n    padding: 0px;\n    > div {\n      width: 75% !important;\n    }\n  }\n\n  @media(min-width: 1201px){\n    > div {\n      width: 50% !important;\n    }\n  }\n\n"])));

exports.WrapperMap = WrapperMap;