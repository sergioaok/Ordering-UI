"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.FilterBusinessList = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  border-top: 1px solid ", ";\n  padding: 85px 0 30px 0;\n  display: flex;\n  column-gap: 30px;\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n    row-gap: 30px;\n    padding: 130px 0 30px 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.Container = Container;

var FilterBusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n"])));

exports.FilterBusinessList = FilterBusinessList;

var ErrorMessage = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;