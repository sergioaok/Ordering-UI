"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExclamationWrapper = exports.MessagesIcon = exports.ShareOrder = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.FootActions = exports.ReviewsAction = exports.OrderBill = exports.OrderProducts = exports.WrapperDriver = exports.OrderDriver = exports.Map = exports.InfoBlock = exports.PhotoBlock = exports.OrderCustomer = exports.SectionTitle = exports.StatusImage = exports.OrderStatus = exports.StatusBar = exports.OrderData = exports.OrderInfo = exports.ActionsBlock = exports.BusinessInfo = exports.BusinessLogo = exports.LogoWrapper = exports.BusinessWrapper = exports.OrderBusiness = exports.Content = exports.HeaderText = exports.HeaderInfo = exports.HeaderImg = exports.Header = exports.WrapperContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n"])));

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: auto;\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '80%';
});

exports.WrapperContainer = WrapperContainer;

var Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  min-height: 200px;\n\n  @media (min-width: 768px) {\n    min-height: 340px;\n  }\n"])));

exports.Header = Header;

var HeaderImg = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  img {\n    display: none;\n\n    @media (min-width: 678px) {\n      display: block;\n      height: 200px;\n      object-fit: cover;\n      width: 100%;\n      border-radius: 10px;\n      aspect-ratio: attr(width) / attr(height)\n\n      ", "\n    }\n\n    @media (min-width: 768px) {\n      height: 340px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        transform: scaleX(-1);\n      "])));
});

exports.HeaderImg = HeaderImg;

var HeaderInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  border-radius: 7px;\n  min-height: 140px;\n\n  @media (min-width: 678px) {\n    position: absolute;\n    top: 0;\n    width: 50%;\n    border-radius: ", ";\n    min-height: 160px;\n  }\n\n  @media (min-width: 768px) {\n    min-height: 300px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? '0 7px 7px 0' : '7px 0 0 7px';
});

exports.HeaderInfo = HeaderInfo;

var HeaderText = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  text-align: center;\n\n  ", ";\n  ", ";\n\n  h1 {\n    margin: 0;\n    font-size: 22px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  @media (min-width: 480px) {\n    margin: 0px 20px;\n  }\n\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 26px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (_ref2) {
  var column = _ref2.column;
  return column && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "])));
}, function (_ref3) {
  var column = _ref3.column;
  return !column && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n  "])));
});

exports.HeaderText = HeaderText;

var Content = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n"])));

exports.Content = Content;

var OrderBusiness = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background: #F8F8F8 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  margin: 20px 0px;\n  padding: 10px;\n"])));

exports.OrderBusiness = OrderBusiness;

var BusinessWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n"])));

exports.BusinessWrapper = BusinessWrapper;

var LogoWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n"])));

exports.LogoWrapper = LogoWrapper;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessInfo = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 65%;\n  h1,\n  p {\n    margin: 3px 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n\n  @media (min-width: 380px) {\n    width: 75%;\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var ActionsBlock = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  @media (min-width: 380px) {\n    flex-direction: row;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});

exports.ActionsBlock = ActionsBlock;

var OrderInfo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px 20px;\n"])));

exports.OrderInfo = OrderInfo;

var OrderData = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-size: 24px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  p:nth-child(1) {\n    opacity: 0.8;\n  }\n  p.date {\n    font-weight: bold;\n  }\n  p.uuid {\n    display: none;\n  }\n\n  @media (min-width: 768px){\n    width: 75%;\n  }\n\n  @media (min-width: 512px) {\n    p.uuid {\n      display: block;\n    }\n  }\n\n  @media (min-width: 425px) {\n    p {\n      font-size: 18px;\n    }\n  }\n"])));

exports.OrderData = OrderData;

var StatusBarStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  height: 7px;\n  margin: 10px 0px 0px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%)\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var OrderStatus = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 45%;\n  max-width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    padding: 5px 10px;\n    border: 1px solid ", ";\n    color: ", ";\n    text-align: center;\n    border-radius: 10px;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 13px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 410px) {\n    span {\n      font-size: initial;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 25%;\n    max-width: 25%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderStatus = OrderStatus;

var StatusImage = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  img {\n    display: flex;\n    width: 70px;\n    height: 70px;\n    box-sizing: border-box;\n    position: relative;\n    background-repeat: no-repeat, repeat;\n    background-size: contain;\n    object-fit: contain;\n    border-radius: 10px;\n    margin-top: 15px;\n  }\n\n  @media (min-width: 410px) {\n    img {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"])));

exports.StatusImage = StatusImage;

var SectionTitle = _styledComponents.default.h1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 26px;\n\n  @media (max-width: 410px) {\n    font-size: 24px;\n  }\n"])));

exports.SectionTitle = SectionTitle;

var OrderCustomer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 10px 0px 20px;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0 10px;\n      ", "\n    }\n  }\n\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.OrderCustomer = OrderCustomer;

var PhotoBlock = _styledComponents.default.img(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 0 10px;\n  ", "\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});

exports.PhotoBlock = PhotoBlock;

var InfoBlock = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  h1,\n  span {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 20px;\n  }\n\n  span {\n    font-size: 18px;\n    opacity: 0.8;\n  }\n"])));

exports.InfoBlock = InfoBlock;

var Map = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));

exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.OrderDriver = OrderDriver;

var WrapperDriver = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0px 10px;\n      ", "\n    }\n  }\n\n"])), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 90%;\n    font-size: 12px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 20px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        padding-top: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderBill = OrderBill;

var ReviewsAction = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n\n  @media (min-width: 480px) {\n    button {\n      width: 70%;\n    }\n  }\n"])));

exports.ReviewsAction = ReviewsAction;

var FootActions = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: ", ";\n    cursor: pointer;\n    font-weight: bold;\n  }\n  svg {\n    margin-left: 5px;\n    transform: rotate(90deg)\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0px;\n      transform: rotate(-90deg)\n    "])));
});

exports.FootActions = FootActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref4) {
  var width = _ref4.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var ShareOrder = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  h1 {\n    font-size: 15px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    width: 60%;\n  }\n\n  div.wrap {\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    div.wrap {\n      width: 30%;\n    }\n\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 425px) {\n    div.text {\n      width: 70%;\n    }\n\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ShareOrder = ShareOrder;

var MessagesIcon = _styledComponents.default.span(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));

exports.MessagesIcon = MessagesIcon;

var ExclamationWrapper = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme10, _props$theme10$colors;

  return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : (_props$theme10$colors = _props$theme10.colors) === null || _props$theme10$colors === void 0 ? void 0 : _props$theme10$colors.primary;
});

exports.ExclamationWrapper = ExclamationWrapper;