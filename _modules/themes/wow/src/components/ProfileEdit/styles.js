"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileContent = exports.UploadImageIcon = exports.SkeletonWrapper = exports.Image = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    color: ", ";\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.Container = Container;

var Image = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  margin-bottom: 20px;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 992px) {\n    width: 90px;\n    height: 90px;\n  }\n"])));

exports.Image = Image;

var SkeletonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var UploadImageIcon = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var ProfileContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  max-width: 500px;\n  width: 91%;\n"])));

exports.ProfileContent = ProfileContent;