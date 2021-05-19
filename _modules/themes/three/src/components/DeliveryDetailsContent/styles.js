"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressFormContainer = exports.WrapScheduleTime = exports.ScheduleContainer = exports.WrapperAddress = exports.AddressContainer = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 10px;\n\n  > button {\n    width: 100%;\n    margin-top: 20px;\n    border-radius: unset;\n    padding-top: 7px;\n    padding-bottom: 7px;\n  }\n\n  @media (min-width: 769px) {\n    padding: 0px;\n  }\n"])));

exports.Container = Container;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 30px;\n  font-weight: 600;\n  padding: 0px 10px 15px;\n"])));

exports.Title = Title;

var AddressContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  padding-bottom: 10px;\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.AddressContainer = AddressContainer;

var WrapperAddress = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  svg {\n    font-size: 20px;\n  }\n"])));

exports.WrapperAddress = WrapperAddress;

var ScheduleContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n"])));

exports.ScheduleContainer = ScheduleContainer;

var WrapScheduleTime = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n\n  svg {\n    font-size: 20px;\n  }\n"])));

exports.WrapScheduleTime = WrapScheduleTime;

var AddressFormContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n"])));

exports.AddressFormContainer = AddressFormContainer;