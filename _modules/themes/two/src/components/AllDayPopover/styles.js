"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeItem = exports.PopoverArrow = exports.PopoverBody = exports.HeaderItem = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n"])));

exports.Container = Container;

var HeaderItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ncolor: ", ";\ndisplay: flex;\nalign-items: center;\npadding-left: 15px;\n\nh3 {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  box-shadow: 0px 3px 6px #00000065;\n  border-radius: 10px;\n  padding: 15px;\n  width: 200px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0; \n  height: 0; \n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;

var TimeItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px;\n  p {\n    margin: 0px;\n    &:first-child {\n      font-size: 14px;\n      font-weight: 500;\n      color: ", ";\n    }\n    &:not(:first-child) {\n      font-size: 10px;\n      color: ", ";\n      display: flex;\n      align-items: center;\n    }\n  }\n  ", "\n\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    p {\n      color: ", " !important;\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.TimeItem = TimeItem;