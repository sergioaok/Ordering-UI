"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.FormGroup = exports.FormRedirect = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormRedirect = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n  ", "\n  button {\n    width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin-top: 10px;\n\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .StripeElement,\n  .StripeElementIdeal {\n    display: block;\n    margin: 0 10px;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n  }\n\n  .StripeElement--focus,\n  .StripeElementIdeal--focus {\n    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,\n      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n    -webkit-transition: all 150ms ease;\n    transition: all 150ms ease;\n  }\n\n  .StripeElement.loading {\n    height: 41.6px;\n    opacity: 0.6;\n  }\n\n  .StripeElementIdeal {\n    padding: 0;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0px;\n  "])));
});

exports.FormRedirect = FormRedirect;

var FormGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  label {\n    margin-bottom: 5px;\n  }\n\n  select {\n    padding: 7px 5px;\n    margin-top: 8px;\n    font-size: 16px;\n    border-radius: 30px;\n    border: 1px solid #DBDCDB;\n  }\n"])));

exports.FormGroup = FormGroup;

var ErrorMessage = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #D81212;\n  margin: 10px 0 0 0;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;