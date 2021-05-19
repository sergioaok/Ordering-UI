"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcon = exports.FooterBottomContent = exports.WrapAppImgae = exports.SupportContent = exports.LinkBlock = exports.FooterTopContent = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 0;\n\n  h1 {\n    color: #fff;\n    font-size: 18px;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    margin: 7px 0;\n    font-size: 14px;    \n  }\n\n  a.right {\n    text-align: right;\n  }\n\n  @media (max-width: 768px) {\n    h1 {\n     text-align: center;\n    }\n\n    a {\n      text-align: center;\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
}, function (_ref) {
  var isHomePage = _ref.isHomePage;
  return !isHomePage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-top: 1px solid ", ";\n\n    h1 {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.secondary;
  }, function (props) {
    return props.theme.colors.darkTextColor;
  });
});

exports.FooterContainer = FooterContainer;

var FooterTopContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 91%;\n\n  & > div {\n    width: 50%;\n  }\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n    & > div {\n      width: 100%;\n    }\n  }  \n"])));

exports.FooterTopContent = FooterTopContent;

var LinkBlock = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  & > div {\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (max-width: 992px) {\n    & > div {\n      width: initial;\n    }\n  }\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));

exports.LinkBlock = LinkBlock;

var SupportContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 91%;\n  justify-content: space-between;\n  padding: 30px 0;\n\n  & > div {\n    width: 25%;\n    a {\n      display: block;\n    }\n  } \n  @media (max-width: 992px) {\n    & > div {\n      width: initial;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));

exports.SupportContent = SupportContent;

var WrapAppImgae = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 150px;\n  background-color: ", ";\n  border-radius: 10px;\n  img {\n    width: 100%;\n  }\n  margin-bottom: 20px;\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.WrapAppImgae = WrapAppImgae;

var FooterBottomContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 91%;\n\n  & > div {\n    display: flex;\n    align-items: center;\n\n    &:first-child {\n      column-gap: 20px;\n    }\n  }\n  @media (max-width: 768px) {\n    flex-direction: column-reverse;\n    align-items: center;\n    & > div {\n      flex-wrap: wrap;\n      justify-content: center;\n      &:first-child {\n        column-gap: 10px;\n      }\n    }\n  }\n"])));

exports.FooterBottomContent = FooterBottomContent;

var SocialIcon = _styledComponents.default.a(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0 5px !important;\n  color: initial;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 576px) {\n    width: 32px;\n    height: 32px;\n  }\n"])));

exports.SocialIcon = SocialIcon;