"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _FaTwitter = _interopRequireDefault(require("@meronex/icons/fa/FaTwitter"));

var _FaInstagram = _interopRequireDefault(require("@meronex/icons/fa/FaInstagram"));

var _AiFillFacebook = _interopRequireDefault(require("@meronex/icons/ai/AiFillFacebook"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Footer = function Footer(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera, _props$afterComponent, _props$afterElements;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FooterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FooterTopContent, null, /*#__PURE__*/_react.default.createElement(_styles.LogoContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "150px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotypeInvert,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.LinkMainContent, null, /*#__PURE__*/_react.default.createElement(_styles.LinkBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ABOUT_ORDERING', 'About ordering')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('READ_OUR_BLOG', 'Read our blog')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('BUY_GIFT_CARDS', 'Buy gift cards')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('CREATE_A_BUSINESS_ACCOUNT', 'Create a business account')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('ADD_YOUR_RESTAURANT', 'Add your restaurant')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('SIGN_UP_TO_DELIVERY', 'Sign up to deliver'))), /*#__PURE__*/_react.default.createElement(_styles.LinkBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, t('GET_HELP', 'Get Help')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('READ_FAQS', 'Read FAQs')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('VIEW_ALL_CITIES', 'View all cities')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('VIEW_ALL_COUNTRIES', 'View all countries')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('RESTAURANTS_NEAR_ME', 'Restaurants near me')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('SAVE_ON_YOUR_FIRST_ORDER', 'Save on your first order'))))), /*#__PURE__*/_react.default.createElement(_styles.AppDownloadContariner, null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF'),
    className: "right"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAppImgae, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.appStore,
    alt: "app store"
  }))), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF'),
    className: "right"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAppImgae, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.googlePlay,
    alt: "google play"
  })))), /*#__PURE__*/_react.default.createElement(_styles.FooterBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SocialLinkContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_1_HREF'),
    "aria-label": "facebook"
  }, /*#__PURE__*/_react.default.createElement(_AiFillFacebook.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_3_HREF'),
    "aria-label": "twitter"
  }, /*#__PURE__*/_react.default.createElement(_FaTwitter.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_2_HREF'),
    "aria-label": "instagram"
  }, /*#__PURE__*/_react.default.createElement(_FaInstagram.default, null))), /*#__PURE__*/_react.default.createElement(_styles.PolicyContainer, null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('PRIVACY_POLICY', 'Privacy policy')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('TERMS', 'Terms')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('PRICIING', 'Pricing')))), /*#__PURE__*/_react.default.createElement(_styles.CopyWritterContainer, null, t('COPRYWRITTER_FRONT', 'reCAPTCHA and Google protect this site. Privacy Policy and Terms of Service apply. © 2021 Ordering')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.Footer = Footer;