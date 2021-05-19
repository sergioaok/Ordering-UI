"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBottomContainer = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessContent = exports.BusinessContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 260px;\n  height: 260px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n\n  ", "\n\n  ", "\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #F8F8F8;\n  "])));
}, function (props) {
  return props.bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
});

exports.BusinessContainer = BusinessContainer;

var BusinessContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  max-height: 75px;\n  margin-left: 4.5%;\n  margin-right: 4.5%;\n  margin-bottom: 20px;\n"])));

exports.BusinessContent = BusinessContent;

var BusinessInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessInfoItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  div {\n    font-size: 14px;\n    display: flex;\n    justify-content: space-between;\n\n    h5 {\n      font-weight: 300;\n      svg{\n        margin-bottom: 1px;\n      }\n    }\n\n    h5,\n    p {\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      text-transform: capitalize;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n\n      svg {\n        margin-right: 4px;\n\n        ", "\n\n        &.start {\n          color: #FFC917;\n        }\n\n        &.popup {\n          color: ", ";\n          cursor: pointer;\n          transform: rotate(180deg);\n        }\n      }\n\n      &.bold {\n        font-weight: 600;\n        font-size: 32px;\n      }\n\n      &.type {\n        font-weight: 300;\n      }\n    }\n\n    @media (min-width: 481px) {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessInfoItem = BusinessInfoItem;

var BusinessBottomContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  padding: 20px 0;\n\n  > div {\n    display: flex;\n    align-items: center;\n    column-gap: 20px;\n\n    p {\n      margin: 0px;\n    }\n\n    a {\n      font-weight: 600;\n      text-decoration: underline;\n      cursor: pointer;\n    }\n  }\n  @media (max-width: 576px) {\n    > div {\n      flex-direction: column;\n    }\n  }\n"])));

exports.BusinessBottomContainer = BusinessBottomContainer;