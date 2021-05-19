"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapBottomSection = exports.SkeletonItem = exports.ProductLoading = exports.ProductsNotFound = exports.WrapContent = exports.ProductsContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n  padding-top: 60px;\n  \n  @media (max-width: 767px) {\n    width: 100%;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n  }\n"])));

exports.Container = Container;

var ProductsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 70%;\n  padding: 30px 20px 30px 0;\n\n  @media (max-width: 992px) {\n    width: 100%;\n    padding: 20px 0;\n  }\n\n  @media (max-width: 576px) {\n    padding: 0px;\n  }\n"])));

exports.ProductsContainer = ProductsContainer;

var WrapContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.WrapContent = WrapContent;

var ProductsNotFound = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));

exports.ProductsNotFound = ProductsNotFound;

var ProductLoading = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));

exports.ProductLoading = ProductLoading;

var SkeletonItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));

exports.SkeletonItem = SkeletonItem;

var WrapBottomSection = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  p {\n    text-align: center;\n  }\n"])));

exports.WrapBottomSection = WrapBottomSection;