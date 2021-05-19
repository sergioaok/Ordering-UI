"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _Select = require("../../../../../styles/Select");

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _FaTruckPickup = _interopRequireDefault(require("@meronex/icons/fa/FaTruckPickup"));

var _MdcTruckDeliveryOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcTruckDeliveryOutline"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderTypeSelectorHeaderUI = function OrderTypeSelectorHeaderUI(props) {
  var _configState$configs, _configState$configs$;

  var isTabStyle = props.isTabStyle,
      isHome = props.isHome,
      handleChangeOrderType = props.handleChangeOrderType,
      typeSelected = props.typeSelected,
      defaultValue = props.defaultValue,
      orderTypes = props.orderTypes;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var defaultType = configTypes !== null && configTypes !== void 0 && configTypes.includes(typeSelected) ? null : configTypes[0];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, configState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 40
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeSelected !== undefined && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, {
    isTabStyle: isTabStyle
  }, !isTabStyle ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }),
    defaultValue: defaultType || defaultValue || typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }).map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      isHome: isHome,
      key: type.value,
      active: type.value === defaultType || type.value === defaultType || type.value === typeSelected,
      onClick: function onClick() {
        return handleChangeOrderType(type.value);
      }
    }, type.content);
  })))));
};

var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DELIVERY', 'Delivery'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DELIVERY', 'Delivery')))
    }, {
      value: 2,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('PICKUP', 'Pickup'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('PICKUP', 'Pickup')))
    }, {
      value: 3,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('EAT_IN', 'Eat in'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('EAT_IN', 'Eat in')))
    }, {
      value: 4,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('CURBSIDE', 'Curbside'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('CURBSIDE', 'Curbside')))
    }, {
      value: 5,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DRIVE_THRU', 'Drive thru'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DRIVE_THRU', 'Drive thru')))
    }]
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};

exports.OrderTypeSelectorHeader = OrderTypeSelectorHeader;