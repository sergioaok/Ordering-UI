"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _Modal = require("../../../../../components/Modal");

var _MomentContent = require("../../../../../components/MomentContent");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeliveryDetails = function DeliveryDetails() {
  var _orderStatus$options, _orderStatus$options2, _configs$dates_moment, _orderStatus$options3, _orderStatus$options4;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryTimeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('TIME', 'Time')), /*#__PURE__*/_react.default.createElement("span", null, (_orderStatus$options = orderStatus.options) !== null && _orderStatus$options !== void 0 && _orderStatus$options.moment ? parseDate((_orderStatus$options2 = orderStatus.options) === null || _orderStatus$options2 === void 0 ? void 0 : _orderStatus$options2.moment, {
    outputFormat: configs === null || configs === void 0 ? void 0 : (_configs$dates_moment = configs.dates_moment_format) === null || _configs$dates_moment === void 0 ? void 0 : _configs$dates_moment.value
  }) : t('ASAP_ABBREVIATION', 'ASAP'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: orderStatus.loading,
    onClick: function onClick() {
      return setModalOpen(true);
    }
  }, t('SCHEDULE', 'Schedule'))), /*#__PURE__*/_react.default.createElement(_styles.AddressContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement("p", null, orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options3 = orderStatus.options) === null || _orderStatus$options3 === void 0 ? void 0 : (_orderStatus$options4 = _orderStatus$options3.address) === null || _orderStatus$options4 === void 0 ? void 0 : _orderStatus$options4.address)), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, null)));
};

exports.DeliveryDetails = DeliveryDetails;