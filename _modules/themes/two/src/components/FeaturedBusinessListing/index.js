"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeaturedBusinessListing = exports.FeaturedBusinessListingUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _SearchBar = require("../SearchBar");

var _Buttons = require("../../styles/Buttons");

var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));

var _EnChevronLeft = _interopRequireDefault(require("@meronex/icons/en/EnChevronLeft"));

var _BusinessController = require("../BusinessController");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FeaturedBusinessListingUI = function FeaturedBusinessListingUI(props) {
  var _businessesList$busin;

  var twoColumnView = props.twoColumnView,
      isFeaturePage = props.isFeaturePage,
      defaultShowNumber = props.defaultShowNumber,
      businessesList = props.businessesList,
      paginationProps = props.paginationProps,
      handleBusinessClick = props.handleBusinessClick,
      searchValue = props.searchValue,
      handleChangeSearch = props.handleChangeSearch;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var isPopularBisnesses = window.location.pathname === '/businesses/popular';
  return /*#__PURE__*/_react.default.createElement(_styles.PopularBusinessContainer, {
    isFeaturePage: isFeaturePage
  }, isFeaturePage && /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isCustomMode: true,
    search: searchValue,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), /*#__PURE__*/_react.default.createElement(_styles.TextContent, null, /*#__PURE__*/_react.default.createElement(_styles.PositionedContainer, {
    fixed: isPopularBisnesses
  }, isFeaturePage && /*#__PURE__*/_react.default.createElement(_styles.BackView, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_EnChevronLeft.default, null), t('BACK', ' Back'))), /*#__PURE__*/_react.default.createElement("h1", null, t('MOST_POPULAR_LOCAL_BUSINESSES', 'Most Popular Local Businesses')), !isFeaturePage && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "desktop",
    disabled: businessesList.loading,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'businesses_feature',
        params: {
          feature: 'popular'
        }
      });
    }
  }, t('SEE_ALL', 'See All'), " ", /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.PopularBusinesssList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
    twoColumnView: twoColumnView,
    isFeaturePage: isFeaturePage,
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }), (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.slice(0, !defaultShowNumber ? paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalItems : defaultShowNumber).map(function (business) {
    var _orderState$options;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      twoColumnView: twoColumnView,
      isFeaturePage: isFeaturePage,
      key: business.id,
      className: "card",
      business: business,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type
    });
  }), businessesList.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : !isFeaturePage ? 4 : 10).keys()).map(function (i) {
    var _orderState$options2;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      twoColumnView: twoColumnView,
      isFeaturePage: isFeaturePage,
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })), !isFeaturePage && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "mobile",
    disabled: businessesList.loading,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'businesses_feature',
        params: {
          feature: 'popular'
        }
      });
    }
  }, t('SEE_ALL', 'See All'), " ", /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)));
};

exports.FeaturedBusinessListingUI = FeaturedBusinessListingUI;

var FeaturedBusinessListing = function FeaturedBusinessListing(props) {
  var AllBusinessesListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FeaturedBusinessListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, AllBusinessesListingProps);
};

exports.FeaturedBusinessListing = FeaturedBusinessListing;