"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCartContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _AddressDetails = require("../AddressDetails");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessCartContent = function BusinessCartContent(props) {
  var _cart$business, _cart$business2, _theme$images, _theme$images$dummies, _configs$google_maps_, _theme$images2, _theme$images2$genera;

  var isSkeleton = props.isSkeleton,
      cart = props.cart,
      orderType = props.orderType,
      business = props.business;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var mapConfigs = {
    mapZoom: 16,
    mapSize: {
      width: 640,
      height: 400
    }
  };

  var handleClickCheckout = function handleClickCheckout() {
    events.emit('go_to_page', {
      page: 'checkout',
      params: {
        cartUuid: cart.uuid
      }
    });
    events.emit('cart_popover_closed');
  };

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      businessSingleList = _useState2[0],
      setBusinessSingleList = _useState2[1];

  (0, _react.useEffect)(function () {
    if (isSkeleton) return;
    var _business = [];

    _business.push(business);

    setBusinessSingleList(_business);
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cart && Object.keys(cart).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cart.products.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CartHeader, null, /*#__PURE__*/_react.default.createElement("h3", null, t('YOUR_ORDER', 'Your order')), /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.name), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRounded: true,
    disabled: !(cart !== null && cart !== void 0 && cart.valid_schedule),
    onClick: function onClick() {
      return handleClickCheckout();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('CHECKOUT', 'Checkout')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart.total)))), orderType === 2 && businessSingleList.length !== 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PickupOrderCartHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('THIS_IS_A_PICKUP_ORDER', 'This is a Pickup order')), /*#__PURE__*/_react.default.createElement("p", null, t('YOU_WILL_NEED_TO_GO_TO', 'You’ll need to go to'), " ", cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.name, " ", t('TO_PICK_UP_THIS_ORDER', 'to pick up this order.'))), /*#__PURE__*/_react.default.createElement(_styles.WrapBusinessMap, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessAddress, null, /*#__PURE__*/_react.default.createElement("span", null, t('PICK_UP_AT', 'Pick up at')), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.address)), /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
    isCartView: true,
    location: business === null || business === void 0 ? void 0 : business.location,
    businessLogo: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs
  }))), cart.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      isCartProduct: true,
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      product: product
    });
  }))), (!cart || Object.keys(cart).length === 0 || cart.products.length === 0) && /*#__PURE__*/_react.default.createElement(_styles.NoCarts, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.emptyCart,
    alt: "empty cart",
    width: "200px",
    height: "200px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_CART_IS_EMPTY', 'Your cart is empty')), /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_ITEMS_TO_GET_STARTED', 'Add items to get started')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CartHeader, {
    isSkeleton: isSkeleton
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  })))));
};

exports.BusinessCartContent = BusinessCartContent;