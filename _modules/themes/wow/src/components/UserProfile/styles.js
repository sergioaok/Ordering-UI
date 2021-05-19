"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownCircleImage = exports.EditProfileButton = exports.EidtProfile = exports.GoBackContainer = exports.GuestProfileContainer = exports.ProfileContent = exports.SavedPlaces = exports.ProfileItem = exports.MyProfileInnerContainer = exports.MyProfileInfo = exports.AccordionContent = exports.UserHeaderInfo = exports.Header = exports.ProfileSidebarInnerContainer = exports.ProfileSidebar = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Image = require("../../../../../components/Image");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 25px auto;\n\n  @media (min-width: 992px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"])));

exports.Container = Container;

var ProfileSidebar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  @media (min-width: 992px) {\n    width: 300px;\n  }\n"])));

exports.ProfileSidebar = ProfileSidebar;

var ProfileSidebarInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  @media (min-width: 992px) {\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n    border-radius: 15px;\n  }\n"])));

exports.ProfileSidebarInnerContainer = ProfileSidebarInnerContainer;

var Header = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 15px;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n\n  > p {\n    display: flex;\n  }\n\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    margin: 0px;\n    padding: 0px 15px;\n  }\n\n  @media (min-width: 992px) {\n    box-shadow: none;\n    border-radius: unset;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Header = Header;

var UserHeaderInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  span {\n    margin: 0 15px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});

exports.UserHeaderInfo = UserHeaderInfo;

var AccordionContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: min-height 0.6s ease;\n"])));

exports.AccordionContent = AccordionContent;

var MyProfileInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  h2 {\n    font-size: 18px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n    border-radius: 16px;\n\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.MyProfileInfo = MyProfileInfo;

var MyProfileInnerContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  @media (min-width: 992px) {\n    width: 80%;\n    margin: 0px auto;\n    padding: 30px 0;\n  }\n"])));

exports.MyProfileInnerContainer = MyProfileInnerContainer;

var ProfileItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #CCC;\n  padding: 15px;\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n\n  p {\n    margin: 0 15px;\n    display: flex;\n    flex-direction: column;\n\n    span:first-child {\n      color: ", ";\n      font-size: 14px;\n    }\n    span:last-child {\n      color: ", ";\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
});

exports.ProfileItem = ProfileItem;

var SavedPlaces = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  > p {\n    color: ", ";\n    font-weight: 500;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.SavedPlaces = SavedPlaces;

var ProfileContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  @media (min-width: 992px) {\n    width: calc(100% - 320px);\n  }\n"])));

exports.ProfileContent = ProfileContent;

var GuestProfileContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 91%;\n  margin: 20px auto;\n\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    text-align: center;\n  }\n\n  img {\n    max-width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 80%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.GuestProfileContainer = GuestProfileContainer;

var GoBackContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  margin-bottom: 20px;\n  svg {\n    font-size: 30px;\n  }\n  span {\n    margin: 0 10px;\n    font-size: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.GoBackContainer = GoBackContainer;

var EidtProfile = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));

exports.EidtProfile = EidtProfile;

var EditProfileButton = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  \n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.EditProfileButton = EditProfileButton;
var DropDownCircleImage = (0, _styledComponents.default)(_Image.Image)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n  border-radius: 1000px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  object-fit: cover;\n  ", "\n\n  :last-child {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    width: 90px;\n    height: 90px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-right: 0;\n    "])));
});
exports.DropDownCircleImage = DropDownCircleImage;