"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = exports.OrderDetailsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = require("styled-components");

var _FaPhoneAlt = _interopRequireDefault(require("@meronex/icons/fa/FaPhoneAlt"));

var _BisMessageRounded = _interopRequireDefault(require("@meronex/icons/bi/BisMessageRounded"));

var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));

var _BisCheckCircle = _interopRequireDefault(require("@meronex/icons/bi/BisCheckCircle"));

var _MdcCheckboxBlankCircleOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcCheckboxBlankCircleOutline"));

var _IosCash = _interopRequireDefault(require("@meronex/icons/ios/IosCash"));

var _IosCard = _interopRequireDefault(require("@meronex/icons/ios/IosCard"));

var _FaStripe = _interopRequireDefault(require("@meronex/icons/fa/FaStripe"));

var _FaCcStripe = _interopRequireDefault(require("@meronex/icons/fa/FaCcStripe"));

var _FaStripeS = _interopRequireDefault(require("@meronex/icons/fa/FaStripeS"));

var _GrStripe = _interopRequireDefault(require("@meronex/icons/gr/GrStripe"));

var _EnPaypal = _interopRequireDefault(require("@meronex/icons/en/EnPaypal"));

var _orderingComponents = require("ordering-components");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Modal = require("../../../../../components/Modal");

var _Messages = require("../../../../../components/Messages");

var _Buttons = require("../../styles/Buttons");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _CompletedOrder = require("../CompletedOrder");

var _PreorderConfirm = require("../PreorderConfirm");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _props$beforeElements, _props$beforeComponen, _order$driver3, _configs$google_maps_, _order$driver4, _order$business5, _theme$images4, _theme$images4$dummie, _order$business6, _order$business7, _order$business8, _order$products, _order$customer3, _order$paymethod, _order$paymethod2, _props$afterComponent, _props$afterElements;

  var googleMapsControls = props.googleMapsControls,
      driverLocation = props.driverLocation,
      messages = props.messages,
      setMessages = props.setMessages,
      readMessages = props.readMessages,
      messagesReadList = props.messagesReadList,
      onClose = props.onClose,
      handleOrdersOption = props.handleOrdersOption;
  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      error = _props$order.error;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openMessages = _useState2[0],
      setOpenMessages = _useState2[1];

  var _useState3 = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      unreadAlert = _useState4[0],
      setUnreadAlert = _useState4[1];

  var _useState5 = (0, _react.useState)('pending'),
      _useState6 = _slicedToArray(_useState5, 2),
      orderStatus = _useState6[0],
      setOrderStatus = _useState6[1];

  var _useState7 = (0, _react.useState)({
    completed: false,
    preorder: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      openModal = _useState8[0],
      setOpenModal = _useState8[1];

  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];

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

  var getEstimatedTime = function getEstimatedTime(order) {
    var deliveryDateTime = order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
      outputFormat: 'YYYY-MM-DD HH:mm:ss'
    }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false,
      outputFormat: 'YYYY-MM-DD HH:mm:ss'
    });

    var _deliveryMin;

    if ((order === null || order === void 0 ? void 0 : order.delivery_type) === 1) {
      var _order$business3;

      _deliveryMin = order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.delivery_time;
    } else {
      var _order$business4;

      _deliveryMin = order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.pickup_time;
    }

    var deliveryMin;

    if (!_deliveryMin) {
      deliveryMin = 0;
    } else {
      var _deliveryMin$split = _deliveryMin.split(':'),
          _deliveryMin$split2 = _slicedToArray(_deliveryMin$split, 2),
          hour = _deliveryMin$split2[0],
          minute = _deliveryMin$split2[1];

      deliveryMin = parseInt(hour, 10) * 60 + parseInt(minute, 10);
    }

    var preparedIn = order !== null && order !== void 0 && order.prepared_in ? order === null || order === void 0 ? void 0 : order.prepared_in : 0;
    var deliverdIn = order !== null && order !== void 0 && order.deliverd_in ? order === null || order === void 0 ? void 0 : order.deliverd_in : 0;
    var totalMin = deliveryMin + preparedIn + deliverdIn;
    var result = (0, _moment.default)(deliveryDateTime).add(totalMin, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    return parseDate(result, {
      utc: false
    });
  };

  var getPayIcon = function getPayIcon(method) {
    switch (method) {
      case 1:
        return /*#__PURE__*/_react.default.createElement(_IosCash.default, null);

      case 22:
        return /*#__PURE__*/_react.default.createElement(_FaStripe.default, null);

      case 28:
        return /*#__PURE__*/_react.default.createElement(_FaCcStripe.default, null);

      case 31:
        return /*#__PURE__*/_react.default.createElement(_FaStripeS.default, null);

      case 32:
        return /*#__PURE__*/_react.default.createElement(_GrStripe.default, null);

      case 3:
        return /*#__PURE__*/_react.default.createElement(_EnPaypal.default, null);

      default:
        return /*#__PURE__*/_react.default.createElement(_IosCard.default, null);
    }
  };

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
  (0, _react.useEffect)(function () {
    if (loading) return;

    if ((order === null || order === void 0 ? void 0 : order.status) === 0 || (order === null || order === void 0 ? void 0 : order.status) === 13) {
      setOrderStatus('pending');
    } else if ([3, 4, 7, 8, 9, 14, 18, 19, 20, 21].includes(order === null || order === void 0 ? void 0 : order.status)) {
      setOrderStatus('inProgress');
    } else if ([1, 11, 15].includes(order === null || order === void 0 ? void 0 : order.status)) {
      setOrderStatus('completed');
    } else {
      setOrderStatus('rejected');
    }
  }, [order === null || order === void 0 ? void 0 : order.status]);
  (0, _react.useEffect)(function () {
    if ([1, 11, 15].includes(order === null || order === void 0 ? void 0 : order.status)) {
      handleOrdersOption('previousOrders');
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        completed: true
      }));
    }

    if ((order === null || order === void 0 ? void 0 : order.status) === 13) {
      handleOrdersOption('preOrders');
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        preorder: true
      }));
    }
  }, [order === null || order === void 0 ? void 0 : order.status]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.location,
    locations: locations,
    mapControls: googleMapsControls
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderDetailContent, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContent, null, /*#__PURE__*/_react.default.createElement(_styles.EstimatedTime, null, /*#__PURE__*/_react.default.createElement("p", null, t('ESTIMATED_TIME', 'Estimated delivery time')), /*#__PURE__*/_react.default.createElement("p", null, getEstimatedTime(order))), /*#__PURE__*/_react.default.createElement(_styles.OrderProgressBar, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressItem, {
    active: orderStatus !== 'rejected'
  }), /*#__PURE__*/_react.default.createElement(_styles.ProgressItem, {
    active: orderStatus !== 'rejected' && (orderStatus === 'inPrgress' || orderStatus === 'completed')
  }), /*#__PURE__*/_react.default.createElement(_styles.ProgressItem, {
    active: orderStatus !== 'rejected' && orderStatus === 'completed'
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, orderStatus === 'rejected' ? /*#__PURE__*/_react.default.createElement(_styles.StatusItem, {
    active: true
  }, /*#__PURE__*/_react.default.createElement(_BisCheckCircle.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('REJECTED', 'Rejected'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StatusItem, {
    active: true
  }, /*#__PURE__*/_react.default.createElement(_BisCheckCircle.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('PENDING', 'Pending'))), /*#__PURE__*/_react.default.createElement(_styles.Line, null), /*#__PURE__*/_react.default.createElement(_styles.StatusItem, {
    active: orderStatus === 'inPrgress' || orderStatus === 'completed'
  }, orderStatus === 'inPrgress' || orderStatus === 'completed' ? /*#__PURE__*/_react.default.createElement(_BisCheckCircle.default, null) : /*#__PURE__*/_react.default.createElement(_MdcCheckboxBlankCircleOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('IN_PROGRESS', 'In progress'))), /*#__PURE__*/_react.default.createElement(_styles.Line, null), /*#__PURE__*/_react.default.createElement(_styles.StatusItem, {
    active: orderStatus === 'completed'
  }, orderStatus === 'completed' ? /*#__PURE__*/_react.default.createElement(_BisCheckCircle.default, null) : /*#__PURE__*/_react.default.createElement(_MdcCheckboxBlankCircleOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('COMPLETED', 'Completed'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: (order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address))), /*#__PURE__*/_react.default.createElement(_styles.BusinessAction, null, (order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.phone) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FaPhoneAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: false,
        business: true
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_BisMessageRounded.default, null))))), /*#__PURE__*/_react.default.createElement(_styles.RightContent, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      isOrderDetail: true
    });
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDeliveryTimeContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER', 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_TO', 'Delivery to')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.address)), /*#__PURE__*/_react.default.createElement(_styles.OrderPaymentMethod, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement("div", null, getPayIcon(order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.id), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.name))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return onClose();
    }
  }, t('CANCEL', 'Cancel'))), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
  })))), loading && !error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDetailContent, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    count: 3,
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80
  })), /*#__PURE__*/_react.default.createElement(_styles.RightContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  })))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: onClose
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.completed,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        completed: false
      }));
    },
    padding: "0",
    width: "55%"
  }, /*#__PURE__*/_react.default.createElement(_CompletedOrder.CompletedOrder, {
    order: order,
    getPayIcon: getPayIcon,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        completed: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.preorder,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        preorder: false
      }));
    },
    width: "55%"
  }, /*#__PURE__*/_react.default.createElement(_PreorderConfirm.PreorderConfirm, {
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        preorder: false
      }));
    }
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

exports.OrderDetailsUI = OrderDetailsUI;

var OrderDetails = function OrderDetails(props) {
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));

  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
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