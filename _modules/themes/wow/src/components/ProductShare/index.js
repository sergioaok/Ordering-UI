"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductShare = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FiShare = _interopRequireDefault(require("@meronex/icons/fi/FiShare2"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ProductShareUI = function ProductShareUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var updateShowValue = props.updateShowValue,
      showShareButton = props.showShareButton,
      urlToShare = props.urlToShare,
      btnText = props.btnText,
      withBtn = props.withBtn;
  var iconElement = (0, _react.useRef)();
  var contentElement = (0, _react.useRef)();

  var handleClickOutside = function handleClickOutside(e) {
    var _iconElement$current, _contentElement$curre;

    var outsideIcon = !((_iconElement$current = iconElement.current) !== null && _iconElement$current !== void 0 && _iconElement$current.contains(e.target));
    var outsideButtonsShare = !((_contentElement$curre = contentElement.current) !== null && _contentElement$curre !== void 0 && _contentElement$curre.contains(e.target));

    if (outsideIcon && outsideButtonsShare) {
      updateShowValue && updateShowValue(false);
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  var handleClickShare = function handleClickShare() {
    updateShowValue(!showShareButton);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.IconShare, {
    ref: iconElement,
    name: "icon-share"
  }, withBtn ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: handleClickShare
  }, /*#__PURE__*/_react.default.createElement(_FiShare.default, null), btnText) : /*#__PURE__*/_react.default.createElement(_FiShare.default, {
    onClick: handleClickShare
  }), /*#__PURE__*/_react.default.createElement(_styles.ShareButtons, {
    ref: contentElement,
    className: "a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style",
    "data-a2a-url": urlToShare,
    showShareButton: showShareButton
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_copy_link"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_facebook"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_whatsapp"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_twitter"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_email"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_dd",
    href: "https://www.addtoany.com/share"
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var ProductShare = function ProductShare(props) {
  var productShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductShareUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductShare, productShareProps);
};

exports.ProductShare = ProductShare;