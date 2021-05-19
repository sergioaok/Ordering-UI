"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTips = exports.DriverTipMessage = exports.WrapperInput = exports.DriverTipLabel = exports.FormDriverTip = exports.TipCard = exports.DriverTipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriverTipContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  width: 100%;\n"])));

exports.DriverTipContainer = DriverTipContainer;

var TipCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  text-transform: capitalize;\n  height: 30px;\n  min-width: 30px;\n  font-size: 14px;\n  padding: 5px 20px;\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    padding: 5px 30px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.TipCard = TipCard;

var FormDriverTip = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));

exports.FormDriverTip = FormDriverTip;

var DriverTipLabel = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  align-self: flex-start;\n\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n    margin-right: 0;\n  "])));
});

exports.DriverTipLabel = DriverTipLabel;

var WrapperInput = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n\n  input {\n    width: 65%;\n    padding: 4px 15px;\n    box-sizing: border-box;\n    flex: 1;\n    margin-right: 10px;\n  }\n\n  @media (min-width: 768px) {\n    input {\n      width: 80%;\n    }\n  }\n"])));

exports.WrapperInput = WrapperInput;

var DriverTipMessage = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 600;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.DriverTipMessage = DriverTipMessage;

var WrapperTips = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n\n  > div {\n    margin: 5px;\n  }\n"])));

exports.WrapperTips = WrapperTips;