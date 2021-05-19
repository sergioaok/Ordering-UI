"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalOrdersLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

var _AutoScroll = require("../AutoScroll");

var _Tabs = require("../../styles/Tabs");

var _Buttons = require("../../styles/Buttons");

var _utils = require("../../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HorizontalOrdersLayout = function HorizontalOrdersLayout(props) {
  var orders = props.orders,
      pagination = props.pagination,
      onOrderClick = props.onOrderClick,
      loadMoreOrders = props.loadMoreOrders,
      getOrderStatus = props.getOrderStatus,
      isBusinessList = props.isBusinessList,
      handleReorder = props.handleReorder;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate;

  var Orders = function Orders() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.map(function (order) {
      var _configs$google_maps_, _order$business, _order$business2, _theme$images, _theme$images$dummies, _order$business3, _configs$google_maps_2, _order$business4, _theme$images2, _theme$images2$dummie, _order$business5, _theme$images3, _theme$images3$dummie, _order$business6, _order$summary, _getOrderStatus;

      return /*#__PURE__*/_react.default.createElement(_styles.Card, {
        key: order.id,
        id: "order-card",
        isBusinessList: isBusinessList,
        onClick: function onClick() {
          return isBusinessList && onOrderClick({
            page: 'order_detail',
            params: {
              orderId: order === null || order === void 0 ? void 0 : order.uuid
            }
          });
        }
      }, ((configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value) || isBusinessList) && /*#__PURE__*/_react.default.createElement(_styles.Map, {
        isBusinessList: isBusinessList
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: isBusinessList ? (order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.header) || (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo) : (0, _utils.getGoogleMapImage)(order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.location, configs === null || configs === void 0 ? void 0 : (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value),
        alt: isBusinessList ? 'business_header' : 'google-maps-img',
        height: isBusinessList ? '200px' : '100px',
        width: "400px"
      })), /*#__PURE__*/_react.default.createElement(_styles.Content, null, (((_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)) && !isBusinessList && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
        src: ((_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo),
        alt: "business-logo",
        width: "75px",
        height: "75px"
      })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, {
        activeOrders: true
      }, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.name), /*#__PURE__*/_react.default.createElement("p", {
        name: "order_number"
      }, t('ORDER_NUMBER', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      }))), /*#__PURE__*/_react.default.createElement(_styles.Price, {
        isBusinessList: isBusinessList
      }, /*#__PURE__*/_react.default.createElement("h2", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || (order === null || order === void 0 ? void 0 : order.total))), /*#__PURE__*/_react.default.createElement("p", null, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), isBusinessList && /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        color: "primary",
        onClick: function onClick() {
          return handleReorder(order.id);
        }
      }, t('REORDER', 'Reorder'))))), !isBusinessList && /*#__PURE__*/_react.default.createElement(_styles.OpenOrder, {
        isBusinessList: isBusinessList
      }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        color: "primary",
        onClick: function onClick() {
          return onOrderClick({
            page: 'order_detail',
            params: {
              orderId: order === null || order === void 0 ? void 0 : order.uuid
            }
          });
        }
      }, t('OPEN_ORDER', 'Open order'))));
    }), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.Card, {
      flex: true,
      nobg: true
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      className: "load-orders",
      bgtransparent: true,
      color: "primary",
      outline: true,
      onClick: loadMoreOrders
    }, t('LOAD_MORE_ORDERS', 'Load more orders'))));
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    activeOrders: true,
    ordersLength: (orders === null || orders === void 0 ? void 0 : orders.length) <= 1,
    id: "orders-container",
    isBusinessList: isBusinessList
  }, !isBusinessList ? /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, /*#__PURE__*/_react.default.createElement(Orders, null))) : /*#__PURE__*/_react.default.createElement(Orders, null));
};

exports.HorizontalOrdersLayout = HorizontalOrdersLayout;