"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookLoginContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _FiEdit = _interopRequireDefault(require("@meronex/icons/fi/FiEdit"));

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FacebookLoginContent = function FacebookLoginContent(props) {
  var _theme$images, _theme$images$logos;

  var handleFacebookLogin = props.handleFacebookLogin;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var ContinueLogin = function ContinueLogin() {
    handleFacebookLogin();
    props.onCancel();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "80px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.isotypeInvert,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.Tagline, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('ORDERING', 'Ordering')), " ", t('WILL_RECEIVE', 'will receive:')), /*#__PURE__*/_react.default.createElement("p", null, t('YOUR_NAME_PROFILE_EMAIL', 'your name and profile picture and emails address.'))), /*#__PURE__*/_react.default.createElement(_styles.EditThisButton, null, /*#__PURE__*/_react.default.createElement(_FiEdit.default, null), t('EDIT_THIS', 'Edit this')), /*#__PURE__*/_react.default.createElement("p", null, t('THIS_DOESNT_LET_THE_APP_POST_TO_FACEBOOK', 'This doesn’t let the app post to Facebook')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "blue",
    borderRounded: true,
    onClick: function onClick() {
      return ContinueLogin();
    }
  }, t('CONTINUE_AS_CUSTOMER', 'Continue as Customer')), /*#__PURE__*/_react.default.createElement(_styles.Cancel, {
    onClick: function onClick() {
      return props.onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.TermsAndPrivacy, null, t('ORDERINGS', 'Ordering’s'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('PRIVACY_POLICY', 'Privacy Policy')), " ", t('AND', 'and'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('TERMS', 'Terms'))));
};

exports.FacebookLoginContent = FacebookLoginContent;