"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessLocation = exports.BusinessGeneralInfo = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.BusinessInnerContent = exports.BusinessContent = exports.BusinessHeader = exports.BusinessContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.BusinessContainer = BusinessContainer;

var BusinessHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 260px;\n  height: 260px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  margin-top: -10px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: #F8F8F8;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
});

exports.BusinessHeader = BusinessHeader;

var BusinessContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: -10px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(15px);\n"])));

exports.BusinessContent = BusinessContent;

var BusinessInnerContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  display: flex;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"])));

exports.BusinessInnerContent = BusinessInnerContent;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 80px;\n  max-height: 80px;\n  height: 80px;\n  width: 80px;\n  box-shadow: 0px 3.33333px 4.44444px rgb(128 128 128 / 5%), 0px 3.33333px 3.33333px rgb(128 128 128 / 5%), 0px 1.11111px 8.88889px rgb(128 128 128 / 5%);\n  margin-top: -20px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : "\n    margin-right: 20px;\n  ";
});

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 80px;\n  border-radius: 18px;\n"])));

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

var BusinessInfo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 10px;\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessInfoItem = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n    margin: 0px;\n    display: flex;\n    align-items: center;\n  }\n\n  .name {\n    font-size: 20px;\n    font-weight: 600;\n  }\n\n  svg {\n    color: #ffc917;\n    margin: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.BusinessInfoItem = BusinessInfoItem;

var BusinessGeneralInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  min-width: 300px;\n"])));

exports.BusinessGeneralInfo = BusinessGeneralInfo;

var BusinessLocation = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  svg {\n    color: ", ";\n  }\n  span {\n    color: ", ";\n    margin: 0 10px;\n    font-size: 14px;\n  }\n\n  h5 {\n    cursor: pointer;\n    color: ", ";\n    font-weight: 600;\n    font-size: 14px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessLocation = BusinessLocation;