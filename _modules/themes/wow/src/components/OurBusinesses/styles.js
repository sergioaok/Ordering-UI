"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.LoadMore = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.InnerContainer = exports.BusinessListContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow-x: auto;\n  display: flex;\n"])));

exports.BusinessListContainer = BusinessListContainer;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n\n  svg {\n    cursor: pointer;\n    z-index: 100;\n    background: ", ";\n    color: #FFF;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.InnerContainer = InnerContainer;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 90px;\n  height: 75px;\n  max-width: 90px;\n  min-height: 75px;\n  margin: 8px;\n\n  ", "\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: auto;\n    height: auto;\n  "])));
});

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.2), 0px 1px 10px rgba(128, 128, 128, 0.2), 0px 3px 5px rgba(128, 128, 128, 0.2);\n  border-radius: 16px;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;
var LoadMore = (0, _styledComponents.default)(WrapperBusinessLogo)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.2), 0px 1px 10px rgba(128, 128, 128, 0.2), 0px 3px 5px rgba(128, 128, 128, 0.2);\n  border-radius: 16px;\n  justify-content: center;\n  cursor: pointer;\n  font-weight: 600;\n"])), function (props) {
  return props.theme.colors.darkBlueColor;
});
exports.LoadMore = LoadMore;

var ErrorMessage = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 10px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;