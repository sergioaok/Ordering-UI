"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyWritterContainer = exports.PolicyContainer = exports.SocialIcon = exports.SocialLinkContainer = exports.FooterBottomContainer = exports.WrapAppImgae = exports.AppDownloadContariner = exports.LinkBlock = exports.LinkMainContent = exports.LogoContainer = exports.FooterTopContent = exports.InnerContainer = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 50px 0;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.FooterContainer = FooterContainer;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n"])));

exports.InnerContainer = InnerContainer;

var FooterTopContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"])));

exports.FooterTopContent = FooterTopContent;

var LogoContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 50%;\n\n  @media (max-width: 992px) {\n    width: 35%;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    text-align: center;\n  }\n"])));

exports.LogoContainer = LogoContainer;

var LinkMainContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  @media (max-width: 992px) {\n    width: 65%;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"])));

exports.LinkMainContent = LinkMainContent;

var LinkBlock = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 45%;\n\n  h1 {\n    font-size: 18px;\n    color: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    font-size: 14px;\n    margin: 5px 0;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.white;
});

exports.LinkBlock = LinkBlock;

var AppDownloadContariner = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 30px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 768px) {\n    justify-content: center;\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.AppDownloadContariner = AppDownloadContariner;

var WrapAppImgae = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 150px;\n  border-radius: 10px;\n  height: 45px;\n  overflow: hidden;\n  border: 2px solid ", ";\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});

exports.WrapAppImgae = WrapAppImgae;

var FooterBottomContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 30px 0 10px 0;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    row-gap: 20px;\n  }\n"])));

exports.FooterBottomContainer = FooterBottomContainer;

var SocialLinkContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 20px;\n"])));

exports.SocialLinkContainer = SocialLinkContainer;

var SocialIcon = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  color: ", ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});

exports.SocialIcon = SocialIcon;

var PolicyContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 15px;\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});

exports.PolicyContainer = PolicyContainer;

var CopyWritterContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 0px;\n  color: ", ";\n  text-align: right;\n\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});

exports.CopyWritterContainer = CopyWritterContainer;