"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappButton = exports.Reorder = exports.WrapperBusinessTitle = exports.PastLogo = exports.OrderPastContent = exports.SingleCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 25px;\n      margin-right: 0;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n  margin-right: 25px;\n\n  ", "\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n\n  @media (min-width: 768px){\n    ", "\n    button{\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 1024px){\n    button{\n      width: 50%;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 95%\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 80%;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 17px;\n    object-fit: contain;\n  }\n  @media (min-width: 480px){\n    width: 75px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 10px 0;\n  padding-right: 5px;\n  min-width: 220px;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  height: 100px;\n  border: none;\n  @media(min-width: 480px){\n    height: 140px;\n    border-top: 1px solid #ccc;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SingleCard = _styledComponents.default.div(_templateObject());

exports.SingleCard = SingleCard;

var OrderPastContent = _styledComponents.default.div(_templateObject2(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3());
});

exports.OrderPastContent = OrderPastContent;

var PastLogo = _styledComponents.default.div(_templateObject4());

exports.PastLogo = PastLogo;

var WrapperBusinessTitle = _styledComponents.default.div(_templateObject5());

exports.WrapperBusinessTitle = WrapperBusinessTitle;

var Reorder = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7());
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject8()) : (0, _styledComponents.css)(_templateObject9());
});

exports.Reorder = Reorder;

var WrappButton = _styledComponents.default.div(_templateObject10());

exports.WrappButton = WrappButton;