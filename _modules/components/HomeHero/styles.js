"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSpan = exports.WrapInput = exports.Slogan = exports.Title = exports.ContentWrapper = exports.HeroContainer = exports.HeroContainerStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 97px);\n\n  button{\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  ", "\n\n  @media (min-width: 821px) {\n    height: calc(100vh - 65px);\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.HeroContainerStyled = HeroContainerStyled;

var HeroContainer = function HeroContainer(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.HeroContainer = HeroContainer;

var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    padding: 0px 20px 0px;\n\n    ", "\n\n    button {\n      width: 180px;\n    }\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 425px) {\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      padding: 0px 40px 0px;\n\n      ", "\n    }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0px 20px 0px;\n    "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding: 0px 40px 0px;\n      "])));
});

exports.ContentWrapper = ContentWrapper;

var Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font: normal normal normal 80px ", ";\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  font-size: 35px;\n\n  ", "\n"])), function (props) {
  var _props$theme$fonts$sp;

  return ((_props$theme$fonts$sp = props.theme.fonts.special) === null || _props$theme$fonts$sp === void 0 ? void 0 : _props$theme$fonts$sp.name) || 'Georgia';
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Title = Title;

var Slogan = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 18px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-bottom: 15px;\n\n  ", "\n\n  @media (min-width: 480px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Slogan = Slogan;

var WrapInput = _styledComponents.default.label(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n\n  ", "\n  \n  div{\n    color: #FFF;\n    position: relative;\n    bottom: 25px;\n    left: 15px;\n    ", "\n  }\n\n  svg {\n    color: #FFF;\n    position: absolute;\n    font-size: 22px;\n\n    margin-right: 10px;\n      ", "\n\n    ", "\n\n  }\n"])), function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: calc(100% - 20px);\n    box-sizing: border-box;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n\n    @media (min-width: 1024px) {\n      width: calc(50% - 20px);\n    }\n  "])), function (props) {
    var _props$theme5;

    return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      left: initial;\n      right: 15px;\n    "])));
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      right: 0px;\n    "])));
});

exports.WrapInput = WrapInput;

var InputSpan = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  border-radius: 30px;\n  font-size: 16px;\n  padding: 7px 50%;\n  outline: none;\n  color: #FFF;\n  border-color: #FFF;\n  cursor: pointer;\n  background: rgba(0,0,0,0.1);\n"])));

exports.InputSpan = InputSpan;