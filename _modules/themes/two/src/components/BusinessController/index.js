"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _utils = require("../../../../../utils");

var _styles = require("./styles");

var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessControllerUI = function BusinessControllerUI(props) {
  var _orderState$options, _business$reviews, _business$reviews2, _business$reviews3;

  var isPickupView = props.isPickupView,
      twoColumnView = props.twoColumnView,
      isFeaturePage = props.isFeaturePage,
      isSkeleton = props.isSkeleton,
      business = props.business,
      getBusinessOffer = props.getBusinessOffer,
      orderState = props.orderState,
      handleClick = props.handleClick;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber,
      optimizeImage = _useUtils2$.optimizeImage;

  var types = ['food', 'laundry', 'alcohol', 'groceries'];

  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      if (business[type]) {
        _types.push(t(type.toUpperCase(), type));
      }
    });
    return _types.join(', ');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
    isSkeleton: isSkeleton,
    pickupView: isPickupView,
    twoColumnView: twoColumnView
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessCard, {
    isSkeleton: isSkeleton,
    onClick: function onClick() {
      return !isSkeleton && handleClick && handleClick(business);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessHero, null, business !== null && business !== void 0 && business.header ? /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    twoColumnView: twoColumnView,
    bgimage: optimizeImage(business === null || business === void 0 ? void 0 : business.header, 'h_400,c_limit'),
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTags, null, /*#__PURE__*/_react.default.createElement("div", null, !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'PreOrder')))), !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoRow, null, business !== null && business !== void 0 && business.name ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoRow, null, business && Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("span", null, getBusinessType()) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }), business && Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "bullet"
  }, (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), !twoColumnView && !isFeaturePage && /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoRow, null, (business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_AiFillStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)) : (business === null || business === void 0 ? void 0 : (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.total) !== 0 && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }), business !== null && business !== void 0 && business.offers ? /*#__PURE__*/_react.default.createElement("div", null, getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) ? /*#__PURE__*/_react.default.createElement("span", null, t('FREE_DELIVEY_OVER', 'Free delivery over'), " ", getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) || parsePrice(0)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0), " ", t('DELIVERY', 'delivery')))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))))));
};

var BusinessController = function BusinessController(props) {
  var AllBusinessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, AllBusinessControllerProps);
};

exports.BusinessController = BusinessController;