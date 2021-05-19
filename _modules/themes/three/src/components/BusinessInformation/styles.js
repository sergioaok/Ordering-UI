"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryInfo = exports.BusinessAddressContainer = exports.ImageContainer = exports.Description = exports.ModalIcon = exports.BusinessMediaContent = exports.ScheduleBlock = exports.ScheduleContainer = exports.ScheduleSection = exports.Map = exports.SectionTitle = exports.BusinessInnerContent = exports.BusinessContent = exports.Information = exports.HeaderImage = exports.BussinessTitle = exports.BusinessInformationContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n"])));

exports.BusinessInformationContainer = BusinessInformationContainer;

var BussinessTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: inline-flex;\n  width: 50%;\n  background: #ffffff;\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  padding: 10px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
});

exports.BussinessTitle = BussinessTitle;

var HeaderImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 20%;\n  margin-top: auto;\n  > img {\n    width: 100%;\n    height: 100%;\n  }\n"])));

exports.HeaderImage = HeaderImage;

var Information = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  > h5 {\n    margin-block-end: 0.8em;\n    margin-block-start: 0.8em;\n  }\n  > p {\n    margin-block-end: 0;\n    margin-block-start: 0.3em;\n    > svg {\n      vertical-align: middle;\n    }\n  }\n"])));

exports.Information = Information;

var BusinessContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: #FFF;\n"])));

exports.BusinessContent = BusinessContent;

var BusinessInnerContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));

exports.BusinessInnerContent = BusinessInnerContent;

var SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n"])));

exports.SectionTitle = SectionTitle;

var Map = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40vh;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));

exports.Map = Map;

var ScheduleSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  margin-top: 10px;\n  svg {\n    margin-top: 5px;\n  }\n"])));

exports.ScheduleSection = ScheduleSection;

var ScheduleContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n\n"])));

exports.ScheduleContainer = ScheduleContainer;

var ScheduleBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h4 {\n    margin: 0px 0px 3px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkTextColor;
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkGray;
});

exports.ScheduleBlock = ScheduleBlock;

var BusinessMediaContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(100% - 12px);\n      cursor: pointer;\n\n      @media (min-width: 481px) {\n        width: calc(50% - 20px);\n      }\n\n      @media (min-width: 681px) {\n        width: calc(33% - 20px);\n      }\n\n      @media (min-width: 993px) {\n        width: calc(25% - 20px);\n      }\n    }\n  }\n"])));

exports.BusinessMediaContent = BusinessMediaContent;

var ModalIcon = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  left: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.3);\n  ", "\n  @media (min-width: 578px){\n    left: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    left: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    right: 5px;\n    left: initial;\n  "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    right: 10px;\n    left: initial;\n  "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    right: 5px;\n    left: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var Description = _styledComponents.default.p(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n"])));

exports.Description = Description;

var ImageContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));

exports.ImageContainer = ImageContainer;

var BusinessAddressContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"])));

exports.BusinessAddressContainer = BusinessAddressContainer;

var DeliveryInfo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: 10px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n\n  div {\n    width: 100%;\n    &:last-child {\n      h5:not(:last-child) {\n        margin-top: 0px;\n      }\n    }\n  }\n\n  @media (min-width: 769px) {\n    flex-wrap: nowrap;\n    div {\n      width: 50%;\n      &:last-child {\n        h5:not(:last-child) {\n          margin-top: 22.1776px;\n        }\n      }\n    }\n  }\n"])));

exports.DeliveryInfo = DeliveryInfo;