"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapBack = exports.ShareOrder = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ReviewsAction = exports.OrderBill = exports.Map = exports.OrderCustomer = exports.Step = exports.StatusBar = exports.OrderBusiness = exports.OrderData = exports.OrderInfo = exports.BusinessInfo = exports.Content = exports.WrapperContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n  padding-top: 60px;\n"])));

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: auto;\n  display: flex;\n\n  @media (max-width: 992px) {\n    flex-direction: column-reverse;\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '91%';
});

exports.WrapperContainer = WrapperContainer;

var Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n  padding: 0 10px;\n"])));

exports.Content = Content;

var BusinessInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  h1 {\n    cursor: pointer;\n    width: 100%;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: ", ";\n  }\n\n  p {\n    color: ", ";\n    margin-bottom: 0px;\n  }\n\n  @media (max-width: 992px) {\n    h1 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.BusinessInfo = BusinessInfo;

var OrderInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 0 30px;\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 1200px) {\n    padding: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.OrderInfo = OrderInfo;

var OrderData = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  h1 {\n    width: 100%;\n    font-size: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: ", ";\n    span {\n      &:not(:first-child) {\n        color: ", ";\n        font-size: 24px;\n        cursor: pointer;\n      }\n    }\n  }\n\n  p {\n    color: ", ";\n  }\n\n  .order-data-section {\n    max-width: 600px;\n    display: flex;\n    justify-content: space-between;\n    margin: 20px 0;\n\n    > dl dd {\n      padding: 0 10px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    h1 {\n      font-size: 24px;\n    }\n\n    .order-data-section {\n      flex-direction: column;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.OrderData = OrderData;
var OrderBusiness = (0, _styledComponents.default)(OrderInfo)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n"])));
exports.OrderBusiness = OrderBusiness;

var StatusBar = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 7px;\n  margin: 25px 0px 40px;\n  background: ", ";\n  ", "\n\n  > div {\n    position: absolute;\n    top: -8px;\n    width: 100%;\n    display: flex;\n\n    div {\n      width: calc(100% / 3);\n      text-align: right;\n    }\n  }\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%)\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});

exports.StatusBar = StatusBar;

var Step = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 0 5px;\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.Step = Step;
var OrderCustomer = (0, _styledComponents.default)(OrderInfo)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 24px;\n    margin-bottom: 0px;\n  }\n\n  p {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  @media (max-width: 992px) {\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});
exports.OrderCustomer = OrderCustomer;

var Map = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 60%;\n  height: calc(100vh - 120px);\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n\n  ", "\n\n  @media (max-width: 992px) {\n    height: 30vh;\n    min-height: 200px;\n    width: 100%;\n  }\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-top: 37px;\n  "])));
});

exports.Map = Map;

var OrderBill = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    padding: 0 30px;\n    width: 100%;\n    font-size: 12px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 20px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        padding-top: 10px;\n      }\n    }\n  }\n\n  @media (max-width: 1200px) {\n    table {\n      padding: 0 10px;\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderBill = OrderBill;

var ReviewsAction = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 30px 0 20px;\n  padding: 20px;\n  cursor: pointer;\n  background: #F7F7F7;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  p {\n    margin: 0px;\n  }\n  >div {\n    > div {\n      display: flex;\n      column-gap: 5px;\n  \n      svg {\n        color: ", ";\n      }\n    }\n  }\n\n  svg {\n    font-size: 24px;\n  }\n  \n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.ReviewsAction = ReviewsAction;

var SkeletonBlock = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n"])), function (_ref4) {
  var width = _ref4.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n  width: 100%;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;
var ShareOrder = (0, _styledComponents.default)(OrderInfo)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n\n    p {\n      margin: 0px;\n      font-size: 18px;\n      span {\n        &:not(:first-child) {\n          font-weight: 500;\n          padding: 0 5px;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 992px) {\n    > div {\n      p {\n        font-size: 14px;\n      }\n    }\n  }\n"])));
exports.ShareOrder = ShareOrder;

var WrapBack = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 24px;\n  color: ", ";\n  font-weight: 500;\n  cursor: pointer;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WrapBack = WrapBack;