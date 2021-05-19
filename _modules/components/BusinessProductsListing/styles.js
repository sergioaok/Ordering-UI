"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLayout = exports.SkeletonItem = exports.ProductLoading = exports.ProductsNotFound = exports.WrapperSearch = exports.WrapContent = exports.ProductsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 20px auto 0px;\n"])));

exports.ProductsContainer = ProductsContainer;

var WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.WrapContent = WrapContent;

var WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});

exports.WrapperSearch = WrapperSearch;

var ProductsNotFound = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));

exports.ProductsNotFound = ProductsNotFound;

var ProductLoading = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));

exports.ProductLoading = ProductLoading;

var SkeletonItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));

exports.SkeletonItem = SkeletonItem;

var WrappLayout = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    .bp-list,\n    .cart {\n      width: 100%;\n    }\n\n    @media (min-width: 870px) {\n      flex-direction: row;\n      .bp-list {\n        width: 55%;\n      }\n      .cart {\n        width: calc(45% - 20px);\n        margin-left: 20px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .bp-list {\n        width: 60%;\n      }\n      .cart {\n        width: calc(40% - 20px);\n      }\n    }  \n\n    @media (min-width: 1200px) {\n      .bp-list {\n        width: 70%;\n      }\n      .cart {\n        width: calc(30% - 20px);\n      }\n    }  \n  "])));
});

exports.WrappLayout = WrappLayout;