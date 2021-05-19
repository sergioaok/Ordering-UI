"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.CloseUpselling = exports.Details = exports.Image = exports.Item = exports.UpsellingContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  button {\n    width: 46%;\n    margin-top: 20px;\n  }\n  \n  @media (min-width: 768px){\n    justify-content: flex-start;\n    height: auto;\n    button {\n      width: 46%;\n      margin-top: 20px;\n    }\n  }\n"])));

exports.Container = Container;

var UpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  overflow: auto;\n"])));

exports.UpsellingContainer = UpsellingContainer;

var Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #eee;\n  width: 70%;\n  min-width: 150px;\n  padding: 20px;\n  margin: 15px 0;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  box-sizing: border-box;\n\n  @media (min-width: 490px) {\n    width: 43%;\n  }\n\n  @media (min-width: 769px) {\n    width: 27%;\n    padding: 11px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 20%;\n    margin: 10px 15px;\n  }\n"])));

exports.Item = Item;

var Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.Image = Image;

var Details = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 12px;\n    }\n  }\n  p{\n    color: ", ";\n    margin: 2px auto;\n  }\n  button {\n    width: auto;\n    margin: 8px auto 0;\n    padding: 0 20px;\n    font-size: 1em;\n    line-height: 22px;\n\n  }\n\n  @media (min-width: 480px){\n    div{\n      h3{\n        font-size: 14px;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Details = Details;

var CloseUpselling = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  button{\n    width: 90%;\n    font-size: 1.4em;\n    padding: 10px 0;\n  }\n\n  @media (min-width: 720px){\n    button{\n      width: 40%;\n      padding: 2px;\n      font-size: 1em;\n    }\n  }\n"])));

exports.CloseUpselling = CloseUpselling;

var SkeletonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n"])));

exports.SkeletonContainer = SkeletonContainer;