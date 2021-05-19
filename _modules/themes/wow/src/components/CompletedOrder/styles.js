"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRatingLower = exports.StarRatingUpper = exports.StarRating = exports.ReviewContainer = exports.ActionContainer = exports.OrderPaymentMethod = exports.CustomerInfo = exports.OrderDeliveryTimeContainer = exports.OrderContent = exports.Header = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #D0EFEA;\n  border-radius: 15px;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n    text-align: center;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: space-around;\n\n    h1 {\n      max-width: 250px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary;
});

exports.Header = Header;

var OrderContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px 50px;\n"])));

exports.OrderContent = OrderContent;

var OrderDeliveryTimeContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #CCC;\n  padding: 10px 0;\n\n  p {\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});

exports.OrderDeliveryTimeContainer = OrderDeliveryTimeContainer;

var CustomerInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  border-bottom: 1px solid #CCC;\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
});

exports.CustomerInfo = CustomerInfo;

var OrderPaymentMethod = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  > div {\n    border-radius: 10px;\n    padding: 10px 15px;\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n\n    span {\n      color: ", ";\n      margin: 0 10px;\n    }\n\n    svg {\n      font-size: 24px;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.grayColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderPaymentMethod = OrderPaymentMethod;

var ActionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  button {\n    margin-bottom: 20px;\n    padding: 5px 0;\n  }\n"])));

exports.ActionContainer = ActionContainer;

var ReviewContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #CCC;\n  cursor: pointer;\n\n  p {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ReviewContainer = ReviewContainer;

var StarRating = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  unicode-bidi: bidi-override;\n  color: #B3B3B3;\n  font-size: 25px;\n  height: 25px;\n  position: relative;\n  padding: 0;\n  margin-top: -10px;\n\n  span {\n    margin-right: 5px;\n  }\n"])));

exports.StarRating = StarRating;

var StarRatingUpper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: #FFD605;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"])));

exports.StarRatingUpper = StarRatingUpper;

var StarRatingLower = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 0;\n  display: flex;\n  z-index: 0;\n"])));

exports.StarRatingLower = StarRatingLower;