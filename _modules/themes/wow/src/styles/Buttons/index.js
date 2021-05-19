"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #CCC;\n  color: #FFF;\n  border: 1px solid #CCC;\n  border-radius: 30px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var bgtransparent = _ref.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background: transparent !important;\n  "])));
}, function (_ref2) {
  var initialIcon = _ref2.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0\n    "])));
  });
}, function (_ref3) {
  var outline = _ref3.outline;
  return outline && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref4) {
  var circle = _ref4.circle;
  return circle && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: #CCC;\n    color: #FFF;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref5) {
  var circle = _ref5.circle,
      outline = _ref5.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref6) {
  var color = _ref6.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primaryContrast);
  }, function (_ref7) {
    var outline = _ref7.outline;
    return outline && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primaryContrast);
    });
  }, function (_ref8) {
    var circle = _ref8.circle;
    return circle && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primaryContrast);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primaryContrast);
    });
  }, function (_ref9) {
    var circle = _ref9.circle,
        outline = _ref9.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    });
  });
});

exports.Button = Button;