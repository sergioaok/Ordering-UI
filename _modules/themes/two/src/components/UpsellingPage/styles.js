"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseUpselling = exports.Details = exports.Image = exports.Item = exports.UpsellingContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow-x: auto;\n"])));

exports.Container = Container;

var UpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.UpsellingContainer = UpsellingContainer;

var Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #eee;\n  min-width: 150px;\n  padding: 10px 20px;\n  margin: 0px 5px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 300px;\n  justify-content: space-between;\n\n  @media (max-width: 576px) {\n    padding: 5px 10px;\n  }\n"])));

exports.Item = Item;

var Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  img{\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height);\n  }\n\n  @media (max-width: 576px) {\n    width: 50px;\n  }\n"])));

exports.Image = Image;

var Details = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  max-width: 170px;\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 12px;\n    }\n  }\n  p{\n    color: ", ";\n    margin: 0px;\n  }\n  button {\n    width: auto;\n    padding: 0 20px;\n    font-size: 1em;\n    line-height: 22px;\n  }\n\n  @media (min-width: 480px){\n    div{\n      h3{\n        font-size: 14px;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Details = Details;

var CloseUpselling = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  button{\n    width: 90%;\n    font-size: 1.4em;\n    padding: 10px 0;\n  }\n\n  @media (min-width: 720px){\n    button{\n      width: 40%;\n      padding: 2px;\n      font-size: 1em;\n    }\n  }\n"])));

exports.CloseUpselling = CloseUpselling;