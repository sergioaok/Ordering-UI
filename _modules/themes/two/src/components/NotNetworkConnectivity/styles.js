"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 150px auto 100px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    margin: 70px auto;\n  }\n"])), function (_ref) {
  var isOnline = _ref.isOnline;
  return isOnline ? 'none' : 'flex';
});

exports.Container = Container;

var Image = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-left: 20px;\n  img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.Image = Image;