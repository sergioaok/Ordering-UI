"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _order$business3, _order$business4, _theme$images4, _theme$images4$dummie, _order$customer3, _order$customer4, _theme$images5, _theme$images5$dummie, _order$driver3, _props$beforeElements, _props$beforeComponen, _configs$google_maps_, _order$driver4, _order$customer5, _getOrderStatus, _getOrderStatus2, _getOrderStatus3, _getOrderStatus4, _getOrderStatus5, _props$afterComponent, _props$afterElements;

  var googleMapsControls = props.googleMapsControls,
      handleOrderRedirect = props.handleOrderRedirect;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      error = _props$order.error;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];
  var locationsWithoutDriver = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo) || ((_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$dummie = _theme$images5.dummies) === null || _theme$images5$dummie === void 0 ? void 0 : _theme$images5$dummie.customerPhoto)
  })];
  var isShowDriver = (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9;

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
      value: t('ACCEPTED', 'Accepted'),
      slug: 'ACCEPTED',
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MapContainer, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: isShowDriver ? order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.location : order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.location,
    locations: isShowDriver ? locations : locationsWithoutDriver,
    mapControls: googleMapsControls
  }), /*#__PURE__*/_react.default.createElement(_styles.DeliveryDate, null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.percentage
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus3 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus3 === void 0 ? void 0 : _getOrderStatus3.percentage) >= 33.33
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.pending
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus4 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus4 === void 0 ? void 0 : _getOrderStatus4.percentage) >= 66.66
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.accepted
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Step, {
    active: ((_getOrderStatus5 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus5 === void 0 ? void 0 : _getOrderStatus5.percentage) === 100
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.completed
  })))))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 100
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 400
  })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 91
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  })))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleOrderRedirect
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