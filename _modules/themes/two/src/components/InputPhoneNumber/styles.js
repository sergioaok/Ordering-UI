"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMsg = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  label {\n    color: ", ";\n    font-weight: 500;\n    font-size: 18px;\n    text-align: left;\n  }\n\n  text-align: center;\n\n  select:focus {\n    outline: none;\n  }\n\n  .PhoneInput {\n    display: flex;\n    align-items: center;\n  }\n\n  .PhoneInputInput {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .PhoneInputCountryIcon {\n    width: calc(1em * 1.5);\n    height: 1em;\n  }\n\n  .PhoneInputCountryIcon--square {\n    width: 1em;\n  }\n\n  .PhoneInputCountryIcon--border {\n    background-color: rgba(0,0,0,0.1);\n    box-shadow: 0 0 0 1px  rgba(0,0,0,0.5),\n    inset 0 0 0 1px  rgba(0,0,0,0.5);\n  }\n\n  .PhoneInputCountryIconImg {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .PhoneInputInternationalIconPhone {\n    opacity: 0.8;\n  }\n\n  .PhoneInputInternationalIconGlobe {\n    opacity: 0.65;\n  }\n\n  .PhoneInputCountry {\n    position: relative;\n    align-self: stretch;\n    display: flex;\n    align-items: center;\n    margin-right: 0.35em;\n  }\n\n  .PhoneInputCountrySelect {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    border: 0;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .PhoneInputCountrySelect[disabled] {\n    cursor: default;\n  }\n\n  .PhoneInputCountrySelectArrow {\n    display: block;\n    content: '';\n    width: 0.3em;\n    height: 0.3em;\n    margin-left: 0.35em;\n    border-style: solid;\n    border-color: inherit;\n    border-top-width: 0;\n    border-bottom-width: 1px;\n    border-left-width: 0;\n    border-right-width: 1px;\n    transform: rotate(45deg);\n    opacity: 0.45;\n  }\n\n  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {\n    opacity: 1;\n    color: #03b2cb;\n  }\n\n  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {\n    box-shadow: 0 0 0 1px #03b2cb, inset 0 0 0 1px #03b2cb;\n  }\n\n  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {\n    opacity: 1;\n    color: #03b2cb;\n  }\n\n  .PhoneInputCountryIcon {\n    font-size: 20px;\n    background: transparent;\n    border: 0;\n    box-shadow: 0 0 black;\n    height: 30px;\n    width: 30px;\n    outline: none;\n\n    &.PhoneInputCountryIcon--border img {\n      border-radius: 10px;\n      outline: none;\n    }\n  }\n\n  ", "\n\n  input.PhoneInputInput {\n    border-radius: 10px;\n    border: 1px solid #DBDCDB;\n    font-size: 16px;\n    outline: none;\n    padding: 10px 15px;\n\n    &::placeholder {\n      color: #DBDCDB;\n      opacity: 1;\n    }\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n    &::-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .PhoneInputCountrySelectArrow{\n        margin-right: 0.35em;\n    }\n  "])));
}, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      cursor: not-allowed;\n    "])));
});

exports.Container = Container;

var ErrorMsg = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  color: ", ";\n  font-weight: 400;\n  font-size: 16px;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ErrorMsg = ErrorMsg;