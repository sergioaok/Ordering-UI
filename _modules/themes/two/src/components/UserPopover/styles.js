"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverListLink = exports.PopoverListItem = exports.PopoverList = exports.PopoverArrow = exports.PopoverBody = exports.HeaderItem = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: ", ";\n\n  svg {\n    color: ", ";\n    height: 25px;\n    width: 25px;\n  }\n"])), function (_ref) {
  var isPhoto = _ref.isPhoto;
  return isPhoto ? 'auto' : '25px';
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? '#FFF' : '#000';
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;

var PopoverList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.PopoverList = PopoverList;
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 15px;\n  border-bottom: 1px solid #eee;\n  align-items: center;\n  color: #333;\n  font-size: 18px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #eee;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});

var PopoverListItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), PopoverListItemStyles);

exports.PopoverListItem = PopoverListItem;

var PopoverListLink = _styledComponents.default.a(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n  ", "\n"])), PopoverListItemStyles, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-color: #eee;\n  "])));
});

exports.PopoverListLink = PopoverListLink;