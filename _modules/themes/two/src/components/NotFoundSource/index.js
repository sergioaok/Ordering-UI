"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundSource = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundSource = function NotFoundSource(props) {
  var _theme$images, _theme$images$general;

  var image = props.image,
      content = props.content,
      btnTitle = props.btnTitle,
      conditioned = props.conditioned,
      onClickButton = props.onClickButton;
  var theme = (0, _styledComponents.useTheme)();
  var errorImage = image || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound);
  return /*#__PURE__*/_react.default.createElement(_styles.NotFound, {
    id: "not-found-source"
  }, errorImage && /*#__PURE__*/_react.default.createElement(_styles.NotFoundImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: errorImage,
    alt: "Not Found",
    width: "300",
    height: "260",
    loading: "lazy"
  })), content && conditioned && !errorImage && /*#__PURE__*/_react.default.createElement("h1", null, content), content && !conditioned && /*#__PURE__*/_react.default.createElement("h1", null, content), !onClickButton && props.children && props.children, onClickButton && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return onClickButton();
    }
  }, btnTitle)));
};

exports.NotFoundSource = NotFoundSource;