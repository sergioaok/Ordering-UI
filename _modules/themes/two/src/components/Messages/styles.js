"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalIcon = exports.ImageContainer = exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.SendImage = exports.Send = exports.SendForm = exports.TimeofSent = exports.MyName = exports.PartnerName = exports.ChatImage = exports.SkeletonBubbleBusiness = exports.SkeletonBubbleCustomer = exports.BubbleCustomer = exports.BubbleBusines = exports.BubbleConsole = exports.MessageCustomer = exports.MessageBusiness = exports.MessageConsole = exports.Chat = exports.HeaderOnline = exports.Image = exports.Status = exports.HeaderName = exports.HeaderProfile = exports.MessagesContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"])));

exports.MessagesContainer = MessagesContainer;

var HeaderProfile = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 15px 20px;\n  border-bottom: 1px solid #EEEEEE;\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "])));
});

exports.HeaderProfile = HeaderProfile;

var HeaderName = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"])));

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"])));

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 50%;\n    object-fit: cover;\n    border: 1px solid #F5F5F5;\n  }\n\n  img[name]{\n    border: 1px solid #D81212;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px;\n  }\n"])), function (props) {
  var _props$theme2, _props$theme2$colors;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primary;
});

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 10px;\n\n  ", "\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 13px;\n    font-weight: 300;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n    text-align: right;\n  "])));
});

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 70vh;\n  flex-direction: column;\n  padding: 0 20px;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-width: 768px){\n    height: calc(60vh - 60px);\n  }\n"])));

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 60px;\n"])));

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"])));

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"])));

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 5px 15px;\n  max-width: 40%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  @media (min-width: 1024px){\n    max-width: 30%\n  }\n"])));

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 40px 40px 40px 0px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    border-radius: 40px 40px 40px 0px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (min-width: 480px) {\n    border-radius: 60px 60px 60px 0px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      border-radius: 40px 40px 0px 40px;\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      border-radius: 60px 60px 0px 60px;\n      &[name=image]{\n        border-radius: 40px 40px 0px 40px;\n       }\n    "])));
});

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-radius: 40px 40px 0px 40px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: #D81212;\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 40px 40px 0px 40px;\n    width: 100%;\n  }\n\n  ", "\n  \n  @media (min-width: 480px){\n    border-radius: 60px 60px 0px 60px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%\n  }\n\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    border-radius: 40px 40px 40px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n\n    &[name=image]{\n      border-radius: 40px 40px 40px 0px;\n     }\n  "])));
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      border-radius: 60px 60px 60px 0px;\n    "])));
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 60px 60px 0px 60px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border-radius: 60px 60px 60px 0px;\n    "])));
});

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 60px 60px 60px 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    border-radius: 60px 60px 0px 60px;\n    "])));
});

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  img{\n    width: 100%;\n    height: auto;\n    max-height: 300;\n    aspect-ratio: attr(width) / attr(height);\n    vertical-align: middle;\n    object-fit: contain;\n    cursor: pointer;\n  }\n"])));

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"])));

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"])), function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      text-align: left;\n  "])));
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"])), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    text-align: left;\n  "])));
});

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0px 5px;\n  position: fixed;\n  bottom: 0;\n  background: #FAFAFA;\n  border-top: 1px solid #EEEEEE;\n  width: 97%;\n  height: 70px;\n  @media (min-width: 480px){\n    padding: 0px 20px;\n    width: 95%;\n  }\n\n  @media (min-width: 768px) {\n    padding: 10px 20px;\n    position: static;\n    width: auto;\n  }\n"])));

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  width: 100%;\n  input {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 60%;\n    flex: 1;\n  }\n"])));

exports.Send = Send;

var SendImage = _styledComponents.default.label(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  margin: 0px 20px;\n  position: ", ";\n  opacity: ", ";\n\n  input {\n    display: none;\n  }\n\n\n\n  svg {\n    color: #CFD0D0;\n    width: 25px;\n    height: 25px;\n    cursor: pointer\n  }\n"])), function (props) {
  return props.hidden && 'fixed';
}, function (props) {
  return props.hidden && '0';
});

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  margin: 0px 17px;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  img{\n    width: 30px;\n    height: 30px;\n    &:disabled {\n    cursor: not-allowed;\n    }\n    border-radius: 8px;\n  }\n\n  svg{\n    margin-bottom: 5px;\n    color: black;\n  }\n\n  button{\n    position: absolute;\n    background: white;\n    width: 20px;\n    height: 20px;\n    transform: translate(100%, -50%);\n  }\n"])));

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n\n  button{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    svg {\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white;\n       ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px){\n    button{\n      svg {\n        margin-right: 10px;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme12;

  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n        transform: rotate(270deg)\n      "])));
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;

var ImageContainer = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));

exports.ImageContainer = ImageContainer;

var ModalIcon = _styledComponents.default.span(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.3);\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme13;

  return ((_props$theme13 = props.theme) === null || _props$theme13 === void 0 ? void 0 : _props$theme13.rtl) && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme14;

  return ((_props$theme14 = props.theme) === null || _props$theme14 === void 0 ? void 0 : _props$theme14.rtl) && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme15;

  return ((_props$theme15 = props.theme) === null || _props$theme15 === void 0 ? void 0 : _props$theme15.rtl) && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;