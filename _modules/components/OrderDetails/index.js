"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _FiPhone = _interopRequireDefault(require("@meronex/icons/fi/FiPhone"));

var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));

var _HiOutlineChat = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineChat"));

var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));

var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));

var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _Modal = require("../Modal");

var _Messages = require("../Messages");

var _ReviewOrder = require("../ReviewOrder");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$driver, _order$business, _order$customer, _order$business2, _order$business3, _order$business4, _getOrderStatus, _getOrderStatus2, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$driver2, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$products;

  var handleBusinessRedirect = props.handleBusinessRedirect,
      handleOrderRedirect = props.handleOrderRedirect,
      googleMapsControls = props.googleMapsControls,
      driverLocation = props.driverLocation;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openMessages = _useState2[0],
      setOpenMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openReview = _useState4[0],
      setOpenReview = _useState4[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber;

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReviewed = _useState6[0],
      setIsReviewed = _useState6[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      businessData = _props$order.businessData,
      error = _props$order.error;

  var getOrderStatus = function getOrderStatus(s) {
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending'),
      slug: 'PENDING',
      percentage: 25
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
      value: t('DRIVER_IN_BUSINESS', 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var getImage = function getImage(status) {
    try {
      var _theme$images, _theme$images$order;

      return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$order = _theme$images.order) === null || _theme$images$order === void 0 ? void 0 : _theme$images$order["status".concat(status)];
    } catch (error) {
      return 'https://picsum.photos/75';
    }
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var locations = [_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), _objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), _objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location)];
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderImg, null, /*#__PURE__*/_react.default.createElement("img", {
    src: businessData === null || businessData === void 0 ? void 0 : businessData.header,
    alt: "business-header",
    height: "200px",
    width: "355px"
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, {
    className: "order-header"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderText, {
    column: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_MESSAGE_RECEIVED', 'Your order has been received')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_MESSAGE_TEXT', 'Once business accepts your order, we will send you and email, thank you!'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.address))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, order.driver && order.driver.phone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    onClick: function onClick() {
      return handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  })), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, {
    onClick: function onClick() {
      return setOpenMessages({
        driver: false,
        business: true
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER', 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, t('DATE_TIME_FOR_ORDER', 'Date and time for your order')), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order === null || order === void 0 ? void 0 : order.delivery_datetime), /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value), /*#__PURE__*/_react.default.createElement(_styles.StatusImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: getImage((order === null || order === void 0 ? void 0 : order.status) || 0),
    alt: "status",
    width: "70px",
    height: "70px"
  })))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('CUSTOMER', 'Customer')), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.name, " ", order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.lastname), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.address))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    location: order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location,
    locations: locations,
    mapControls: googleMapsControls
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_DRIVER', 'Your Driver')), /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, (order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.photo) ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo,
    width: "70",
    height: "70"
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.name, " ", order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.lastname), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER', 'Driver')))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, order.driver && order.driver.phone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, {
    onClick: function onClick() {
      return setOpenMessages({
        driver: true,
        business: false
      });
    }
  })))))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_ORDER', 'Your Order')), /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.subtotal))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.tax), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.totalTax))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.deliveryFee))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.driver_tip))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service Fee'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.service_fee), "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : order.serviceFee) || 0))), (order === null || order === void 0 ? void 0 : order.discount) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), " (", parseNumber(order === null || order === void 0 ? void 0 : order.discount_rate), "%)") : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.discount))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.total)))))), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && !order.review && !isReviewed && /*#__PURE__*/_react.default.createElement(_styles.ReviewsAction, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setOpenReview(true);
    }
  }, t('REVIEW_ORDER', 'Review your Order'))), /*#__PURE__*/_react.default.createElement(_styles.FootActions, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, t('MY_ORDERS', 'My Orders'), /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, null))))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 80
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 300
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  })))), error && error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: error[0].message || error[0],
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleOrderRedirect
  }), !loading && !order && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleOrderRedirect
  }), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    driver: openMessages.driver
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
  })));
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