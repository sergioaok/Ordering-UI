"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessItemAccordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));

var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));

var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));

var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessItemAccordion = function BusinessItemAccordion(props) {
  var _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _orderState$options;

  var uuid = props.uuid,
      isCartPending = props.isCartPending,
      currentCartUuid = props.currentCartUuid,
      isCheckout = props.isCheckout,
      isClosed = props.isClosed,
      moment = props.moment,
      business = props.business,
      orderTotal = props.orderTotal,
      isProducts = props.isProducts,
      isValidProducts = props.isValidProducts,
      isForceOpenAccordion = props.isForceOpenAccordion,
      handleClearProducts = props.handleClearProducts,
      handleStoreRedirect = props.handleStoreRedirect;
  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0, _react.useState)('0px'),
      _useState4 = _slicedToArray(_useState3, 2),
      setHeight = _useState4[0],
      setHeightState = _useState4[1];

  var _useState5 = (0, _react.useState)('accordion__icon'),
      _useState6 = _slicedToArray(_useState5, 2),
      setRotate = _useState6[0],
      setRotateState = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      cartProductUpdated = _useState8[0],
      setCartProductUpdated = _useState8[1];

  var content = (0, _react.useRef)(null);
  var businessStore = (0, _react.useRef)(null);
  var businessDelete = (0, _react.useRef)(null);

  var toggleAccordion = function toggleAccordion(e) {
    var _businessStore$curren, _businessDelete$curre;

    var isActionsClick = ((_businessStore$curren = businessStore.current) === null || _businessStore$curren === void 0 ? void 0 : _businessStore$curren.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_businessDelete$curre = businessDelete.current) === null || _businessDelete$curre === void 0 ? void 0 : _businessDelete$curre.contains(e === null || e === void 0 ? void 0 : e.target));
    if (isClosed || !isProducts || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : ''); // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )

    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };

  var activeAccordion = function activeAccordion(value) {
    setActiveState(value ? 'active' : ''); // setHeightState(value ? `${content.current.scrollHeight}px` : '0px')

    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon');
  };

  var handleCloseCartPopover = function handleCloseCartPopover() {
    var _Object$values$filter;

    var cartsLength = (_Object$values$filter = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter !== void 0 ? _Object$values$filter : 0;

    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false);
    }
  };

  var handleCartProductUpdated = function handleCartProductUpdated(product, cart) {
    setCartProductUpdated(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };

  (0, _react.useEffect)(function () {
    if (cartProductUpdated === uuid || currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid)) {
      activeAccordion(true);
    } else {
      activeAccordion(false);
    }
  }, [cartProductUpdated, currentCartUuid]);
  (0, _react.useEffect)(function () {
    var _Object$values$filter2;

    var cartsLength = (_Object$values$filter2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter2 !== void 0 ? _Object$values$filter2 : 0;

    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true);
    }
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.carts]);
  (0, _react.useEffect)(function () {
    if (isForceOpenAccordion) {
      activeAccordion(true);
    }
  }, [isForceOpenAccordion]);
  (0, _react.useEffect)(function () {
    events.on('cart_popover_closed', handleCloseCartPopover);
    events.on('cart_product_updated', handleCartProductUpdated);
    return function () {
      events.off('cart_popover_closed', handleCloseCartPopover);
      events.off('cart_product_updated', handleCartProductUpdated);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    isClosed: isClosed
  }, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isClosed: isClosed,
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)))), !isClosed && !!isProducts && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "total"
  }, isValidProducts && orderTotal > 0 && /*#__PURE__*/_react.default.createElement("p", null, parsePrice(orderTotal)), /*#__PURE__*/_react.default.createElement("p", null, t('CART_TOTAL', 'Total'))), isClosed && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "closed"
  }, /*#__PURE__*/_react.default.createElement("p", null, t('CLOSED', 'Closed'), " ", moment)), !isClosed && !isProducts && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_PRODUCTS', 'No products'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessActions, null, handleStoreRedirect && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessStore,
    onClick: function onClick() {
      return handleStoreRedirect(business === null || business === void 0 ? void 0 : business.slug);
    }
  }, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    color: "#CCC"
  })), !isClosed && !!isProducts && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCartPending && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessDelete,
    onClick: function onClick() {
      return handleClearProducts();
    }
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  })), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      minHeight: "".concat(setHeight),
      maxHeight: !setActive && '0px'
    }
  }, props.children));
};

exports.BusinessItemAccordion = BusinessItemAccordion;