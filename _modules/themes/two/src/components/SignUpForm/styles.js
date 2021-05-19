"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapTermsAndAgree = exports.WrapperPassword = exports.TogglePassword = exports.InputGroup = exports.Line = exports.SignupWithEmail = exports.FormTitle = exports.SkeletonSocialWrapper = exports.SkeletonWrapper = exports.SocialButtons = exports.RedirectLink = exports.FormInput = exports.FormSide = exports.SignUpContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SignUpContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n  background: ", ";\n  flex-direction: column;\n  \n  @media (min-width: 768px) {\n    flex-direction: row;\n    ", "\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 65px)';
}, function (props) {
  return props.theme.colors.lightGrayColor;
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return !isPopup && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-top: 60px;\n    "])));
});

exports.SignUpContainer = SignUpContainer;

var Side = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

var FormSide = (0, _styledComponents.default)(Side)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  background: #fff;\n  padding-bottom: 40px;\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    min-width: 580px;\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '100%' : '45%';
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;

var FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  input {\n    padding: 10px 20px;\n  }\n\n  div.phone_number {\n    margin: 10px 0px;\n    width: 100%;\n  }\n\n  input.form:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 10px 15px;\n  }\n"])), function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 20px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n    color: ", ";\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref8) {
  var register = _ref8.register;
  return register && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref9) {
    var isPopup = _ref9.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref10) {
  var isPopup = _ref10.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref11) {
  var isPopup = _ref11.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});

exports.RedirectLink = RedirectLink;

var SocialButtons = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: ", ";\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n    margin-bottom: 15px;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n"])), function (_ref12) {
  var isPopup = _ref12.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SocialButtons = SocialButtons;

var SkeletonWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  span{\n    margin: 10px 0;\n    border-radius: 10px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;
var SkeletonSocialWrapper = (0, _styledComponents.default)(SkeletonWrapper)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    margin-top: 0;\n  }\n"])), function (_ref13) {
  var isPopup = _ref13.isPopup;
  return isPopup ? '90%' : '80%';
});
exports.SkeletonSocialWrapper = SkeletonSocialWrapper;

var FormTitle = _styledComponents.default.h1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 42px;\n  margin-bottom: 0px;\n\n  @media (max-width: 992px) {\n    font-size: 32px;\n  }\n"])));

exports.FormTitle = FormTitle;

var SignupWithEmail = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 80%;\n  p {\n    color: ", ";\n    padding: 0 10px;\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.SignupWithEmail = SignupWithEmail;

var Line = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  flex: 1;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Line = Line;

var InputGroup = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  padding: 10px 0;\n  label {\n    font-weight: 500;\n    font-size: 18px;\n  }\n"])));

exports.InputGroup = InputGroup;

var TogglePassword = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 26px;\n  transform: translate(-150%, 10%);\n  max-height: 100%;\n  ", "\n  svg{\n    cursor: pointer;\n  }\n \n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    transform: translate(150%, 10%);\n  "])));
});

exports.TogglePassword = TogglePassword;

var WrapperPassword = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));

exports.WrapperPassword = WrapperPassword;

var WrapTermsAndAgree = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  color: ", ";\n  font-size: 18px;\n  span {\n    cursor: pointer;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n\n  @media (max-width: 576px) {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.WrapTermsAndAgree = WrapTermsAndAgree;