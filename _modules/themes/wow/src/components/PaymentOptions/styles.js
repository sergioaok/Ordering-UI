"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardItemContent = exports.PayCardSelected = exports.PayCard = exports.PaymentMethodsList = exports.PaymentMethodsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaymentMethodsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"])));

exports.PaymentMethodsContainer = PaymentMethodsContainer;

var PaymentMethodsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n\n  @media (min-width: 841px) {\n    justify-content: space-around;\n  }\n"])));

exports.PaymentMethodsList = PaymentMethodsList;

var PayCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(50% - 12px);\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  text-align: center;\n\n  ", "\n\n  ", "\n\n  svg path {\n    fill: #000;\n  }\n\n  @media (min-width: 351px) {\n    width: calc(33% - 12px);\n  }\n\n  @media (min-width: 513px) {\n    width: calc(25% - 12px);\n  }\n\n  svg {\n    font-size: 30px;\n  }\n\n  p {\n    margin: 0px;\n    font-size: 12px;\n  }\n\n  &.active {\n    border: 1px solid ", ";\n  }\n\n  &:not(.active) {\n    border: ", ";\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
}, function (props) {
  return props.isDisabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? '0' : '1px solid #EAEAEA';
});

exports.PayCard = PayCard;

var PayCardSelected = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));

exports.PayCardSelected = PayCardSelected;

var CardItemContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});

exports.CardItemContent = CardItemContent;