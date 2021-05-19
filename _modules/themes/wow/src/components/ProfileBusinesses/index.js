"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileBusinesses = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _Modal = require("../../../../../components/Modal");

var _SearchBar = require("../../../../../components/SearchBar");

var _BusinessesMap = require("../../../../../components/BusinessesMap");

var _ProfileBusinesBasicInformation = require("../ProfileBusinesBasicInformation");

var _SpecificBusiness = require("../SpecificBusiness");

var _styles = require("./styles");

var _theme_wow = require("ordering-ui/theme_wow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProfileBusinessesUI = function ProfileBusinessesUI(props) {
  var _document$getElementB, _orderState$options, _orderState$options$a, _businessesList$busin;

  var isCustomLayout = props.isCustomLayout,
      businessesList = props.businessesList,
      searchValue = props.searchValue,
      paginationProps = props.paginationProps,
      handleChangeSearch = props.handleChangeSearch,
      getBusinesses = props.getBusinesses;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var PIXELS_TO_SCROLL = ((_document$getElementB = document.getElementById('footer')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) + 100 || 300;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showList = _useState2[0],
      setShowList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      businessDetailShow = _useState4[0],
      setBusinessDetialShow = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedBusiness = _useState6[0],
      setSelectedBusiness = _useState6[1];

  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight;
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);

  var onBusinesClick = function onBusinesClick(business) {
    setBusinessDetialShow(true);
    setSelectedBusiness(business);
  };

  var onBusinessCustomClick = function onBusinessCustomClick(slug) {
    var business = businessesList.businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.slug) === slug;
    });
    onBusinesClick(business);
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESSES', 'Businesses')), !showList && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessMap, null, /*#__PURE__*/_react.default.createElement(_styles.WrapSearchBar, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  })), !businessesList.loading && !configState.loading ? /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location,
    onBusinessCustomClick: onBusinessCustomClick
  }) : /*#__PURE__*/_react.default.createElement(_styles.MapSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)), /*#__PURE__*/_react.default.createElement(_theme_wow.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowList(true);
    }
  }, t('SHOW_LIST', 'Show list'))), businessDetailShow && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: businessDetailShow,
    width: "60%",
    onClose: function onClose() {
      return setBusinessDetialShow(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_SpecificBusiness.SpecificBusiness, {
    business: selectedBusiness
  })), showList && /*#__PURE__*/_react.default.createElement(_styles.ShowListContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    var _orderState$options2;

    return /*#__PURE__*/_react.default.createElement(_ProfileBusinesBasicInformation.ProfileBusinesBasicInformation, {
      key: business.id,
      business: business,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type,
      onBusinesClick: onBusinesClick
    });
  }), businessesList.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options3;

    return /*#__PURE__*/_react.default.createElement(_ProfileBusinesBasicInformation.ProfileBusinesBasicInformation, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type
    });
  })), /*#__PURE__*/_react.default.createElement(_styles.ShowMapButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_theme_wow.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowList(false);
    }
  }, t('SHOW_MAP', 'Show map')))));
};

var ProfileBusinesses = function ProfileBusinesses(props) {
  var BusinessesListingProps = _objectSpread(_objectSpread({}, props), {}, {
    isSearchByName: true,
    isSearchByDescription: true,
    propsToFetch: ['id', 'name', 'header', 'logo', 'address', 'location', 'timezone', 'schedule', 'open', 'phone', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'menus'],
    UIComponent: ProfileBusinessesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, BusinessesListingProps);
};

exports.ProfileBusinesses = ProfileBusinesses;