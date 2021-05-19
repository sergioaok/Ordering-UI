"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = exports.Hours = exports.Days = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 10px;\n"])));

exports.Title = Title;

var Days = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    border-radius: unset;\n    border-bottom: 1px solid #0000004d;\n    height: inherit;\n\n    > div {\n      &:first-child {\n        padding-top: 8px;\n        padding-bottom: 8px;\n      }\n    }\n\n    #list {\n      width: 100%;\n      border-radius: unset;\n    }\n  }\n"])));

exports.Days = Days;

var Hours = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  > div {\n    width: 100%;\n    border-radius: unset;\n    border-bottom: 1px solid #0000004d;\n    height: inherit;\n\n    > div {\n      &: first-child {\n        display: flex;\n        justify-content: space-between;\n        padding-top: 8px;\n        padding-bottom: 8px;\n      }\n    }\n    #list {\n      width: 100%;\n      border-radius: unset;\n    } \n  }\n"])));

exports.Hours = Hours;

var ButtonGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  margin-top: 20px;\n\n  button {\n    height: 50px;\n    width: 100%;\n    border-radius: unset;\n  }\n"])));

exports.ButtonGroup = ButtonGroup;