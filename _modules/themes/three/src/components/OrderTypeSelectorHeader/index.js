"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _FaTruckPickup = _interopRequireDefault(require("@meronex/icons/fa/FaTruckPickup"));

var _MdcTruckDeliveryOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcTruckDeliveryOutline"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _Select = require("../../styles/Select");

var _Modal = require("../../../../../components/Modal");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var isButtonStyle = props.isButtonStyle,
      handleChangeOrderType = props.handleChangeOrderType,
      typeSelected = props.typeSelected,
      defaultValue = props.defaultValue,
      configTypes = props.configTypes,
      orderTypes = props.orderTypes;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var defaultType = configTypes !== null && configTypes !== void 0 && configTypes.includes(typeSelected) ? null : configTypes === null || configTypes === void 0 ? void 0 : configTypes[0];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      orderType = _useState4[0],
      setOrderType = _useState4[1];

  var handleSelectOrderType = function handleSelectOrderType(_orderType) {
    if (typeSelected === (_orderType === null || _orderType === void 0 ? void 0 : _orderType.value)) return;
    setOrderType(_orderType);
    setModalOpen(true);
  };

  var handleConfirm = function handleConfirm() {
    handleChangeOrderType(orderType === null || orderType === void 0 ? void 0 : orderType.value);
    setModalOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isButtonStyle ? /*#__PURE__*/_react.default.createElement(_styles.Container, null, orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }).map(function (orderType) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "".concat(typeSelected === orderType.value ? 'primary' : 'secundary'),
      key: orderType.value,
      disabled: orderState.loading,
      onClick: function onClick() {
        return handleSelectOrderType(orderType);
      }
    }, orderType.content);
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeSelected !== undefined && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }),
    defaultValue: defaultType || defaultValue || typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalHeader, null, t('SWITCH_TO', 'Switch to'), " ", orderType === null || orderType === void 0 ? void 0 : orderType.content), /*#__PURE__*/_react.default.createElement("p", null, t('PRICE_AND_MENU_ITEMS_MAY_VARY', 'Prices and menu items may vary')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    rectangle: true,
    disabled: orderState.loading,
    onClick: function onClick() {
      return handleConfirm();
    }
  }, t('CONFIRM', 'Confirm')))));
};

var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

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