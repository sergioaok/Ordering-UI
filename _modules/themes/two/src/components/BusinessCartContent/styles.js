"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAddress = exports.WrapBusinessMap = exports.PickupOrderCartHeader = exports.NoCarts = exports.CartHeader = exports.InnerContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n  width: 30%;\n\n  @media (min-width: 992px) {\n    display: block;\n    border-left: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.Container = Container;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 30px 15px;\n  position: sticky;\n  top: 60px;\n  max-height: calc(100vh - 60px);\n  overflow-x: hidden;\n"])));

exports.InnerContainer = InnerContainer;

var CartHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h3 {\n    color: ", ";\n    margin: 0px;\n  }\n  p {\n    font-weight: 500;\n    color: ", ";\n    margin: 0px;\n  }\n\n  button {\n    margin: 20px 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n  "])));
});

exports.CartHeader = CartHeader;

var NoCarts = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));

exports.NoCarts = NoCarts;

var PickupOrderCartHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  p {\n    font-size: 18px;\n    text-align: center;\n    &:first-child {\n      font-weight: 600;\n    }\n    &:not(:first-child) {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.PickupOrderCartHeader = PickupOrderCartHeader;

var WrapBusinessMap = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 5px;\n  overflow: hidden;\n\n  #map {\n    width: 100% !important;\n    border-radius: initial !important;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapBusinessMap = WrapBusinessMap;

var BusinessAddress = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n\n  span {\n    font-size: 18px;\n    font-weight: 600;\n\n    &:first-child {\n      color: ", ";\n      padding-right: 5px;\n    }\n\n    &:not(:first-child) {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessAddress = BusinessAddress;