"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleSetting = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _MomentContent = require("../MomentContent");

var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));

var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));

var _Modal = require("../../../../../components/Modal");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ScheduleSettingUI = function ScheduleSettingUI(props) {
  var _orderStatus$options2, _props$beforeElements, _props$beforeComponen, _orderStatus$options3, _orderStatus$options4, _configs$format_time, _props$afterComponent, _props$afterElements;

  var title = props.title,
      isRadioButtonStyle = props.isRadioButtonStyle,
      deliveryTime = props.deliveryTime,
      handleAsap = props.handleAsap;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      timeAsapSelected = _useState2[0],
      setTimeAsapSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scheduleSelected = _useState4[0],
      setScheduleSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      modalOpen = _useState6[0],
      setModalOpen = _useState6[1];

  var handleTimeSelect = function handleTimeSelect(type) {
    if (type === 'asap') {
      handleAsap();

      if (scheduleSelected && !timeAsapSelected) {
        setScheduleSelected(false);
      }

      setTimeAsapSelected(true);
    }

    if (type === 'schedule') {
      setModalOpen(true);

      if (timeAsapSelected && !scheduleSelected) {
        setTimeAsapSelected(false);
      }

      setScheduleSelected(true);
    }
  };

  (0, _react.useEffect)(function () {
    var _orderStatus$options;

    if ((_orderStatus$options = orderStatus.options) !== null && _orderStatus$options !== void 0 && _orderStatus$options.moment) {
      setTimeAsapSelected(false);
      setScheduleSelected(true);
    } else {
      setTimeAsapSelected(true);
      setScheduleSelected(false);
    }
  }, [(_orderStatus$options2 = orderStatus.options) === null || _orderStatus$options2 === void 0 ? void 0 : _orderStatus$options2.moment]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), deliveryTime && /*#__PURE__*/_react.default.createElement(_styles.Title, null, deliveryTime)), /*#__PURE__*/_react.default.createElement(_styles.Moment, {
    active: timeAsapSelected,
    onClick: function onClick() {
      return handleTimeSelect('asap');
    },
    isRadioButtonStyle: isRadioButtonStyle
  }, isRadioButtonStyle && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeAsapSelected ? /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), t('RIGHT_NOW', 'Right now')), /*#__PURE__*/_react.default.createElement(_styles.Moment, {
    active: scheduleSelected,
    isRadioButtonStyle: isRadioButtonStyle,
    onClick: function onClick() {
      return handleTimeSelect('schedule');
    }
  }, isRadioButtonStyle && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, scheduleSelected ? /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), (_orderStatus$options3 = orderStatus.options) !== null && _orderStatus$options3 !== void 0 && _orderStatus$options3.moment ? parseDate((_orderStatus$options4 = orderStatus.options) === null || _orderStatus$options4 === void 0 ? void 0 : _orderStatus$options4.moment, {
    outputFormat: (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm'
  }) : t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "50%",
    open: modalOpen,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return setModalOpen(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.MomentContentWrapper, null, /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, {
    onClose: function onClose() {
      return setModalOpen(false);
    }
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var ScheduleSetting = function ScheduleSetting(props) {
  var _configs$max_days_pre;

  var _useConfig3 = (0, _orderingComponents.useConfig)(),
      _useConfig4 = _slicedToArray(_useConfig3, 1),
      configs = _useConfig4[0].configs;

  var limitDays = configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value;
  var currentDate = new Date();
  var time = limitDays > 1 ? currentDate.getTime() + (limitDays - 1) * 24 * 60 * 60 * 1000 : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
  currentDate.setTime(time);
  currentDate.setHours(23);
  currentDate.setMinutes(59);

  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    maxDate: currentDate,
    UIComponent: ScheduleSettingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};

exports.ScheduleSetting = ScheduleSetting;