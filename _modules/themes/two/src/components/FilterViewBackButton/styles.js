"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackFilterView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackFilterView = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  span {\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n    color: ", ";\n    font-weight: 500;\n    font-size: 20px;\n    cursor: pointer;\n    width: 100px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.BackFilterView = BackFilterView;