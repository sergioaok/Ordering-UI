"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapShareLink = exports.WrapImage = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 30px;\n  position: relative;\n\n  @media (max-width: 576px) {\n    width: 91%;\n  }\n\n  > a {\n    cursor: pointer;\n    font-size: 42px;\n    position: absolute;\n    left: 0px;\n    top: -20px;\n  }\n"])));

exports.Container = Container;

var WrapImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 150px;\n  height: 150px;\n  > img {\n    width: 100%;\n    height: 100%;\n  }\n"])));

exports.WrapImage = WrapImage;

var WrapShareLink = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 1000px;\n  > div {\n    display: flex;\n    justify-content: space-between;\n    column-gap: 20px;\n    input {\n      flex: 1;\n    }\n    input,\n    button {\n      padding: 10px 20px;\n    }\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 18px;\n    text-align: center;\n  }\n  \n  @media (max-width: 576px) {\n    > div {\n      flex-direction: column;\n      row-gap: 20px;\n    }\n  }\n"])));

exports.WrapShareLink = WrapShareLink;