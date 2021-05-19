"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductShare = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductShareUI = function ProductShareUI(props) {
  var urlToShare = props.urlToShare,
      onCancel = props.onCancel;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var copyShareUrlToClipboard = function copyShareUrlToClipboard() {
    var copyText = document.getElementById('shareLink');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return onCancel();
    }
  }, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.gift,
    width: "40",
    height: "40",
    alt: "gift"
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapShareLink, null, /*#__PURE__*/_react.default.createElement("p", null, t('SHARE_YOUR_LINK', 'Share Your Link')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    id: "shareLink",
    type: "text",
    value: urlToShare,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return copyShareUrlToClipboard();
    }
  }, t('COPY_LINK', 'Copy Link')))));
};

var ProductShare = function ProductShare(props) {
  var productShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductShareUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductShare, productShareProps);
};

exports.ProductShare = ProductShare;