"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = exports.SkeletonForm = exports.ActionsForm = exports.FormInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormInput = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 30px;\n  column-gap: 40px;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  > div {\n    width: calc(50% - 20px);\n  }\n  input.form {\n    border-radius: 10px;\n    padding: 10px 15px;\n    width: 100%;\n    box-sizing: border-box;\n    &:disabled {\n      background-color: rgba(239, 239, 239, 0.3);\n      cursor: not-allowed;\n    }\n  }\n  button {\n    width: 100%;\n    padding: 7px 0;\n  }\n\n  @media (max-width: 576px) {\n    > div {\n      width: 100%;\n    }\n  }\n  ", "\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    > div {\n      width: 100%;\n    }\n  "])));
});

exports.FormInput = FormInput;

var ActionsForm = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  ", "\n\n  button {\n    flex: 1;\n    margin-top: 10px;\n    padding: 7px 0px;\n    width: 49%;\n    box-sizing: border-box;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n    ", "\n  }\n"])), function (_ref2) {
  var isCheckout = _ref2.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n  "])));
}, function (_ref3) {
  var isCheckout = _ref3.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});

exports.ActionsForm = ActionsForm;

var SkeletonForm = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100% !important;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 100%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      width: calc(50% - 10px);\n      margin: 5px;\n    }\n  }\n"])));

exports.SkeletonForm = SkeletonForm;

var InputGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  label {\n    font-weight: 500;\n    font-size: 18px;\n  }\n"])));

exports.InputGroup = InputGroup;