"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperReview = exports.MetaContent = exports.BusinessInfoRow = exports.BusinessName = exports.BusinessContent = exports.BusinessTags = exports.BusinessHeader = exports.BusinessHero = exports.ContainerCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n  cursor: ", ";\n\n  @media (min-width: 668px) {\n    width: calc(50% - 20px);\n  }\n  @media (min-width: 993px) {\n    width: calc(33% - 20px);\n    ", "\n\n  @media (min-width: 1200px) {\n    ", "\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
}, function (_ref2) {
  var isCustomMode = _ref2.isCustomMode;
  return isCustomMode && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: calc(50% - 20px);\n    "])));
}, function (_ref3) {
  var isCustomMode = _ref3.isCustomMode;
  return isCustomMode && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      width: calc(33% - 20px);\n    "])));
});

exports.ContainerCard = ContainerCard;

var BusinessHero = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));

exports.BusinessHero = BusinessHero;

var BusinessHeaderStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  min-height: 120px;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n  }\n\n  @media (min-width: 481px) {\n    min-height: 200px;\n  }\n"])));

var BusinessHeader = function BusinessHeader(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessHeaderStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessHeader = BusinessHeader;

var BusinessTags = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 10px;\n  width: calc(100% - 35px);\n\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    background-color: #6C6C6C;\n    font-size: 12px;\n    color: #FFF;\n    padding: 8px;\n    border-radius: 10px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n\n  @media (min-width: 475px) {\n    margin: 15px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});

exports.BusinessTags = BusinessTags;

var BusinessContent = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));

exports.BusinessContent = BusinessContent;

var BusinessName = _styledComponents.default.h6(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n\n  @media (max-width: 576px) {\n    font-size: 18px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkTextColor;
});

exports.BusinessName = BusinessName;

var BusinessInfoRow = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 20px;\n\n  div {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    font-size: 18px;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  svg {\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    span {\n      font-size: 12px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.BusinessInfoRow = BusinessInfoRow;

var MetaContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));

exports.MetaContent = MetaContent;

var WrapperReview = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  background-color: ", ";\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGreen;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.darkGreen;
});

exports.WrapperReview = WrapperReview;