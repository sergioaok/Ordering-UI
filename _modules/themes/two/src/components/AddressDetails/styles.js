"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Map = exports.WrappMap = exports.UserAddress = exports.AddressContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0;\n  border-bottom: 1px solid ", ";\n\n  ", "\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (_ref) {
  var isCartView = _ref.isCartView;
  return isCartView && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0px;\n  "])));
});

exports.AddressContainer = AddressContainer;

var UserAddress = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 200px;\n  h1 {\n    font-size: 20px;\n    margin: 0px;\n    text-transform: uppercase;\n  }\n\n  span {\n    cursor: pointer;\n    margin: 0px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    display: flex;\n    column-gap: 10px;\n    padding-bottom: 10px;\n    h1 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.UserAddress = UserAddress;

var WrappMap = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: auto;\n  flex: 1;\n"])));

exports.WrappMap = WrappMap;

var Map = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 5px;\n    -webkit-user-drag: none;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.Map = Map;

var Text = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  h4{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    margin: 20px 0 10px 0;\n\n    &:not(:first-child) {\n      margin: 0px;\n    }\n  }\n\n  span {\n    color: ", ";\n    cursor: pointer;\n  }\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Text = Text;