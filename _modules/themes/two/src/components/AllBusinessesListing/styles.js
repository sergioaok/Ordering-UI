"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.AllBusinessList = exports.WrapButtonGroup = exports.WrapperSeeAllButton = exports.AllStoreNumber = exports.Title = exports.LeftInnerContainer = exports.LeftContent = exports.WrapperBusinesses = exports.InnerContainer = exports.AllBuinessContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AllBuinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  width: 100%;\n  justify-content: center;\n "])), function (props) {
  return props.theme.colors.lightGrayColor;
});

exports.AllBuinessContainer = AllBuinessContainer;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  padding: 20px 0;\n  @media (max-width: 992px) {\n    padding-top: 0px;    \n  }\n"])));

exports.InnerContainer = InnerContainer;

var WrapperBusinesses = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n\n  > div {\n    &:nth-child(2) {\n      padding-bottom: 50px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    flex-direction: column;\n  }\n"])));

exports.WrapperBusinesses = WrapperBusinesses;

var LeftContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 30%;\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.LeftContent = LeftContent;

var LeftInnerContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 60px;\n  padding: 30px 0;\n  z-index: 10;\n"])));

exports.LeftInnerContainer = LeftInnerContainer;

var Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  margin: 0px;\n"])));

exports.Title = Title;

var AllStoreNumber = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  text-transform: capitalize;\n  font-size: 18px;\n  margin-top: 0px;\n"])));

exports.AllStoreNumber = AllStoreNumber;

var WrapperSeeAllButton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding-bottom: 30px;\n  text-align: center;\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.WrapperSeeAllButton = WrapperSeeAllButton;

var WrapButtonGroup = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  column-gap: 15px;\n  margin-top: 30px;\n"])));

exports.WrapButtonGroup = WrapButtonGroup;

var AllBusinessList = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 992px) {\n    > div {\n      margin: 10px;\n      &:not(:first-child) {\n        width: calc(50% - 20px);\n      }\n    }\n    padding-bottom: 30px;\n  }\n  @media (max-width: 576px) {\n    > div {\n      margin: 5px;\n\n      &: first-child {\n        width: 100%;\n      }\n\n      &:not(:first-child) {\n        width: 100%;\n      }\n    }\n  }\n"])));

exports.AllBusinessList = AllBusinessList;

var ErrorMessage = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;