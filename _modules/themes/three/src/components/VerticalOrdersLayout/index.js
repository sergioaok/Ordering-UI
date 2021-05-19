"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalOrdersLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _Buttons = require("../../styles/Buttons");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _Modal = require("../../../../../components/Modal");

var _ReviewOrder = require("../ReviewOrder");

var _Ticket = require("../Ticket");

var _styles = require("./styles");

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

var VerticalOrdersLayout = function VerticalOrdersLayout(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var orders = props.orders,
      pagination = props.pagination,
      onRedirectPage = props.onRedirectPage,
      loadMoreOrders = props.loadMoreOrders,
      getOrderStatus = props.getOrderStatus,
      handleReorder = props.handleReorder,
      reorderLoading = props.reorderLoading,
      orderID = props.orderID;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isReviewed = _useState2[0],
      setIsReviewed = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      orderSelected = _useState4[0],
      setOrderSelected = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      openModal = _useState6[0],
      setOpenModal = _useState6[1];

  var handleOpenReview = function handleOpenReview(order) {
    setOrderSelected(order);
    handleOpenModal('review');
  };

  var handleOpenTicket = function handleOpenTicket(order) {
    setOrderSelected(order);
    handleOpenModal('ticket');
  };

  var handleCloseModal = function handleCloseModal(type) {
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, _defineProperty({}, type, false)));
    setOrderSelected(null);
  };

  var handleOpenModal = function handleOpenModal(type) {
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, _defineProperty({}, type, true)));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    id: "orders-container"
  }, orders.map(function (order) {
    var _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _getOrderStatus;

    return /*#__PURE__*/_react.default.createElement(_styles.SingleCard, {
      key: order.id,
      id: "order-card"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderPastContent, null, ((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.header) && /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
      bgimage: optimizeImage((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.header, 'h_400,c_limit'),
      isClosed: !((_order$business3 = order.business) !== null && _order$business3 !== void 0 && _order$business3.open)
    }, !((_order$business4 = order.business) !== null && _order$business4 !== void 0 && _order$business4.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.name)), /*#__PURE__*/_react.default.createElement(_styles.ReceiptWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return handleOpenTicket(order);
      }
    }, t('SEE_RECEIPT', 'See Receipt'))), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, order.products.map(function (product) {
      return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
        isOrdersView: true,
        disableContentView: true,
        key: product.id,
        product: product
      });
    })), /*#__PURE__*/_react.default.createElement(_styles.ViewOrderButton, {
      name: "view_order",
      onClick: function onClick() {
        return onRedirectPage({
          page: 'order_detail',
          params: {
            orderId: order.uuid
          }
        });
      }
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')))), /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement("p", null, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && !order.review && !isReviewed && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      rectangle: true,
      color: "secundary",
      onClick: function onClick() {
        return handleOpenReview(order);
      }
    }, t('REVIEW_ORDER', 'Review your Order')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      rectangle: true,
      color: "primary",
      onClick: function onClick() {
        return handleReorder(order.id);
      },
      disabled: reorderLoading
    }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
  })), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.WrappButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    rectangle: true,
    color: "primary",
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))), openModal.review && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.review,
    onClose: function onClose() {
      return handleCloseModal('review');
    },
    title: orderSelected ? "".concat(t('WRITE_A_REVIEW', 'Write a Review'), " #").concat(orderSelected === null || orderSelected === void 0 ? void 0 : orderSelected.id) : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: orderSelected,
    closeReviewOrder: function closeReviewOrder() {
      return handleCloseModal('review');
    },
    setIsReviewed: setIsReviewed
  })), openModal.ticket && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    padding: "0",
    open: openModal.ticket,
    onClose: function onClose() {
      return handleCloseModal('ticket');
    }
  }, /*#__PURE__*/_react.default.createElement(_Ticket.Ticket, {
    order: orderSelected
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

exports.VerticalOrdersLayout = VerticalOrdersLayout;