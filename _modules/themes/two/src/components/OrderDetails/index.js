"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));

var _BsChevronLeft = _interopRequireDefault(require("@meronex/icons/bs/BsChevronLeft"));

var _MdcSilverwareForkKnife = _interopRequireDefault(require("@meronex/icons/mdc/MdcSilverwareForkKnife"));

var _MdHome = _interopRequireDefault(require("@meronex/icons/md/MdHome"));

var _BisCar = _interopRequireDefault(require("@meronex/icons/bi/BisCar"));

var _AiOutlineStar = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineStar"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _NotFoundSource = require("../NotFoundSource");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _Modal = require("../Modal");

var _Messages = require("../Messages");

var _ReviewOrder = require("../ReviewOrder");

var _ProductShare = require("../ProductShare");

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("./styles");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _getOrderStatus, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _getOrderStatus2, _getOrderStatus3, _getOrderStatus4, _getOrderStatus5, _order$business8, _order$products, _order$customer11, _order$summary, _order$summary2, _order$summary3, _order$summary4, _order$summary5, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary6, _order$summary7, _order$summary8, _order$summary9, _order$summary10, _configs$guest_uuid_a, _configs$guest_uuid_m, _order$driver3, _configs$google_maps_, _order$driver4;

  var handleOrderRedirect = props.handleOrderRedirect,
      googleMapsControls = props.googleMapsControls,
      driverLocation = props.driverLocation,
      urlToShare = props.urlToShare,
      messages = props.messages,
      setMessages = props.setMessages,
      readMessages = props.readMessages,
      messagesReadList = props.messagesReadList;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOrderDetail = _useState2[0],
      setIsOrderDetail = _useState2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber,
      parseDate = _useUtils2$.parseDate;

  var _useState3 = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      openMessages = _useState4[0],
      setOpenMessages = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openReview = _useState6[0],
      setOpenReview = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isReviewed = _useState8[0],
      setIsReviewed = _useState8[1];

  var _useState9 = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      unreadAlert = _useState10[0],
      setUnreadAlert = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      openProductShare = _useState12[0],
      setOpenProductShare = _useState12[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      error = _props$order.error;

  var getOrderStatus = function getOrderStatus(s) {
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending'),
      slug: 'PENDING',
      percentage: 33.33
    }, {
      key: 1,
      value: t('COMPLETED', 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('ACCEPTED', 'Accepted'),
      slug: 'ACCEPTED',
      percentage: 66.66
    }, {
      key: 4,
      value: t('ACCEPTED', 'Accepted'),
      slug: 'ACCEPTED',
      percentage: 66.66
    }, {
      key: 5,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED', 'Accepted'),
      slug: 'ACCEPTED',
      percentage: 66.66
    }, {
      key: 8,
      value: t('ACCEPTED', 'Accepted'),
      slug: 'ACCEPTED',
      percentage: 66.66
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 66.66
    }, {
      key: 10,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 11,
      value: t('COMPLETED', 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 12,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();

    if ((order === null || order === void 0 ? void 0 : order.unread_count) > 0) {
      data.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  };

  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;

      return message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;

      return message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };

  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !openProductShare && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, isOrderDetail && /*#__PURE__*/_react.default.createElement(_styles.WrapBack, {
    onClick: function onClick() {
      return setIsOrderDetail(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChevronLeft.default, null), t('ORDER_DETAIL', 'Order Details')), /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: false,
        business: true
      });
    }
  }, t('ORDER_CHAT', 'Order Chat'))), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Order Id: "), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "order-data-section"
  }, /*#__PURE__*/_react.default.createElement("dl", null, /*#__PURE__*/_react.default.createElement("dt", null, t('FROM', 'from'), ":"), /*#__PURE__*/_react.default.createElement("dd", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.address), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.phone, " ", /*#__PURE__*/_react.default.createElement(_BsDot.default, null), " ", order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.cellphone), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email))), /*#__PURE__*/_react.default.createElement("dl", null, /*#__PURE__*/_react.default.createElement("dt", null, t('TO', 'to'), ":"), /*#__PURE__*/_react.default.createElement("dd", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, "\xA0", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.middle, "\xA0", order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.lastname, "\xA0", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.second_lastname), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.address, "\xA0", order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.zipcode), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.cellphone), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.email)))), !isOrderDetail && /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.percentage
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus3 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus3 === void 0 ? void 0 : _getOrderStatus3.percentage) >= 33.33
  }, /*#__PURE__*/_react.default.createElement(_MdcSilverwareForkKnife.default, null))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus4 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus4 === void 0 ? void 0 : _getOrderStatus4.percentage) >= 66.66
  }, /*#__PURE__*/_react.default.createElement(_BisCar.default, null))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus5 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus5 === void 0 ? void 0 : _getOrderStatus5.percentage) === 100
  }, /*#__PURE__*/_react.default.createElement(_MdHome.default, null)))))), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && !order.review && !isReviewed && /*#__PURE__*/_react.default.createElement(_styles.ReviewsAction, {
    onClick: function onClick() {
      return setOpenReview(true);
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('RATE_YOUR_DELIVERY', 'Rate your delivery')), /*#__PURE__*/_react.default.createElement("div", null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", {
    onClick: function onClick() {
      return setIsOrderDetail(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.name)), /*#__PURE__*/_react.default.createElement("p", null, order.products.length, " ", t('ITEM', 'Item')), (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  })))), !isOrderDetail && /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_ADDRESS', 'Delivery Address')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.address)), isOrderDetail && /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.subtotal) || (order === null || order === void 0 ? void 0 : order.subtotal)))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? t('TAX_INCLUDED', 'Tax (included)') : t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat(parseNumber(order === null || order === void 0 ? void 0 : order.tax), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.tax) || (order === null || order === void 0 ? void 0 : order.totalTax)))), ((order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.delivery_price) > 0 || (order === null || order === void 0 ? void 0 : order.deliveryFee) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.delivery_price) || (order === null || order === void 0 ? void 0 : order.deliveryFee)))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ((order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !!!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat(parseNumber(order === null || order === void 0 ? void 0 : order.driver_tip), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.driver_tip) || (order === null || order === void 0 ? void 0 : order.totalDriverTip)))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service Fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat(parseNumber(order === null || order === void 0 ? void 0 : order.service_fee), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.service_fee) || (order === null || order === void 0 ? void 0 : order.serviceFee) || 0))), ((order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.discount) > 0 || (order === null || order === void 0 ? void 0 : order.discount) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat(parseNumber(order === null || order === void 0 ? void 0 : order.offer_rate), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.discount) || (order === null || order === void 0 ? void 0 : order.discount)))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.total) || (order === null || order === void 0 ? void 0 : order.total))))))), parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value) === 1 && (0, _moment.default)().diff((0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime), 'days') <= parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_m = configs.guest_uuid_max_days) === null || _configs$guest_uuid_m === void 0 ? void 0 : _configs$guest_uuid_m.value) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles.ShareOrder, {
    onClick: function onClick() {
      return setOpenProductShare(true);
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.gift,
    width: "40",
    height: "40",
    alt: "gift"
  }), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('SHARE_WITH_FRIENDS', 'Share with friends')))), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null)))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.location,
    locations: locations,
    mapControls: googleMapsControls
  })))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 80
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 170
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 120
  }))))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openMessages.driver || openMessages.business,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    },
    padding: "0",
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages
  })), openReview && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openReview,
    onClose: function onClose() {
      return setOpenReview(false);
    },
    title: order ? "".concat(t('WRITE_A_REVIEW', 'Write a Review'), " #").concat(order === null || order === void 0 ? void 0 : order.id) : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: function closeReviewOrder() {
      return setOpenReview(false);
    },
    setIsReviewed: setIsReviewed
  }))), openProductShare && /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key),
    onCancel: function onCancel() {
      return setOpenProductShare(false);
    }
  }));
};

var OrderDetails = function OrderDetails(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetails, orderDetailsProps);
};

exports.OrderDetails = OrderDetails;