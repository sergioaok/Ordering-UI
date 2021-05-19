"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessNumber = exports.ClearAll = exports.WrapFilterSectionTitle = exports.SortItem = exports.SortContainer = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-width: 220px;\n"])));

exports.Container = Container;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 32px;\n  text-transform: capitalize;\n  color: ", ";\n  margin: 0px;\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkTextColor;
});

exports.Title = Title;

var SortContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));

exports.SortContainer = SortContainer;

var SortItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 5px;\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n\n  span {\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkTextColor;
});

exports.SortItem = SortItem;

var WrapFilterSectionTitle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  p {\n    font-size: 20px;\n    color: ", ";\n    margin: 10px 0;\n  }\n"])), function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.darkTextColor;
});

exports.WrapFilterSectionTitle = WrapFilterSectionTitle;

var ClearAll = _styledComponents.default.a(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-decoration: underline;\n  font-weight: 600;\n"])));

exports.ClearAll = ClearAll;

var BusinessNumber = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-bottom: 15px;\n"])));

exports.BusinessNumber = BusinessNumber;