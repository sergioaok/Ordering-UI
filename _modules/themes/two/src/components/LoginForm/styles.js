"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountdownTimer = exports.OtpWrapper = exports.LoginWith = exports.FormTitle = exports.InputGroup = exports.Line = exports.LoginWithEmail = exports.WrapperInputPhoneNumber = exports.WrapperPassword = exports.SkeletonSocialWrapper = exports.SocialButtons = exports.RedirectLink = exports.FormInput = exports.FormSide = exports.LoginContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n  flex-direction: column;\n  justify-content: center;\n  \n  @media (min-width: 768px) {\n    justify-content: flex-start;\n    background: ", ";\n    min-height: ", ";\n    flex-direction: row;\n    ", "\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : '100vh';
}, function (props) {
  return props.theme.colors.lightGrayColor;
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 90px)';
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return !isPopup && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-top: 60px;\n    "])));
});

exports.LoginContainer = LoginContainer;

var Side = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

var FormSide = (0, _styledComponents.default)(Side)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  background: #fff;\n  padding-bottom: 40px;\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    min-width: 580px;\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '100%' : '45%';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;

var FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  input {\n    padding: 10px 20px;\n  }\n\n  input:not(:last-child) {\n    margin: 10px 0px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 10px 15px;\n  }\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n"])), function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n    color: ", ";\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref9) {
  var register = _ref9.register;
  return register && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref10) {
    var isPopup = _ref10.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref11) {
  var isPopup = _ref11.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref12) {
  var isPopup = _ref12.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});

exports.RedirectLink = RedirectLink;

var SocialButtons = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n   width: ", ";\n   margin-top: 5px;\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n"])), function (_ref13) {
  var isPopup = _ref13.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SocialButtons = SocialButtons;

var SkeletonSocialWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    border-radius: 30px;\n  }\n"])), function (_ref14) {
  var isPopup = _ref14.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SkeletonSocialWrapper = SkeletonSocialWrapper;

var WrapperPassword = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  margin: 20px 0;\n  label {\n    color: ", ";\n    font-weight: 500;\n    font-size: 18px;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    > div {\n      padding: 0px;\n      \n      > a {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.WrapperPassword = WrapperPassword;

var WrapperInputPhoneNumber = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  margin: 20px 0;\n  label {\n    color: ", ";\n    font-weight: 500;\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.WrapperInputPhoneNumber = WrapperInputPhoneNumber;

var LoginWithEmail = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 80%;\n  p {\n    color: ", ";\n    padding: 0 10px;\n    font-size: 16px;\n  }\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.LoginWithEmail = LoginWithEmail;

var Line = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  flex: 1;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Line = Line;

var InputGroup = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  label {\n    color: ", ";\n    font-weight: 500;\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.InputGroup = InputGroup;

var FormTitle = _styledComponents.default.h1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-size: 42px;\n  margin-bottom: 0px;\n\n  @media (max-width: 992px) {\n    font-size: 32px;\n  }\n"])));

exports.FormTitle = FormTitle;

var LoginWith = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 14px;\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (_ref15) {
  var isPopup = _ref15.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref16) {
  var isPopup = _ref16.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "])));
});

exports.LoginWith = LoginWith;

var OtpWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    \n    .otp-input{\n      width: 30px;\n      height: 30px;\n      padding: 12px 20px;\n      border: 2px solid #CCC;\n      border-radius: 16px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.OtpWrapper = OtpWrapper;

var CountdownTimer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n  \n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #DBDCDB;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: ", " !important;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#DBDCDB');
}, function () {
  return (0, _polished.darken)(0.09, '#DBDCDB');
});

exports.CountdownTimer = CountdownTimer;