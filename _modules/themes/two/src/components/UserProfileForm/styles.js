"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapAccountManage = exports.PrivacyContainer = exports.WrapperForm = exports.ProfileContainer = exports.Header = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n  padding-top: 60px;\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n"])));

exports.Container = Container;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  h1 {\n    cursor: pointer;\n    font-size: 32px;\n    width: 30%;\n    margin: 0px;\n  }\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n    align-items: flex-start;\n    h1 {\n      font-size: 24px;\n      width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.Header = Header;

var ProfileContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  margin-bottom: 30px;\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.ProfileContainer = ProfileContainer;

var WrapperForm = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n\n  > p {\n    span {\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WrapperForm = WrapperForm;

var PrivacyContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.PrivacyContainer = PrivacyContainer;

var WrapAccountManage = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 50%;\n  margin: 30px auto;\n  border: 1px solid ", ";\n  border-radius: 5px;\n\n  @media (max-width: 992px) {\n    width: 91%;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapAccountManage = WrapAccountManage;