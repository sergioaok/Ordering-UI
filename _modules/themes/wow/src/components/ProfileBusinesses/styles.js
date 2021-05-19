"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowMapButtonWrapper = exports.BusinessListContainer = exports.ShowListContainer = exports.WrapSearchBar = exports.MapSkeleton = exports.WrapperBusinessMap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  h1 {\n    font-size: 20px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Container = Container;

var WrapperBusinessMap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > div:nth-child(2) {\n    height: 500px;\n    padding: 0px;\n    #map {\n      width: 100% !important;\n      border-radius: unset;\n    }\n  }\n\n  > button {\n    position: absolute;\n    bottom: 10px;\n    width: 90%;\n    margin: 0 5%;\n    padding: 5px 0;\n    max-width: 500px;\n  }\n\n  @media (min-width: 992px) {\n    > div:nth-child(2) {\n      height: 600px;\n    }\n  }\n"])));

exports.WrapperBusinessMap = WrapperBusinessMap;

var MapSkeleton = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 500px;\n  width: 100%;\n\n  span {\n    height: 100% !important;\n  }\n"])));

exports.MapSkeleton = MapSkeleton;

var WrapSearchBar = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  width: 90%;\n  margin: 0 5%;\n  z-index: 100;\n  \n  input {\n    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n    border-radius: 10px;\n  }\n"])));

exports.WrapSearchBar = WrapSearchBar;

var ShowListContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  > div:first-child {\n    input {\n      box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n      border-radius: 10px;\n    }\n  }\n"])));

exports.ShowListContainer = ShowListContainer;

var BusinessListContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  @media (min-width: 1024px) {\n    display: flex;\n    flex-wrap: wrap;\n    > div {\n      width: calc(50% - 20px);\n    }\n  }\n"])));

exports.BusinessListContainer = BusinessListContainer;

var ShowMapButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: center;\n  > button {\n    padding: 5px 0;\n    width: 100%;\n    max-width: 300px;\n    margin: 30px 0;\n  }\n"])));

exports.ShowMapButtonWrapper = ShowMapButtonWrapper;