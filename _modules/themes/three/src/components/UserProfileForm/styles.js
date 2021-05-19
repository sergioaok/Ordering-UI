"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonWrapper = exports.UploadImageIcon = exports.SavedPlaces = exports.UserData = exports.SideForm = exports.Image = exports.UserImage = exports.ProfileInfoRow = exports.UserProfileContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 110px;\n  width: 91%;\n  margin: 0px auto;\n  display: flex;\n  justify-content: center;\n\n  @media (min-width: 992px) {\n    padding-top: 65px;\n  }\n"])));

exports.Container = Container;

var UserProfileContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 40px 0;\n  @media (min-width: 992px) {\n    width: 55%;\n  }\n"])));

exports.UserProfileContainer = UserProfileContainer;

var ProfileInfoRow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 20px;\n  margin-bottom: 20px;\n\n  > div {\n    &:first-child {\n      min-width: 120px;\n      font-weight: 600;\n    }\n  }\n\n  #select-input {\n    border-radius: unset;\n    min-width: 200px;\n  }\n"])));

exports.ProfileInfoRow = ProfileInfoRow;

var UserImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));

exports.UserImage = UserImage;

var Image = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  overflow: hidden;\n  padding: 5px;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var isImage = _ref.isImage,
      theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});

exports.Image = Image;

var SideForm = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n  }\n"])));

exports.SideForm = SideForm;

var UserData = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});

exports.UserData = UserData;

var SavedPlaces = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n\n  h1{\n    font-size: 24px;\n    text-align: left;\n    ", "\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    margin-top: 40px;\n    h1 {\n      text-align: center;\n    }\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 65%;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    text-align: right;\n    "])));
});

exports.SavedPlaces = SavedPlaces;

var UploadImageIcon = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var SkeletonWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;