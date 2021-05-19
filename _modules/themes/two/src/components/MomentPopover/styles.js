"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverArrow = exports.PopoverBody = exports.HeaderItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  padding-left: 15px;\n"])), function (props) {
  return props.isHome && props.auth ? '#FFF' : props.theme.colors.primary;
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 550px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;