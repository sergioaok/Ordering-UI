"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _SearchBar = require("../SearchBar");

var _Buttons = require("../../styles/Buttons");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _PickupOrderTypeToggleButton = require("../PickupOrderTypeToggleButton");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _FeaturedBusinessListing = require("../FeaturedBusinessListing");

var _AllBusinessesListing = require("../AllBusinessesListing");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessesListingUI = function BusinessesListingUI(props) {
  var _orderState$options, _theme$images, _theme$images$general, _theme$images2, _theme$images2$logos;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var orderType = (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPickupClicked = _useState2[0],
      setIsPickupClicked = _useState2[1];

  var handleGoToPage = function handleGoToPage(search) {
    events.emit('go_to_page', {
      page: 'filter',
      search: "?".concat(search)
    });
  };

  var handleChangeCategory = function handleChangeCategory(value) {
    handleGoToPage("category=".concat(value));
  };

  (0, _react.useEffect)(function () {
    if (!isPickupClicked) return;

    if (orderType === 2) {
      events.emit('go_to_page', {
        page: 'filter'
      });
    }
  }, [orderType, isPickupClicked]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomMode: true,
    isEnterKeyLoad: true,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: function onSearch(val) {
      return handleGoToPage("search=".concat(val));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    handleChangeBusinessType: handleChangeCategory
  }), /*#__PURE__*/_react.default.createElement(_styles.WrappperButtonGroup, null, /*#__PURE__*/_react.default.createElement(_PickupOrderTypeToggleButton.PickupOrderTypeToggleButton, {
    initialOrderType: 1,
    handleCustomClick: function handleCustomClick() {
      return setIsPickupClicked(true);
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    onClick: function onClick() {
      return handleGoToPage('timeLimit=0:30');
    }
  }, t('UNDER_30_MIN', 'Under 30 min'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderingPass, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.orderingPass,
    onClick: function onClick() {
      return !auth && events.emit('go_to_page', {
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "130px",
    height: "30px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotypeInvert,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("p", null, t('$_0_DELIVERY_FEES_REDUCED_SERVICE_FEES', '$ 0 delivery fees, reduced service fees.')), /*#__PURE__*/_react.default.createElement("p", null, t('SIGN_UP_FOR_ORDERING_PASS', 'Sign Up for Ordering Pass'))), /*#__PURE__*/_react.default.createElement(_FeaturedBusinessListing.FeaturedBusinessListingUI, _extends({}, props, {
    orderType: 1,
    isSortByReview: true,
    twoColumnView: true,
    defaultShowNumber: 4
  }))), /*#__PURE__*/_react.default.createElement(_AllBusinessesListing.AllBusinessesListing, _extends({}, props, {
    setIsPickupClicked: setIsPickupClicked,
    handleGoToPage: handleGoToPage,
    handleChangeCategory: handleChangeCategory
  }))));
};

var BusinessesListing = function BusinessesListing(props) {
  var BusinessesListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    windowPathname: window.location.pathname
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, BusinessesListingProps);
};

exports.BusinessesListing = BusinessesListing;