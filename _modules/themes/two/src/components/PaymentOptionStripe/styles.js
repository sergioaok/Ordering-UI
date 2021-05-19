"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layer = exports.AddActionButton = exports.DefaultCardItem = exports.BlockLoading = exports.ActionsModal = exports.CardItemActionsContent = exports.CardItemActions = exports.CardItemContent = exports.CardItem = exports.WrapperItems = exports.WarningMessage = exports.OptionStripeContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

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

var WrapperItems = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  ", "\n\n  ", "\n\n  button.addcard {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    @media (min-width: 381px) {\n      width: 60%;\n    }\n  }\n\n  > p {\n    width: 100%;\n    padding: 0 10px;\n    margin: 0px;\n    font-weight: 500;\n    font-size: 18px;\n  }\n"])), function (_ref) {
  var borderBottom = _ref.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-bottom: 7px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightGrayColor;
  });
}, function (_ref2) {
  var bottomSection = _ref2.bottomSection;
  return bottomSection && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding-top: 20px;\n  "])));
});

exports.WrapperItems = WrapperItems;

var CardItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #EAEAEA;\n"])));

exports.CardItem = CardItem;

var CardItemContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n\n  > span {\n    font-weight: 500;\n  }\n\n  .checks svg {\n    color: #D81212;\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  .brandName {\n    text-transform: capitalize;\n  }\n\n  > * {\n    margin-right: 10px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});

exports.CardItemContent = CardItemContent;

var CardItemActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  column-gap: 15px;\n  > svg {\n    cursor: pointer;\n    font-size: 24px;\n    cursor: pointer;\n  }\n"])));

exports.CardItemActions = CardItemActions;

var CardItemActionsContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  box-shadow: 0px 3px 6px #00000029;\n  background: #fff;\n  border-radius: 10px;\n  padding: 0 10px;\n  right: 0px;\n  top: 35px;\n  display: flex;\n  flex-direction: column;\n  z-index: 10;\n\n  > span {\n    cursor: pointer;\n    white-space: nowrap;\n    padding: 10px 0;\n    font-weight: 500;\n    &:first-child {\n      border-bottom: 1px solid ", ";\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    right: initial;\n    left: 0px;\n  "])));
});

exports.CardItemActionsContent = CardItemActionsContent;

var ActionsModal = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    width: 48%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"])));

exports.ActionsModal = ActionsModal;

var BlockLoading = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n"])));

exports.BlockLoading = BlockLoading;

var DefaultCardItem = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  font-weight: 500;\n"])));

exports.DefaultCardItem = DefaultCardItem;

var AddActionButton = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  border-bottom: 1px solid #EAEAEA;\n  padding: 10px;\n  margin-top: 10px;\n\n  svg {\n    font-size: 26px;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n    font-weight: 500;\n  }\n"])));

exports.AddActionButton = AddActionButton;

var Layer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  ", "\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    right: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    left: 0;\n  "])));
});

exports.Layer = Layer;