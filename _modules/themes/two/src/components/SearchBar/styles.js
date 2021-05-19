"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = exports.DeleteContent = exports.BusinessSearch = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1200;\n  top: 10px;\n  right: 200px;\n  ", "\n  \n  @media (max-width: 1200px) {\n    right: 150px;\n    ", "\n  }\n\n  @media (max-width: 576px) {\n    right: 110px;\n    ", "\n  }\n\n  input {\n    width: 100%;\n    border-radius: 40px;\n    background-position: right 10px center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    box-sizing: border-box;\n    padding: 7px 15px;\n\n    ", "\n    background-color: ", ";\n\n    ", "\n\n    @media (min-width: 681px) {\n      ", "\n    }\n\n    @media (max-width: 576px) {\n      width: 42vw;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    right: initial;\n    left: 200px;\n  "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      right: initial;\n      left: 150px;\n    "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: initial;\n      left: 110px;\n    "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding-right: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 40px;\n    "])));
}, function (props) {
  var _props$theme5, _props$theme5$colors;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : (_props$theme5$colors = _props$theme5.colors) === null || _props$theme5$colors === void 0 ? void 0 : _props$theme5$colors.backgroundPage;
}, function (_ref) {
  var externalBusinessMap = _ref.externalBusinessMap;
  return !externalBusinessMap && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      justify-content: center;\n      input {\n        -webkit-transition: width 0.4s ease-in-out;\n        transition: width 0.4s ease-in-out; \n      }\n    "])));
}, function (_ref2) {
  var externalBusinessMap = _ref2.externalBusinessMap;
  return !externalBusinessMap && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        width: 240px;\n      "])));
});

exports.BusinessSearch = BusinessSearch;

var DeleteContent = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 14px;\n  left: 20px;\n  top: 12px;\n  ", "\n  span{\n    cursor: pointer;\n  }\n  img{\n    width: 20px;\n    transform: translate(-25%, 0%);\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    left: initial;\n    right: 20px;\n  "])));
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      transform: translate(25%, 0%);\n    "])));
});

exports.DeleteContent = DeleteContent;

var SearchIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-position: right 10px center;\n  background-repeat: no-repeat;\n  background-size: 15px;\n  background-color: ", ";\n"])), function (props) {
  var _props$theme8, _props$theme8$images, _props$theme8$images$;

  return (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : (_props$theme8$images = _props$theme8.images) === null || _props$theme8$images === void 0 ? void 0 : (_props$theme8$images$ = _props$theme8$images.general) === null || _props$theme8$images$ === void 0 ? void 0 : _props$theme8$images$.searchIcon;
}, function (props) {
  var _props$theme9, _props$theme9$colors;

  return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : (_props$theme9$colors = _props$theme9.colors) === null || _props$theme9$colors === void 0 ? void 0 : _props$theme9$colors.backgroundPage;
});

exports.SearchIcon = SearchIcon;