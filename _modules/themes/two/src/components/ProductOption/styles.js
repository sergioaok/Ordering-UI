"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionThumbnail = exports.Flag = exports.Title = exports.TitleContainer = exports.WrapHeader = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.error {\n    background-color: orange;\n  }\n"])));

exports.Container = Container;

var WrapHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #FFF;\n"])));

exports.WrapHeader = WrapHeader;

var TitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 70%;\n  display: flex;\n  align-items: center;  \n\n  *:first-child {\n    margin-right: 8px;\n  }\n"])));

exports.TitleContainer = TitleContainer;

var Title = _styledComponents.default.h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n\n  span {\n    &:not(:first-child) {\n      color: ", ";\n      font-size: 12px;\n      font-weight: 400;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Title = Title;

var Flag = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  padding: 10px 15px;\n  font-size: 13px;\n  margin: 0px;\n  text-transform: capitalize;\n  font-weight: 500;\n  \n  @media (min-width: 381px) {\n    font-size: 14px;\n  }\n\n  color: #028389;\n  \n  ", "\n"])), function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: #FEFE58;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.grayTextColor;
  });
});

exports.Flag = Flag;

var OptionThumbnail = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 8px;\n  background-image: url(", ");\n  background-repeat: no-repeat, repeat;\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref2) {
  var src = _ref2.src;
  return src;
});

exports.OptionThumbnail = OptionThumbnail;