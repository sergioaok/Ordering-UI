"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalOrdersLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _Buttons = require("../../styles/Buttons");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VerticalOrdersLayout = function VerticalOrdersLayout(props) {
  var orders = props.orders,
      pagination = props.pagination,
      onOrderClick = props.onOrderClick,
      loadMoreOrders = props.loadMoreOrders,
      handleReorder = props.handleReorder,
      reorderLoading = props.reorderLoading,
      orderID = props.orderID;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    id: "orders-container"
  }, orders.map(function (order) {
    var _order$business;

    return /*#__PURE__*/_react.default.createElement(_styles.SingleCard, {
      key: order.id,
      id: "order-card"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderPastContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name)), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERD', 'Delivered'), ": "), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(order === null || order === void 0 ? void 0 : order.total))), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCTS_SELECTED', 'Products selected')), /*#__PURE__*/_react.default.createElement(_styles.WrapProducts, null, order.products.map(function (product) {
      return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
        key: product.id,
        product: product
      });
    })))), /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleReorder(order.id);
      },
      disabled: reorderLoading
    }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "secondary",
      onClick: function onClick() {
        return onOrderClick({
          page: 'order_detail',
          params: {
            orderId: order.uuid
          }
        });
      }
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order'))));
  })), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.WrappButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    bgtransparent: true,
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))));
};

exports.VerticalOrdersLayout = VerticalOrdersLayout;