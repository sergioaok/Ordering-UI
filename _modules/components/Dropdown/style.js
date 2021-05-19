"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownCircleImage = exports.DropdownItemLink = exports.DropdownItemStyled = exports.Arrow = exports.DropdownMenuStyled = exports.DropdownToggleStyled = exports.DropdownStyled = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Image = require("../Image");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  padding: 5px;\n  border-radius: 1000px;\n  color: #333;\n  z-index: 1001;\n"])));

exports.DropdownStyled = DropdownStyled;

var DropdownToggleStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  /* img {\n    width: 28px;\n    height: 28px;\n    margin-right: 5px;\n    border-radius: 1000px;\n\n    :last-child {\n      margin-right: 0;\n    }\n  } */\n"])));

exports.DropdownToggleStyled = DropdownToggleStyled;

var DropdownMenuStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  /* padding: 15px; */\n  flex-direction: column;\n  color: #333;\n  z-index: 2;\n  border-radius: 10px;\n  /* overflow: hidden; */\n"])));

exports.DropdownMenuStyled = DropdownMenuStyled;

var Arrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0; \n  height: 0; \n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.Arrow = Arrow;
var DropdownItemShared = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 10px 15px;\n  cursor: pointer;\n  color: #333;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n\n  svg {\n    margin-right: 7px;\n    ", "\n  }\n\n  :hover {\n    background-color: #eee;\n  }\n  :active {\n    background-color: #ddd;\n  }\n\n  :first-child {\n    border-radius: 10px 10px 0 0;\n  }\n\n  :nth-last-child(2) {\n    border-bottom: 0px;\n    border-radius: 0 0 10px 10px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});

var DropdownItemStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), DropdownItemShared);

exports.DropdownItemStyled = DropdownItemStyled;

var DropdownItemLink = _styledComponents.default.a(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n"])), DropdownItemShared);

exports.DropdownItemLink = DropdownItemLink;
var DropDownCircleImage = (0, _styledComponents.default)(_Image.Image)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  margin-right: 5px;\n  border-radius: 1000px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  object-fit: cover;\n  ", "\n\n  /* svg {\n    display: flex;\n  } */\n\n  :last-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-right: 0;\n    "])));
});
exports.DropDownCircleImage = DropDownCircleImage;