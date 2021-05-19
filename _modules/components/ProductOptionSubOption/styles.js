"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuboptionPrice = exports.PositionControl = exports.QuantityControl = exports.SubOptionThumbnail = exports.Text = exports.IconControl = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  cursor: pointer;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n     -khtml-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n"])));

exports.Container = Container;

var IconControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  margin-right: 5px;\n  ", "\n  svg {\n    font-size: 25px;\n  }\n\n  svg[disabled] {\n    color: #CBCBCB;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});

exports.IconControl = IconControl;

var Text = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  display: flex;\n  font-weight: 300;\n  color: #555;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0 5px;\n\n  div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  span {\n    margin-left: 10px;\n    font-weight: 500;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 0;\n      margin-right: 10px;    \n    "])));
});

exports.Text = Text;

var SubOptionThumbnail = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 8px;\n  background-image: url(", ");\n  background-repeat: no-repeat, repeat;\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref) {
  var src = _ref.src;
  return src;
});

exports.SubOptionThumbnail = SubOptionThumbnail;

var QuantityControl = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #555;\n  align-items: center;\n  font-weight: 300;\n  font-size: 18px;\n  margin: 0 5px;\n\n  svg {\n    color: ", ";\n    font-size: 20px;\n    margin-right: 3px;\n    ", "\n  }\n\n  svg[disabled] {\n    color: #CBCBCB;\n  }\n\n  svg:last-child {\n    margin-left: 3px;\n    margin-right: 0;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 3px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 3px;\n      margin-left: 0px;\n  "])));
});

exports.QuantityControl = QuantityControl;

var PositionControl = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: #CBCBCB;\n  font-weight: 300;\n  font-size: 18px;\n  margin: 0 5px;\n\n  svg {\n    font-size: 20px;\n    margin-right: 3px;\n    ", "\n    &.reverse {\n      transform: rotate(180deg);\n    }\n\n    &.selected {\n      color: ", ";\n    }\n\n    &:last-child {\n      margin-right: 0;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 3px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 0;\n      "])));
});

exports.PositionControl = PositionControl;

var SuboptionPrice = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  white-space: nowrap;\n  font-weight: 300;\n  font-size: 14px;\n  color: #555;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});

exports.SuboptionPrice = SuboptionPrice;