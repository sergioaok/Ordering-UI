"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonBlock = exports.ProductActions = exports.ProductComment = exports.SectionTitle = exports.ProductEdition = exports.ProductInfo = exports.ProductImage = exports.WrapperImage = exports.ProductContainer = void 0;

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        float: left;\n        margin-left: 10px;\n        margin-right: 0px;\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n\n  div {\n    width: 50%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    svg {\n      width: 35px;\n      height: 35px;\n      cursor: pointer;\n    }\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n  }\n\n  button.add {\n    width: 100%;\n    padding: 5px 10px;\n    margin: 10px 0px 0px;\n\n    span:last-child {\n      float: right;\n      margin-right: 10px;\n      ", "\n    }\n    &.soldout {\n      width: 100%;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 577px) {\n    justify-content: space-between;\n    flex-direction: row;\n\n    div {\n      width: 25%;\n    }\n    button.add {\n      width: 75%;\n      margin: 0;\n    }\n  }\n\n  @media (min-width: 1201px) {\n    padding: 10px 0px 0px;\n\n    div {\n      width: 30%;\n    }\n    button.add {\n      width: 68%;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n  textarea {\n    font-size: 16px;\n    font-weight: 300;\n    padding: 10px;\n    border: 1px solid #CCC;\n    outline: none;\n    color: #555;\n    resize: none;\n\n    &:focus {\n      border-color: #555;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  padding: 15px;\n  margin: 0px;\n  font-weight: 600;\n  color: #333333;\n  background-color: #F7F7F7;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  .error {\n    background-color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      text-align: right;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      text-align: right;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  position: relative;\n  margin-top: 10px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n    text-align: center;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-top: 0px;\n    ", "\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    text-align: left;\n    margin-top: 0px;\n\n    line-height: 1.5em;\n    height: 3em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 411px) {\n    padding: 10px 0px;\n  }\n\n  @media (min-width: 1201px) {\n    width: calc(50% - 20px);\n    padding: 0px 10px;\n    top: 0;\n    margin-top: 0px;\n\n    h1 {\n      text-align: left;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 300px;\n\n  img {\n    border-radius: 16px;\n    object-fit: contain;\n    height: 100%;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 1201px) {\n    height: auto;\n    img {\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 1201px) {\n    width: calc(50% - 10px);\n    top: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  max-height: 100vh;\n  position: relative;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 1201px) {\n    flex-wrap: nowrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject());

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject2());

exports.WrapperImage = WrapperImage;

var ProductImage = _styledComponents.default.div(_templateObject3());

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6());
});

exports.ProductInfo = ProductInfo;

var ProductEdition = _styledComponents.default.div(_templateObject7(), (0, _polished.lighten)(0.58, '#A52121'));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject8());

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject9());

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11());
});

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject12(), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;