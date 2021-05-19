"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfo = exports.BusinessLogo = exports.LogoWrapper = exports.BusinessGeneralInfo = exports.InvisibleInput = exports.Send = exports.Comments = exports.Stars = exports.Category = exports.Categories = exports.Reviews = exports.ReviewOrderInnerContainer = exports.ReviewOrderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewOrderContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #F9F9F9;\n  padding: 30px 0;\n"])));

exports.ReviewOrderContainer = ReviewOrderContainer;

var ReviewOrderInnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h1 {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ReviewOrderInnerContainer = ReviewOrderInnerContainer;

var Reviews = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.Reviews = Reviews;

var Categories = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > div:last-child {\n    border-bottom: none;\n  }\n"])));

exports.Categories = Categories;

var Category = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #CCC;\n\n  > p{\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Category = Category;

var Stars = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  > label {\n    > input {\n      display: none;\n    }\n  }\n"])));

exports.Stars = Stars;

var Comments = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n\n  > textarea {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 5px;\n  }\n"])));

exports.Comments = Comments;

var Send = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n  width: 100%;\n\n  > button {\n    width: 100%;\n    padding: 5px 0;\n  }\n"])));

exports.Send = Send;

var InvisibleInput = _styledComponents.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: fixed;\n"])));

exports.InvisibleInput = InvisibleInput;

var BusinessGeneralInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.BusinessGeneralInfo = BusinessGeneralInfo;

var LogoWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 60px;\n  max-height: 60px;\n  height: 60px;\n  width: 60px;\n"])));

exports.LogoWrapper = LogoWrapper;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 60px;\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 10px;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 60px);\n  h1,\n  p {\n    margin: 3px 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #FFF;\n  }\n\n  h1 {\n    font-size: 18px;\n    color: ", ";\n  }\n  p {\n    font-size: 15px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});

exports.BusinessInfo = BusinessInfo;