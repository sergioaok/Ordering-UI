"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapMomentContainer = exports.Selector = exports.WrapTimeSelect = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapTimeSelect = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  padding: 10px 0;\n"])));

exports.WrapTimeSelect = WrapTimeSelect;

var Selector = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n  }\n"])));

exports.Selector = Selector;

var WrapMomentContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));

exports.WrapMomentContainer = WrapMomentContainer;