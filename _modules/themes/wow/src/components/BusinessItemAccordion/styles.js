"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessActions = exports.BusinessTotal = exports.BusinessInfo = exports.AccordionText = exports.AccordionContent = exports.ContentInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.Accordion = exports.AccordionSection = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid #BFBFBF;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n\n  ", "\n\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: sticky;\n    top: 20px;\n  "])));
});

exports.AccordionSection = AccordionSection;

var Accordion = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: ", ";\n  transition: background-color 0.6s ease;\n  position: relative;\n  padding: 10px;\n\n  ", "\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n"])), function (_ref2) {
  var isClosed = _ref2.isClosed;
  return isClosed ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n  "])));
});

exports.Accordion = Accordion;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  max-width: 50px;\n  max-height: 50px;\n  box-shadow: 0px 4px 7px rgba(128, 128, 128, 0.05), 0px 1px 13px rgba(128, 128, 128, 0.05), 0px 2px 3px rgba(128, 128, 128, 0.05);\n\n  @media (min-width: 481px){\n    width: 55px;\n    height: 55px;\n    max-width: 55px;\n    max-height: 55px;\n    padding-bottom: 0 !important;\n  }\n\n  @media (min-width: 769px){\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n"])));

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: contain;\n  background-position: center;\n  border-radius: 10px;\n\n  @media (min-width: 481px){\n    min-height: 55px;\n    width: 55px;\n    height: 55px;\n  }\n\n  @media (min-width: 769px){\n    width: 75px;\n    height: 75px;\n    min-height: 75px;\n  }\n"])));

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var ContentInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: 65%;\n  color: ", ";\n\n  ", "\n\n  h2, span {\n    margin: 0px;\n  }\n\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 16px;\n    opacity: 0.8;\n    display: flex;\n    align-items: center;\n    font-weight: 300;\n    color: ", ";\n\n    svg {\n    color: ", ";\n      margin-right: 3px;\n      ", "\n    }\n  }\n\n  @media (min-width: 576px) {\n    h2 {\n      font-size: 20px;\n    }\n    span {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
});

exports.ContentInfo = ContentInfo;

var AccordionContent = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: min-height 0.6s ease;\n"])));

exports.AccordionContent = AccordionContent;

var AccordionText = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"])));

exports.AccordionText = AccordionText;

var BusinessInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 60%;\n\n  h2 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessTotal = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: none;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    font-size: 18px;\n    margin: 0px 5px;\n    font-weight: 300;\n\n    &:nth-child(1) {\n      font-weight: 500;\n    }\n  }\n\n  &.closed {\n    flex: 1;\n    p {\n      text-align: center;\n      margin: 0px 20px;\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 481px) {\n    display: flex;\n  }\n"])), function (_ref3) {
  var isCartOnProductsList = _ref3.isCartOnProductsList;
  return isCartOnProductsList ? '30%' : '25%';
});

exports.BusinessTotal = BusinessTotal;

var BusinessActions = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  max-width: 30%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  span {\n    height: 22px;\n    svg {\n      font-size: 22px;\n    }\n\n    &:not(:last-child) {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  @media (min-width: 768px) {\n    span {\n      height: 27px;\n      svg {\n        font-size: 27px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});

exports.BusinessActions = BusinessActions;