"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvisibleInput = exports.Send = exports.Comments = exports.Stars = exports.Category = exports.Categories = exports.Reviews = exports.ReviewOrderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewOrderContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%\n"])));

exports.ReviewOrderContainer = ReviewOrderContainer;

var Reviews = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 80%;\n  align-items: baseline;\n  justify-content: space-between;\n"])));

exports.Reviews = Reviews;

var Categories = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n"])));

exports.Categories = Categories;

var Category = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n"])));

exports.Category = Category;

var Stars = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    > label {\n      > input {\n      display: none;\n      }\n    }\n"])));

exports.Stars = Stars;

var Comments = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  > input {\n  width: 100%;\n  }\n\n  h2 {\n    text-transform: capitalize;\n  }\n"])));

exports.Comments = Comments;

var Send = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 20px 0;\n"])));

exports.Send = Send;

var InvisibleInput = _styledComponents.default.input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: fixed;\n"])));

exports.InvisibleInput = InvisibleInput;