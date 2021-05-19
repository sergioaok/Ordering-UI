"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartSidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _FaShoppingBag = _interopRequireDefault(require("@meronex/icons/fa/FaShoppingBag"));

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _CartContent = require("../CartContent");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CartSidebar = function CartSidebar(props) {
  var _props$beforeElements, _props$beforeComponen, _props$carts, _props$carts2, _props$afterComponent, _props$afterElements;

  var carts = props.carts,
      isOrderStateCarts = props.isOrderStateCarts;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    document.getElementById('cartSidebar').style.width = value ? width > 489 ? '450px' : '100vw' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('cartSidebar').style.width = '100vw';
      } else {
        document.getElementById('cartSidebar').style.width = '450px';
      }
    }
  }, [width]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaShoppingBag.default, null), (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement("p", null, (_props$carts = props.carts) === null || _props$carts === void 0 ? void 0 : _props$carts.length))), isMenuOpen && /*#__PURE__*/_react.default.createElement(_styles.BackDropContainer, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "cartSidebar"
  }, /*#__PURE__*/_react.default.createElement(_styles.TopContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement(_styles.IconContent, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaShoppingBag.default, null), (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement("p", null, (_props$carts2 = props.carts) === null || _props$carts2 === void 0 ? void 0 : _props$carts2.length)))), /*#__PURE__*/_react.default.createElement("h1", null, t('CART', 'Cart')), /*#__PURE__*/_react.default.createElement(_styles.WrapCartContent, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: carts,
    isOrderStateCarts: isOrderStateCarts,
    onClose: function onClose() {
      return actionSidebar(false);
    }
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.CartSidebar = CartSidebar;