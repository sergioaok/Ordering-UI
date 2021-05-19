"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapActoinButton = exports.StepValue = exports.Line = exports.WrapStep = exports.HeaderItem = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-width: 500px;\n\n  @media (max-width: 992px) {\n    min-width: 250px;\n\n    > p {\n      margin: 0px;\n    }\n  }\n"])));

exports.Container = Container;

var HeaderItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h1 {\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  p {\n    text-align: center;\n  }\n\n  @media (max-width: 992px) {\n    h1 {\n      margin: 10px 0;\n      font-size: 24px;\n    }\n  }\n"])));

exports.HeaderItem = HeaderItem;

var WrapStep = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"])));

exports.WrapStep = WrapStep;

var Line = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 3px;\n  background: ", ";\n  flex: 1;\n  border-radius: 3px;\n  margin-top: 10px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var deActive = _ref.deActive;
  return deActive && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.grayTextColor;
  });
});

exports.Line = Line;

var StepValue = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  align-items: center;\n  svg {\n    color: ", ";\n    cursor: pointer;\n    font-size: 24px;\n    ", "\n\n    &:hover {\n      transform: scale(2.5);\n    }\n    ", "\n\n  }\n  span {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref2) {
  var setted = _ref2.setted;
  return setted && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      transform: scale(2.5);\n    "])));
}, function (_ref3) {
  var deActive = _ref3.deActive;
  return deActive && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      color: ", ";\n      transform: scale(1);\n    "])), function (props) {
    return props.theme.colors.grayTextColor;
  });
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.StepValue = StepValue;

var WrapActoinButton = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    &:first-child {\n      width: 40%;\n    }\n    &:last-child {\n      width: 55%;\n    }\n  }\n"])));

exports.WrapActoinButton = WrapActoinButton;