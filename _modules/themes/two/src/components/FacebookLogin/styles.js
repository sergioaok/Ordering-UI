"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FacebookButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #3B5998;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 10px 15px !important;\n  border-radius: 50px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  svg {\n    font-size: 28px;\n    color: #fff;\n  }\n\n  div {\n    margin: 0 auto;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    column-gap: 20px;\n    font-size: 16px !important;\n    ", "\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  ", "\n"])), function (_ref) {
  var isCustomTitle = _ref.isCustomTitle;
  return isCustomTitle && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: ", ";\n      font-size: 18px !important;\n      font-weight: 500;\n    "])), function (props) {
    return props.theme.colors.primary;
  });
}, function () {
  return (0, _polished.darken)(0.07, '#3B5998');
}, function (_ref2) {
  var isCustomTitle = _ref2.isCustomTitle;
  return isCustomTitle && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: transparent;\n    margin-bottom: 0px;\n  "])));
});

exports.FacebookButton = FacebookButton;