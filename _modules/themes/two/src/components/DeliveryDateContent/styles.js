"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeSelectContent = exports.Option = exports.WrapTimeSelect = exports.WrapCalendar = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 30px 0;\n  > button {\n    width: 100%;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n"])));

exports.Container = Container;

var WrapCalendar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .react-calendar {\n    width: 100%;\n\n    .react-calendar__navigation {\n      border-bottom: 1px solid ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapCalendar = WrapCalendar;

var WrapTimeSelect = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));

exports.WrapTimeSelect = WrapTimeSelect;

var Option = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));

exports.Option = Option;

var TimeSelectContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > span {\n    margin: 0 10px;\n  }\n\n  > div {\n    width: 100px;\n    background-color: #fff !important;\n    border-radius: 5px;\n\n    &:last-child {\n      margin: 0 20px;\n    }    \n  }\n\n  #list {\n    width: 100%;\n  }\n"])));

exports.TimeSelectContent = TimeSelectContent;