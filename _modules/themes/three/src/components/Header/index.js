"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");

var _HiOutlineShoppingBag = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineShoppingBag"));

var _styles = require("./styles");

var _DeliveryDetailsPopover = require("../DeliveryDetailsPopover");

var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _SidebarMenu = require("../SidebarMenu");

var _CartPopover = require("../CartPopover");

var _styledComponents = require("styled-components");

var _Buttons = require("../../styles/Buttons");

var _Modal = require("../../../../../components/Modal");

var _DeliveryDetailsContent = require("../DeliveryDetailsContent");

var _CartContent = require("../CartContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(props) {
  var _configState$configs, _configState$configs$, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _orderState$options2, _orderState$options3, _orderState$options3$, _orderState$options3$2, _orderState$options3$3, _orderState$options4, _orderState$options5, _configState$configs2, _configState$configs3, _orderState$options6, _props$afterComponent, _props$afterElements;

  var isHome = props.isHome,
      location = props.location,
      closeCartPopover = props.closeCartPopover;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var theme = (0, _styledComponents.useTheme)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    return cart.products.length > 0;
  }) || null;
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isBusinessListPage = location.pathname === '/search';
  var isSearchBarVisiable = location.pathname === '/search' || location.pathname === '/filter';

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      openPopover = _useState2[0],
      setOpenPopover = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalIsOpen = _useState4[0],
      setModalIsOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      modalSelected = _useState6[0],
      setModalSelected = _useState6[1];

  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };

  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };

  var handleAddProduct = function handleAddProduct() {
    if (!closeCartPopover) {
      handleTogglePopover('cart');
    }
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };

  (0, _react.useEffect)(function () {
    events.on('cart_product_added', handleAddProduct);
    return function () {
      return events.off('cart_product_added', handleAddProduct);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    user: user
  }), /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      var _orderState$options, _orderState$options$a;

      return handleGoToPage({
        page: orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location ? 'search' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.isotype,
    loading: "lazy"
  }))), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, !(configState !== null && configState !== void 0 && configState.loading) && configTypes.length > 0 && isBusinessListPage && windowSize.width > 992 && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: configTypes
  }), !isHome && onlineStatus && windowSize.width > 992 && /*#__PURE__*/_react.default.createElement(_styles.DeliverDetailsContainer, {
    isSearchBarVisiable: isSearchBarVisiable
  }, /*#__PURE__*/_react.default.createElement(_DeliveryDetailsPopover.DeliveryDetailsPopover, {
    auth: auth,
    open: openPopover.deliveryDetails,
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.address,
    onClick: function onClick() {
      return handleTogglePopover('deliveryDetails');
    },
    onClose: function onClose() {
      return handleClosePopover('deliveryDetails');
    }
  })), isHome && /*#__PURE__*/_react.default.createElement(_styles.Menu, null, !auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, t('SIGN_IN', 'Sign in')))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
    open: openPopover.cart,
    carts: cartsWithProducts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location
  }) : /*#__PURE__*/_react.default.createElement(_styles.CartContainer, {
    onClick: function onClick() {
      return openModal('cart');
    }
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineShoppingBag.default, null), /*#__PURE__*/_react.default.createElement("p", null, cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length))))), onlineStatus && windowSize.width <= 992 && /*#__PURE__*/_react.default.createElement(_styles.DeliveryDetailsInfoWrap, null, !(configState !== null && configState !== void 0 && configState.loading) && configTypes.length > 0 && isBusinessListPage && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: configTypes
  }), !isHome && /*#__PURE__*/_react.default.createElement(_styles.DeliveryDetailsInfo, {
    onClick: function onClick() {
      return openModal('deliveryDetails');
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : (_orderState$options3$2 = _orderState$options3$.address) === null || _orderState$options3$2 === void 0 ? void 0 : (_orderState$options3$3 = _orderState$options3$2.split(',')) === null || _orderState$options3$3 === void 0 ? void 0 : _orderState$options3$3[0]) || t('SELECT_AN_ADDRESS', 'Select an address')), /*#__PURE__*/_react.default.createElement("span", null, " - "), /*#__PURE__*/_react.default.createElement("p", null, (_orderState$options4 = orderState.options) !== null && _orderState$options4 !== void 0 && _orderState$options4.moment ? parseDate((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.moment, {
    outputFormat: ((_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.format_time) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm'
  }) : t('ASAP_ABBREVIATION', 'ASAP'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%"
  }, modalSelected === 'deliveryDetails' && /*#__PURE__*/_react.default.createElement(_DeliveryDetailsContent.DeliveryDetailsContent, {
    auth: auth,
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'cart' && /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.Header = Header;