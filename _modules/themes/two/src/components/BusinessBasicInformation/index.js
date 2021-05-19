"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _orderingComponents = require("ordering-components");

var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _configState$configs, _configState$configs$, _theme$images, _theme$images$dummies, _business$reviews, _business$reviews2, _orderState$options;

  var isSkeleton = props.isSkeleton,
      businessState = props.businessState;
  var business = businessState.business,
      loading = businessState.loading;
  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      optimizeImage = _useUtils2$.optimizeImage;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 90,
    width: 90
  }))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetail, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0), " ", t('DELIVERY', 'delivery')), /*#__PURE__*/_react.default.createElement(_BsDot.default, null))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200
  }), !loading ? /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total, /*#__PURE__*/_react.default.createElement(_AiFillStar.default, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "(", business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews.length, " ", t('RATINGS', 'ratings'), ")"), /*#__PURE__*/_react.default.createElement(_BsDot.default, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }), !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperBottom, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryAndMin, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement("div", {
    className: "delivery"
  }, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_FEE', 'Delivery fee'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })))), /*#__PURE__*/_react.default.createElement("div", null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("p", null, t('MINUTES', 'Minutes'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))))), !loading && /*#__PURE__*/_react.default.createElement(_styles.GroupAndSelector, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: configTypes,
    toggle: true
  }))));
};

exports.BusinessBasicInformation = BusinessBasicInformation;