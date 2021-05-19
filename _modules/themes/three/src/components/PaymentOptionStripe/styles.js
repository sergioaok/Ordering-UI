"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockLoading = exports.ActionsModal = exports.CardItemActions = exports.CardItemContent = exports.CardItem = exports.WrapperItems = exports.WarningMessage = exports.OptionStripeContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionStripeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.OptionStripeContainer = OptionStripeContainer;

var WarningMessage = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #D81212;\n  font-size: 24px;\n  padding-left: 10px;\n  font-weight: bold;\n  opacity: 0.8;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
});

exports.WarningMessage = WarningMessage;

var WrapperItems = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  button.addcard {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    @media (min-width: 381px) {\n      width: 60%;\n    }\n  }\n"])));

exports.WrapperItems = WrapperItems;

var CardItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #EAEAEA;\n"])));

exports.CardItem = CardItem;

var CardItemContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  width: 90%;\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});

exports.CardItemContent = CardItemContent;

var CardItemActions = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 10%;\n  svg {\n    color: ", ";\n    font-size: 24px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.CardItemActions = CardItemActions;

var ActionsModal = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    width: 48%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"])));

exports.ActionsModal = ActionsModal;

var BlockLoading = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n"])));

exports.BlockLoading = BlockLoading;