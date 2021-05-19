"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.HeaderItem = exports.Border = exports.WrapButtonText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapButtonText = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  column-gap: 5px;\n\n  svg {\n    font-size: 18px;\n  }\n\n  > span {\n    display: inherit;\n  }\n"])));

exports.WrapButtonText = WrapButtonText;

var Border = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #7f7c7c;\n"])));

exports.Border = Border;

var HeaderItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"])));

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #FFF;\n  color: #333;\n  padding: 15px 30px;\n  max-width: 600px;\n  z-index: 1001;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 10px;\n  margin-top: 15px;\n\n  @media (max-width: 992px) {\n    padding: 10px 15px;\n  }\n\n  @media (max-width: 576px) {\n    left: 60px;\n  }\n"])));

exports.PopoverBody = PopoverBody;