"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = exports.StatusBar = exports.DeliveryDate = exports.SkeletonBlock = exports.SkeletonBlockWrapp = exports.WrapperContainer = exports.MapContainer = exports.OrderDetailsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 110px;\n\n  h1 {\n    width: 91%;\n    margin: 0 auto;\n    font-size: 24px;\n  }\n\n  @media (min-width: 992px) {\n    padding-top: 65px;\n  }\n"])));

exports.OrderDetailsContainer = OrderDetailsContainer;

var MapContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  margin-bottom: 40px;\n  position: relative;\n\n  > div {\n    &: first-child {\n      position: relative !important;\n      width: 100% !important;\n      height: 100% !important;\n      border-radius: 15px;\n    }\n  }\n"])));

exports.MapContainer = MapContainer;

var WrapperContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: auto;\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '80%';
});

exports.WrapperContainer = WrapperContainer;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var SkeletonBlock = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var DeliveryDate = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n  display: inline-block;\n  position: absolute;\n  right: 10%;\n  bottom: -20px;\n  padding: 20px;\n  color: #fff;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.DeliveryDate = DeliveryDate;

var StatusBar = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 30px auto;\n  position: relative;\n  height: 7px;\n  background: ", ";\n  ", "\n\n  > div {\n    position: absolute;\n    top: -11px;\n    width: 100%;\n    display: flex;\n\n    div {\n      width: calc(100% / 3);\n      text-align: right;\n    }\n  }\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%)\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});

exports.StatusBar = StatusBar;

var Step = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 0 5px;\n  display: inline-block;\n  height: 30px;\n  img {\n    color: ", ";\n    font-size: 24px;\n    height: 100%;\n    opacity: 0.5;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    img {\n      opacity: 1;\n    }\n  "])));
});

exports.Step = Step;