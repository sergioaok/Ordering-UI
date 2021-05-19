"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapAddressInput = exports.AddressWrap = exports.FormControl = exports.FormActionButton = exports.WrapAddressForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapAddressForm = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0 20px;\n\n  @media (max-width: 576px) {\n    padding: 0px;\n  }\n"])));

exports.WrapAddressForm = WrapAddressForm;

var FormActionButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 13px;\n  right: 3px;\n  width: 44px;\n  height: 44px;\n  border-radius: 100%;\n  outline: none;\n  background-color: ", ";\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    color: ", " !important;\n    font-size: 32px !important;\n    position: relative !important;\n    top: 0px !important;\n    left: 0px !important;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.FormActionButton = FormActionButton;

var FormControl = _styledComponents.default.form(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    margin: 10px 0px;\n    height: 43px;\n    width: 100%;\n    &.internal_number,\n    &.zipcode {\n      width: 100%;\n    }\n    &::placeholder{\n      color: #CBCBCB\n    }\n\n    @media (min-width: 621px) {\n      &.internal_number,\n      &.zipcode  {\n        width: 48%;\n      }\n    }\n  }\n\n  textarea {\n    width: 100%;\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    border: 1px solid #BBB;\n    border-radius: 30px;\n    font-size: 16px;\n    padding: 7px 15px;\n    outline: none;\n    ::placeholder {\n      color: #DBDCDB;\n    }\n\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #DBDCDB;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  @media (min-width: 481px) {\n    padding: 10px;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.FormControl = FormControl;

var AddressWrap = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n"])));

exports.AddressWrap = AddressWrap;

var WrapAddressInput = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: #9A9A9A;\n    top: 19px;\n    left: 10px;\n    font-size: 32px;\n    ", "\n  }\n\n  input {\n    height: 50px;\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 15px 7px 45px !important;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (props) {
  return props.theme.colors.greyTextColor;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding: 7px 45px 7px 15px !important;\n    "])));
});

exports.WrapAddressInput = WrapAddressInput;

var WrapperSkeleton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  span {\n    width: 100%;\n\n    > span {\n      border-radius: 50px;\n    }\n  }\n"])));

exports.WrapperSkeleton = WrapperSkeleton;