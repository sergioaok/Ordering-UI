"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptWrapper = exports.ViewOrderButton = exports.WrapperBusinessTitle = exports.BusinessInformation = exports.ProductsContainer = exports.BusinessHeader = exports.WrappButton = exports.Reorder = exports.OrderPastContent = exports.SingleCard = exports.OrdersContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrdersContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n"])));

exports.OrdersContainer = OrdersContainer;

var SingleCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  border: none;\n  padding: 20px 0;\n  border-top: 1px solid #ccc;\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"])));

exports.SingleCard = SingleCard;

var OrderPastContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  column-gap: 20px;\n  padding-right: 5px;\n  min-width: 220px;\n\n  ", "\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0px;\n  "])));
});

exports.OrderPastContent = OrderPastContent;

var Reorder = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  align-items: center;\n  font-size: 0.8em;\n  margin-right: 25px;\n\n  ", "\n\n  p {\n    color: ", ";\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    max-width: 200px;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n  }\n\n  @media (min-width: 768px){\n    ", "\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n\n    button {\n      max-width: initial;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 25px;\n      margin-right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.darkGreen;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});

exports.Reorder = Reorder;

var WrappButton = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])));

exports.WrappButton = WrappButton;

var BusinessHeaderStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 30%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    color: #FFF;\n    opacity: 0.8;\n    font-size: 24px;\n  }\n\n  @media (min-width: 481px) {\n    height: 125px;\n  }\n\n  @media (min-width: 1024px) {\n    height: 150px;\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"])));

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

var ProductsContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  span,\n  h3 {\n    font-size: 14px;\n  }\n\n  div {\n    background: transparent;\n    border-bottom: none;\n  }\n"])));

exports.ProductsContainer = ProductsContainer;

var BusinessInformation = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 450px;\n  \n  p {\n    margin: 0px;\n    font-size: 14px;\n  }\n"])));

exports.BusinessInformation = BusinessInformation;

var WrapperBusinessTitle = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 95%;\n  h2 {\n    font-size: 18px;\n    margin: 0px;\n  }\n"])));

exports.WrapperBusinessTitle = WrapperBusinessTitle;

var ViewOrderButton = _styledComponents.default.a(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n"])), function (props) {
  return props.theme.colors.darkGreen;
});

exports.ViewOrderButton = ViewOrderButton;

var ReceiptWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 20px;\n\n  a {\n    cursor: pointer;\n    font-weight: 600;\n    text-decoration: underline;\n  }\n"])));

exports.ReceiptWrapper = ReceiptWrapper;