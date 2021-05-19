"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #CCC;\n  color: #FFF;\n  border: 1px solid #CCC;\n  border-radius: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var rectangle = _ref.rectangle;
  return rectangle && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: unset;\n  "])));
}, function (_ref2) {
  var bgtransparent = _ref2.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: transparent !important;\n  "])));
}, function (_ref3) {
  var initialIcon = _ref3.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0\n    "])));
  });
}, function (_ref4) {
  var outline = _ref4.outline;
  return outline && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref5) {
  var circle = _ref5.circle;
  return circle && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #CCC;\n    color: #FFF;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref6) {
  var circle = _ref6.circle,
      outline = _ref6.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref7) {
  var color = _ref7.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  }, function (_ref8) {
    var outline = _ref8.outline;
    return outline && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref9) {
    var circle = _ref9.circle;
    return circle && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref10) {
    var circle = _ref10.circle,
        outline = _ref10.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref11) {
  var color = _ref11.color;
  return color === 'secundary' && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  }, function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.secundary);
  }, function (_ref12) {
    var outline = _ref12.outline;
    return outline && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.05, props.theme.colors.secundary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    });
  }, function (_ref13) {
    var circle = _ref13.circle;
    return circle && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        color: ", ";\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    });
  }, function (_ref14) {
    var circle = _ref14.circle,
        outline = _ref14.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    });
  });
}, function (_ref15) {
  var color = _ref15.color;
  return color === 'green' && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  &:active {\n    background: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"])), function (props) {
    var _props$theme$colors;

    return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGreen;
  }, function (props) {
    var _props$theme$colors2;

    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.white;
  }, function (props) {
    var _props$theme$colors3;

    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.darkGreen;
  }, function (props) {
    var _props$theme$colors4;

    return (0, _polished.darken)(0.07, (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.darkGreen);
  }, function (_ref16) {
    var outline = _ref16.outline;
    return outline && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      color: ", ";\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n  "])), function (props) {
      var _props$theme$colors5;

      return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.darkGreen;
    }, function (props) {
      var _props$theme$colors6;

      return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.darkGreen;
    }, function (props) {
      var _props$theme$colors7;

      return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.darkGreen;
    }, function (props) {
      var _props$theme$colors8;

      return (0, _polished.darken)(0.05, (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.white);
    }, function (props) {
      var _props$theme$colors9;

      return (0, _polished.darken)(0.07, (_props$theme$colors9 = props.theme.colors) === null || _props$theme$colors9 === void 0 ? void 0 : _props$theme$colors9.white);
    });
  }, function (_ref17) {
    var circle = _ref17.circle;
    return circle && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: ", ";\n      border-color: ", ";\n      background: ", ";\n    }\n  "])), function (props) {
      var _props$theme$colors10;

      return (_props$theme$colors10 = props.theme.colors) === null || _props$theme$colors10 === void 0 ? void 0 : _props$theme$colors10.white;
    }, function (props) {
      var _props$theme$colors11;

      return (_props$theme$colors11 = props.theme.colors) === null || _props$theme$colors11 === void 0 ? void 0 : _props$theme$colors11.darkGreen;
    }, function (props) {
      var _props$theme$colors12;

      return (_props$theme$colors12 = props.theme.colors) === null || _props$theme$colors12 === void 0 ? void 0 : _props$theme$colors12.darkGreen;
    }, function (props) {
      var _props$theme$colors13;

      return (_props$theme$colors13 = props.theme.colors) === null || _props$theme$colors13 === void 0 ? void 0 : _props$theme$colors13.darkGreen;
    }, function (props) {
      var _props$theme$colors14;

      return (0, _polished.darken)(0.07, (_props$theme$colors14 = props.theme.colors) === null || _props$theme$colors14 === void 0 ? void 0 : _props$theme$colors14.darkGreen);
    }, function (props) {
      var _props$theme$colors15;

      return (0, _polished.darken)(0.07, (_props$theme$colors15 = props.theme.colors) === null || _props$theme$colors15 === void 0 ? void 0 : _props$theme$colors15.white);
    });
  }, function (_ref18) {
    var circle = _ref18.circle,
        outline = _ref18.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: ", ";\n    border-color: ", ";\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      border-color: ", ";\n      background: ", ";\n      color: ", ";\n    }\n  "])), function (props) {
      var _props$theme$colors16;

      return (_props$theme$colors16 = props.theme.colors) === null || _props$theme$colors16 === void 0 ? void 0 : _props$theme$colors16.darkGreen;
    }, function (props) {
      var _props$theme$colors17;

      return (_props$theme$colors17 = props.theme.colors) === null || _props$theme$colors17 === void 0 ? void 0 : _props$theme$colors17.darkGreen;
    }, function (props) {
      var _props$theme$colors18;

      return (_props$theme$colors18 = props.theme.colors) === null || _props$theme$colors18 === void 0 ? void 0 : _props$theme$colors18.darkGreen;
    }, function (props) {
      var _props$theme$colors19;

      return (_props$theme$colors19 = props.theme.colors) === null || _props$theme$colors19 === void 0 ? void 0 : _props$theme$colors19.white;
    }, function (props) {
      var _props$theme$colors20;

      return (_props$theme$colors20 = props.theme.colors) === null || _props$theme$colors20 === void 0 ? void 0 : _props$theme$colors20.darkGreen;
    });
  });
});

exports.Button = Button;