"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDetailsContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));

var _GrClock = _interopRequireDefault(require("@meronex/icons/gr/GrClock"));

var _Buttons = require("../../styles/Buttons");

var _AddressForm = require("../AddressForm");

var _AddressList = require("../AddressList");

var _MomentContent = require("../MomentContent");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeliveryDetailsContent = function DeliveryDetailsContent(props) {
  var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options$a3, _orderState$options2, _orderState$options3, _configs$format_time;

  var auth = props.auth,
      addressState = props.addressState,
      onClose = props.onClose;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openAddressForm = _useState2[0],
      setOpenAddressForm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openMomentForm = _useState4[0],
      setOpenMomentForm = _useState4[1];

  var handleCloseMoment = function handleCloseMoment() {
    onClose && onClose();
    setOpenMomentForm(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !openAddressForm && !openMomentForm && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement(_styles.AddressContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperAddress, null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.address) === null || _orderState$options$a2 === void 0 ? void 0 : (_orderState$options$a3 = _orderState$options$a2.split(',')) === null || _orderState$options$a3 === void 0 ? void 0 : _orderState$options$a3[0]), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setOpenAddressForm(true);
    }
  }, t('CHANGE', 'Change'))), /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapScheduleTime, null, /*#__PURE__*/_react.default.createElement(_GrClock.default, null), (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.moment ? parseDate((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment, {
    outputFormat: (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm'
  }) : t('ASAP_ABBREVIATION', 'ASAP')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setOpenMomentForm(true);
    }
  }, t('CHANGE', 'Change'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose && onClose();
    }
  }, t('DONE', 'Done'))), openAddressForm && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DELIVERY_TO', 'Delivery To')), auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isPopover: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onClosePopover: props.onClose,
    onDone: function onDone() {
      return setOpenAddressForm(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: addressState || {},
    onClose: function onClose() {
      return setOpenAddressForm(false);
    },
    onCancel: function onCancel() {
      return setOpenAddressForm(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setOpenAddressForm(false);
    }
  })), openMomentForm && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, {
    onClose: function onClose() {
      return handleCloseMoment();
    }
  }));
};

exports.DeliveryDetailsContent = DeliveryDetailsContent;