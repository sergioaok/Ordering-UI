"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutContainer = exports.IconWrap = exports.Item = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #F9F9F9;\n  padding: 20px 0px;\n  border-radius: 20px;\n  margin-top: -20px;\n  h1 {\n    font-size: 18px;\n    color: ", ";\n    border-top: 1px solid #CCC;\n    padding: 15px 0;\n    margin: 0px 25px;\n  }\n\n  @media (min-width: 992px) {\n    background-color: transparent;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Container = Container;

var Item = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n  cursor: pointer;\n  color: ", ";\n  &:hover {\n    background-color: #CCC;\n  }\n\n  ", "\n\n  span {\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    ", "\n  "])), function (props) {
    var _props$theme$colors2;

    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
  }, function (props) {
    var _props$theme;

    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-right: 4px solid ", ";\n    "])), props.theme.colors.primary) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left: 4px solid ", ";\n    "])), props.theme.colors.primary);
  });
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "])));
});

exports.Item = Item;

var IconWrap = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  background-color: #F9F9F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 18px;\n  }\n"])));

exports.IconWrap = IconWrap;

var LogoutContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n  margin: 0 25px;\n  border-top: 1px solid #CCC;\n  cursor: pointer;\n\n  > span:first-child {\n    background: #F9F9F9;\n    backdrop-filter: blur(15px);\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    svg {\n      color: #F7705D;\n      width: 30px;\n      height: 30px;\n    }\n  }\n\n  > span:last-child {\n    color: ", ";\n    font-size: 16px;\n    margin: 0 15px;\n  }\n"])), function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
});

exports.LogoutContainer = LogoutContainer;