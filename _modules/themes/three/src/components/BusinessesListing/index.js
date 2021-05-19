"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _FeaturedBuinessesListing = require("../FeaturedBuinessesListing");

var _AllBusinessesListing = require("../AllBusinessesListing");

var _SearchBar = require("../SearchBar");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessesListing = function BusinessesListing(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _props$afterComponent, _props$afterElements;

  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var handleGoToPage = function handleGoToPage(search) {
    events.emit('go_to_page', {
      page: 'filter',
      search: "?".concat(search)
    });
  };

  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    handleGoToPage("category=".concat(businessType));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomMode: true,
    isEnterKeyLoad: true,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: function onSearch(val) {
      return handleGoToPage("search=".concat(val));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AdviceContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AdviceInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AdviceLeftContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CRAVE_IT', 'Crave it? Get it.')), /*#__PURE__*/_react.default.createElement("p", null, t('SEARCH_FAVORITE_RESTAURANT', 'Search for a favorite restaurant, cuisine, or dish.'))), /*#__PURE__*/_react.default.createElement(_styles.AdviceRightContent, null, /*#__PURE__*/_react.default.createElement(_styles.AdviceDescriptionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ADVICE_FRONT_TITLE', 'Start the year with energy, enjoy our food ...'))), /*#__PURE__*/_react.default.createElement(_styles.WrapImage, {
    bgimage: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.advice
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapBusinessTypeFilter, null, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    handleChangeBusinessType: handleChangeBusinessType
  })), /*#__PURE__*/_react.default.createElement(_styles.FeaturedBusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('FEATURED_BUSINESSES_NEAR_YOU', 'Featured Businesses Near You')), /*#__PURE__*/_react.default.createElement(_FeaturedBuinessesListing.FeaturedBuinessesListing, _extends({}, props, {
    defaultShowNumber: 3
  }))), /*#__PURE__*/_react.default.createElement(_AllBusinessesListing.AllBusinessesListing, props)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.BusinessesListing = BusinessesListing;