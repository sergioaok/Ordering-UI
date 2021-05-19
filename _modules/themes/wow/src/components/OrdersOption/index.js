"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOption = exports.OrdersOptionUI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Buttons = require("../../styles/Buttons");

var _ActiveOrdersLayout = require("../ActiveOrdersLayout");

var _PreviousOrdersLayout = require("../PreviousOrdersLayout");

var _PreOrdersLayout = require("../PreOrdersLayout");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersOptionUI = function OrdersOptionUI(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var isProfile = props.isProfile,
      activeOrders = props.activeOrders,
      previousOrders = props.previousOrders,
      preOrders = props.preOrders,
      orderList = props.orderList,
      pagination = props.pagination,
      isBusinessesPage = props.isBusinessesPage,
      loadMoreOrders = props.loadMoreOrders,
      customArray = props.customArray,
      onRedirectPage = props.onRedirectPage,
      businessesIds = props.businessesIds,
      handleOrdersTotal = props.handleOrdersTotal,
      handleOrderDetails = props.handleOrderDetails,
      handleOrderHelp = props.handleOrderHelp;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      reorder = _useOrder2[1].reorder;

  var loading = orderList.loading,
      values = orderList.orders;
  var orders = customArray || values;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      ordersSorted = _useState2[0],
      setOrdersSorted = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      reorderLoading = _useState4[0],
      setReorderLoading = _useState4[1];

  var imageFails = activeOrders ? (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.emptyActiveOrders : preOrders ? (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.emptyPreOrders : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.emptyPastOrders;

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var getOrderStatus = function getOrderStatus(s) {
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED', 'Completed')
    }, {
      key: 2,
      value: t('REJECTED', 'Rejected')
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', 'Driver in business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by Driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleReorder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(orderId) {
      var _yield$reorder, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setReorderLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return reorder(orderId);

            case 4:
              _yield$reorder = _context.sent;
              error = _yield$reorder.error;
              result = _yield$reorder.result;

              if (!error) {
                onRedirectPage && onRedirectPage({
                  page: 'checkout',
                  params: {
                    cartUuid: result.uuid
                  }
                });
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setReorderLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function handleReorder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var ordersSorted = orders.sort(function (a, b) {
      if (activeOrders) {
        return new Date(b.created_at) - new Date(a.created_at);
      }

      return new Date(a.created_at) - new Date(b.created_at);
    });
    setOrdersSorted(ordersSorted);
  }, [orders]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    handleOrdersTotal && handleOrdersTotal(pagination === null || pagination === void 0 ? void 0 : pagination.total);
  }, [loading, pagination]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && ordersSorted.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    image: imageFails
  }, /*#__PURE__*/_react.default.createElement(_styles.NotFoundContent, null, /*#__PURE__*/_react.default.createElement("h2", null, t('NO_ORDERS_YET', 'It seems you have no orders yet')), !preOrders && /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS_APPEAR_HERE', 'The orders you make will appear here')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, t('MAKE_FIRST_ORDER', 'Make your first order')))), activeOrders && /*#__PURE__*/_react.default.createElement(_ActiveOrdersLayout.ActiveOrdersLayout, {
    isProfile: isProfile,
    isSkeleton: loading,
    businessesIds: businessesIds,
    orders: ordersSorted,
    pagination: pagination,
    handleOrderDetails: handleOrderDetails,
    loadMoreOrders: loadMoreOrders,
    isBusinessesPage: isBusinessesPage,
    customArray: customArray,
    getOrderStatus: getOrderStatus,
    handleOrderHelp: handleOrderHelp
  }), previousOrders && /*#__PURE__*/_react.default.createElement(_PreviousOrdersLayout.PreviousOrdersLayout, {
    isProfile: isProfile,
    isSkeleton: loading,
    businessesIds: businessesIds,
    orders: ordersSorted,
    pagination: pagination,
    onRedirectPage: onRedirectPage,
    loadMoreOrders: loadMoreOrders,
    isBusinessesPage: isBusinessesPage,
    reorderLoading: reorderLoading,
    customArray: customArray,
    getOrderStatus: getOrderStatus,
    handleReorder: handleReorder,
    handleOrderDetails: handleOrderDetails,
    handleOrderHelp: handleOrderHelp
  }), preOrders && /*#__PURE__*/_react.default.createElement(_PreOrdersLayout.PreOrdersLayout, {
    isProfile: isProfile,
    isSkeleton: loading,
    businessesIds: businessesIds,
    orders: ordersSorted,
    pagination: pagination,
    onRedirectPage: onRedirectPage,
    loadMoreOrders: loadMoreOrders,
    isBusinessesPage: isBusinessesPage,
    reorderLoading: reorderLoading,
    customArray: customArray,
    getOrderStatus: getOrderStatus,
    handleReorder: handleReorder,
    handleOrderDetails: handleOrderDetails,
    handleOrderHelp: handleOrderHelp
  })), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.OrdersOptionUI = OrdersOptionUI;

var OrdersOption = function OrdersOption(props) {
  var orderListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders ? [0, 3, 4, 7, 8, 9] : props.preOrders ? [13] : [1, 2, 5, 6, 10, 11, 12],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderListProps);
};

exports.OrdersOption = OrdersOption;