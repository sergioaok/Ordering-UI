"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompletedOrder = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _Modal = require("../../../../../components/Modal");

var _Buttons = require("../../styles/Buttons");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _ReviewOrder = require("../ReviewOrder");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CompletedOrder = function CompletedOrder(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _order$products, _order$customer, _order$paymethod, _order$paymethod2, _props$afterComponent, _props$afterElements;

  var order = props.order,
      getPayIcon = props.getPayIcon,
      onClose = props.onClose;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openReview = _useState2[0],
      setOpenReview = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isReviewed = _useState4[0],
      setIsReviewed = _useState4[1];

  var getReviewValue = function getReviewValue(review) {
    if (review) {
      return parseInt(((review === null || review === void 0 ? void 0 : review.delivery) + (review === null || review === void 0 ? void 0 : review.package) + (review === null || review === void 0 ? void 0 : review.quality) + (review === null || review === void 0 ? void 0 : review.service)) / 4 / 5 * 100) + '%';
    } else {
      return '0%';
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_ORDER_DELIVERED', 'Your order has been delivered Enjoy it!')), /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.delivered,
    alt: "delivered"
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      isOrderDetail: true
    });
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDeliveryTimeContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER', 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), !(order !== null && order !== void 0 && order.review || isReviewed) && /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, {
    onClick: function onClick() {
      return !(order !== null && order !== void 0 && order.review) && setOpenReview(true);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('REVIEW_ORDER', 'Review your Order')), /*#__PURE__*/_react.default.createElement(_styles.StarRating, null, /*#__PURE__*/_react.default.createElement(_styles.StarRatingUpper, {
    style: {
      width: getReviewValue(order === null || order === void 0 ? void 0 : order.review)
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")), /*#__PURE__*/_react.default.createElement(_styles.StarRatingLower, null, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")))), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_TO', 'Delivery to')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.address)), /*#__PURE__*/_react.default.createElement(_styles.OrderPaymentMethod, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement("div", null, getPayIcon(order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.id), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.name))), /*#__PURE__*/_react.default.createElement(_styles.ActionContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    }
  }, t('COMPLETE', 'Complete')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true
  }, t('ANY_PROBLEMS', 'Did you have any problems?')))), openReview && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openReview,
    onClose: function onClose() {
      return setOpenReview(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: function closeReviewOrder() {
      return setOpenReview(false);
    },
    setIsReviewed: setIsReviewed
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

exports.CompletedOrder = CompletedOrder;