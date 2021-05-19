"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeWrapper = exports.Option = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  padding: 15px  5px;\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref) {
  var selected = _ref.selected;
  return selected && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: 3px solid ", ";\n    font-weight: 500;\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (_ref2) {
    var toggle = _ref2.toggle;
    return toggle && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-bottom: none;\n      background: ", ";\n      color: #fff;\n    "])), function (props) {
      return props.theme.colors.darkTextColor;
    });
  }, function (_ref3) {
    var radioStyle = _ref3.radioStyle;
    return radioStyle && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-bottom: none;\n    "])));
  });
}, function (_ref4) {
  var toggle = _ref4.toggle;
  return toggle && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 0px 10px;\n    width: 50%;\n    border-radius: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    white-space: nowrap;\n  "])));
}, function (_ref5) {
  var radioStyle = _ref5.radioStyle;
  return radioStyle && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    padding: 0px;\n    svg {\n      font-size: 24px;\n    }\n  "])));
});

exports.Option = Option;

var OrderTypeWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0 10px;\n\n  ", "\n  ", "\n  @media (max-width: 576px) {\n    ", "\n  }\n"])), function (_ref6) {
  var toggle = _ref6.toggle;
  return toggle && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-right: none;\n    background: ", ";\n    height: 42px;\n    border-radius: 25px;\n    padding: 0px;\n  "])), function (props) {
    return props.theme.colors.secondary;
  });
}, function (_ref7) {
  var radioStyle = _ref7.radioStyle;
  return radioStyle && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border-right: none;\n    flex-direction: column;\n    row-gap: 20px;\n    padding: 10px 0;\n  "])));
}, function (_ref8) {
  var dropDownStyle = _ref8.dropDownStyle;
  return dropDownStyle && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding: 0;\n\n      #item {\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n    "])));
});

exports.OrderTypeWrapper = OrderTypeWrapper;