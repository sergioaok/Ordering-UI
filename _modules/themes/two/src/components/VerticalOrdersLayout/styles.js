"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapProducts = exports.WrappButton = exports.Reorder = exports.WrapperBusinessTitle = exports.OrderPastContent = exports.SingleCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SingleCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  height: auto;\n  border: none;\n  padding: 15px 10px 10px 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n\n  ", "\n\n  @media(min-width: 480px){\n    ", "\n    border-top: 1px solid #ccc;\n  }\n\n  button {\n    font-weight: 500;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"])), function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.secondary;
  });
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-top: none !important;\n    "])));
});

exports.SingleCard = SingleCard;

var OrderPastContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding-right: 5px;\n  min-width: 220px;\n\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0px;\n  "])));
});

exports.OrderPastContent = OrderPastContent;

var WrapperBusinessTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 95%\n"])));

exports.WrapperBusinessTitle = WrapperBusinessTitle;

var Reorder = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  align-items: center;\n  font-size: 0.8em;\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n\n  @media (min-width: 768px){\n    ", "\n    button{\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 1024px){\n    button{\n      width: 50%;\n    }\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: row;\n    width: 100%;\n    column-gap: 20px;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});

exports.Reorder = Reorder;

var WrappButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])));

exports.WrappButton = WrappButton;

var WrapProducts = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 800px;\n"])));

exports.WrapProducts = WrapProducts;