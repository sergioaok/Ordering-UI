"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRatingLower = exports.StarRatingUpper = exports.StarRating = exports.ReviewContainer = exports.LoadMoreButtonWrap = exports.ActionContent = exports.BusinessInformation = exports.OrderContent = exports.Logo = exports.CardBottom = exports.CardContent = exports.Card = exports.OrderContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));

exports.OrderContainer = OrderContainer;

var Card = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  padding: 15px;\n \n  width: 100%;\n  margin: 15px 0px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    margin: 15px 10px;\n    width: calc(100% - 20px);\n  }\n\n  @media (min-width: 1024px) {\n    width: calc(50% - 20px);\n  }\n"])));

exports.Card = Card;

var CardContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n"])));

exports.CardContent = CardContent;

var CardBottom = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-top: 1px solid #CCC;\n  padding-top: 10px;\n\n  ", "\n"])), function (_ref) {
  var reviewState = _ref.reviewState;
  return reviewState && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "])));
});

exports.CardBottom = CardBottom;

var Logo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n\n  @media (min-width: 480px){\n    width: 75px;\n    height: 75px;\n  }\n"])));

exports.Logo = Logo;

var OrderContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  max-width: calc(100% - 120px);\n"])));

exports.OrderContent = OrderContent;

var BusinessInformation = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 85px);\n  ", "\n\n  h2 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-left: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});

exports.BusinessInformation = BusinessInformation;

var ActionContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  color: ", ";\n\n  p {\n    margin: 0px;\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  span {\n    cursor: pointer;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ActionContent = ActionContent;

var LoadMoreButtonWrap = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin: 20px auto;\n\n  @media (min-width: 768px) {\n    width: 80%;\n  }\n\n  button {\n    width: 100%;\n    padding: 7px 0;\n  }\n"])));

exports.LoadMoreButtonWrap = LoadMoreButtonWrap;

var ReviewContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    margin: 0px;\n    font-weight: 400;\n    font-size: 14px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});

exports.ReviewContainer = ReviewContainer;

var StarRating = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  unicode-bidi: bidi-override;\n  color: #B3B3B3;\n  font-size: 25px;\n  height: 25px;\n  margin: 0 auto;\n  position: relative;\n  padding: 0;\n\n  span {\n    margin-right: 5px;\n  }\n"])));

exports.StarRating = StarRating;

var StarRatingUpper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  color: #FFD605;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"])));

exports.StarRatingUpper = StarRatingUpper;

var StarRatingLower = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 0;\n  display: flex;\n  z-index: 0;\n"])));

exports.StarRatingLower = StarRatingLower;