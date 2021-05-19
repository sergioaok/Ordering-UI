"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.SkeletonWrapper = exports.UploadImageIcon = exports.SavedPlaces = exports.UserData = exports.Camera = exports.SideForm = exports.Image = exports.UserImage = exports.UserProfileContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var UserProfileContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  overflow-x: hidden;\n  margin: 25px auto ", ";\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.mbottom ? "".concat(props.mbottom, "px") : 'auto';
});

exports.UserProfileContainer = UserProfileContainer;

var UserImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n\n  @media (min-width: 768px){\n    width: auto;\n    align-items: flex-end;\n  }\n"])));

exports.UserImage = UserImage;

var Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 170px;\n  height: 170px;\n  border: 2px solid ", ";\n  border-radius: 100%;\n  overflow: hidden;\n  padding: 20px;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px){\n    width: 200px;\n    height: 200px;\n  }\n\n  @media (min-width: 768px){\n    width: 170px;\n    height: 170px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isImage = _ref.isImage,
      theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});

exports.Image = Image;

var SideForm = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n    margin: 30px 0px 0px 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "])));
});

exports.SideForm = SideForm;

var Camera = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width:212px;\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n\n  @media (min-width: 480px){\n    width:242px;\n  }\n\n  @media (min-width: 768px){\n    width:212px;\n  }\n"])));

exports.Camera = Camera;

var UserData = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});

exports.UserData = UserData;

var SavedPlaces = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 90%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n\n\n  h1{\n    font-size: 24px;\n    text-align: left;\n    ", "\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    width: 90%;\n    margin-top: 40px;\n    h1 {\n      text-align: center;\n    }\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 65%;\n    }\n  }\n\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    text-align: right;\n    "])));
});

exports.SavedPlaces = SavedPlaces;

var UploadImageIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var SkeletonWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var WrapperForm = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 100%;\n  }\n"])));

exports.WrapperForm = WrapperForm;