"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.Description = exports.ModalIcon = exports.BusinessMediaContent = exports.DeliveryInfo = exports.ScheduleBlock = exports.ScheduleContainer = exports.ScheduleSection = exports.Map = exports.SectionTitle = exports.FlexTabs = exports.BusinessContent = exports.Information = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.BusinessBasicContent = exports.HeaderImage = exports.BussinessTitle = exports.BusinessHeader = exports.BusinessInformationContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n"])));

exports.BusinessInformationContainer = BusinessInformationContainer;

var BusinessHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 20%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: left;\n  align-items: flex-end;\n  position: relative;\n  background-color: #FFF;\n\n  img{\n    object-fit: cover;\n    position: absolute;\n    width: 100%;\n    height: calc(100% + 50px);\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.BusinessHeader = BusinessHeader;

var BussinessTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: inline-flex;\n  width: 50%;\n  background: #ffffff;\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  padding: 10px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
});

exports.BussinessTitle = BussinessTitle;

var HeaderImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 20%;\n  margin-top: auto;\n  > img {\n    width: 100%;\n    height: 100%;\n  }\n"])));

exports.HeaderImage = HeaderImage;

var BusinessBasicContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 20px;\n  max-height: 75px;\n  width: 340px;\n  z-index: 1;\n"])));

exports.BusinessBasicContent = BusinessBasicContent;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n"])));

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% - 75px);\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessInfoItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 5px 0px 16px;\n  ", "\n  div {\n    font-size: 14px;\n    display: flex;\n    justify-content: space-between;\n\n    h5,\n    p {\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      text-transform: capitalize;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-weight: 300;\n      svg {\n        margin-right: 4px;\n        margin-bottom: 1px;\n        ", "\n        &.start {\n          color: #FFC917;\n        }\n        &.popup {\n          color: ", ";\n          cursor: pointer;\n          transform: rotate(180deg);\n        }\n      }\n    }\n    p.bold {\n      font-weight: 600;\n    }\n    @media (min-width: 481px) {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: 0px 16px 0px 5px;\n  "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessInfoItem = BusinessInfoItem;

var Information = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  > h5 {\n    margin-block-end: 0.8em;\n    margin-block-start: 0.8em;\n  }\n  > p {\n    margin-block-end: 0;\n    margin-block-start: 0.3em;\n    > svg {\n      vertical-align: middle;\n    }\n  }\n"])));

exports.Information = Information;

var BusinessContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding: 0 10px;\n  background: #FFF;\n  @media(min-width: 768px){\n    padding: 0 20px;\n  }\n"])));

exports.BusinessContent = BusinessContent;

var FlexTabs = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  height: 10%;\n  padding-top: 30px;\n"])));

exports.FlexTabs = FlexTabs;

var SectionTitle = _styledComponents.default.h3(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-weight: bold;\n"])));

exports.SectionTitle = SectionTitle;

var Map = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));

exports.Map = Map;

var ScheduleSection = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 25px;\n"])));

exports.ScheduleSection = ScheduleSection;

var ScheduleContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  > div {\n    width: 100%;\n  }\n\n"])));

exports.ScheduleContainer = ScheduleContainer;

var ScheduleBlock = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 0px 15px;\n  border-right: 1px solid #CCC;\n  width: 10%;\n  min-width: 80px;\n  ", "\n  h4 {\n    margin: 0px 0px 3px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #D81212;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n  }\n\n  &:last-child {\n    border: 0;\n  }\n  @media(min-width: 768px){\n    min-width: initial;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border-left: 1px solid #CCC;\n    border-right: none;\n  "])));
});

exports.ScheduleBlock = ScheduleBlock;

var DeliveryInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: 10px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n\n  div {\n    width: 100%;\n    &:last-child {\n      h5:not(:last-child) {\n        margin-top: 0px;\n      }\n    }\n  }\n\n  @media (min-width: 769px) {\n    flex-wrap: nowrap;\n    div {\n      width: 50%;\n      &:last-child {\n        h5:not(:last-child) {\n          margin-top: 22.1776px;\n        }\n      }\n    }\n  }\n"])));

exports.DeliveryInfo = DeliveryInfo;

var BusinessMediaContent = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(100% - 12px);\n      cursor: pointer;\n\n      @media (min-width: 481px) {\n        width: calc(50% - 20px);\n      }\n\n      @media (min-width: 681px) {\n        width: calc(33% - 20px);\n      }\n\n      @media (min-width: 993px) {\n        width: calc(25% - 20px);\n      }\n    }\n  }\n"])));

exports.BusinessMediaContent = BusinessMediaContent;

var ModalIcon = _styledComponents.default.span(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.3);\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var Description = _styledComponents.default.p(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n"])));

exports.Description = Description;

var ImageContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));

exports.ImageContainer = ImageContainer;