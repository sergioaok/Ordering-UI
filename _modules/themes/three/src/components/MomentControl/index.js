"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Select = require("../../styles/Select");

var _orderingComponents = require("ordering-components");

var _Confirm = require("../../../../../components/Confirm");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

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

var MomentControlUI = function MomentControlUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var datesList = props.datesList,
      hoursList = props.hoursList,
      dateSelected = props.dateSelected,
      timeSelected = props.timeSelected,
      handleAsap = props.handleAsap,
      handleChangeDate = props.handleChangeDate,
      handleChangeTime = props.handleChangeTime,
      onClose = props.onClose;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseTime = _useUtils2[0].parseTime;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dateListOptions = _useState2[0],
      setDateListOptions = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      hoursListOptions = _useState4[0],
      setHoursListOptions = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var handleDeliveryNow = function handleDeliveryNow() {
    handleAsap();
    onClose && onClose();
  };

  var handleSchedule = function handleSchedule() {
    if (timeSelected) {
      onClose && onClose();
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_A_TIME', 'Please select a time')
      });
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    var _dateListOptions = datesList.slice(0, 6).map(function (date) {
      var dateParts = date.split('-');

      var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

      var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7));

      var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();

      return {
        value: date,
        content: /*#__PURE__*/_react.default.createElement("span", null, dayName, " ", dayNumber)
      };
    });

    setDateListOptions(_dateListOptions);

    var _hoursListOptions = hoursList.map(function (hour, i) {
      var _configs$format_time;

      return {
        value: hour.startTime,
        content: (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
          outputFormat: 'hh:mma'
        }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
          outputFormat: 'HH:mm'
        })
      };
    });

    setHoursListOptions(_hoursListOptions);
  }, [datesList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "moment_control"
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('CHOOSE_A_HOUR', 'Choose a hour')), /*#__PURE__*/_react.default.createElement(_styles.Days, {
    name: "days"
  }, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: dateListOptions,
    defaultValue: dateSelected,
    onChange: function onChange(date) {
      return handleChangeDate(date);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Hours, {
    name: "hours"
  }, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: hoursListOptions,
    defaultValue: timeSelected,
    placeholder: t('SELECT_A_TIME', 'select a time'),
    onChange: function onChange(hour) {
      return handleChangeTime(hour);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "button",
    disabled: orderState.loading,
    onClick: function onClick() {
      return handleSchedule();
    }
  }, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    type: "button",
    disabled: orderState.loading,
    onClick: function onClick() {
      return handleDeliveryNow();
    }
  }, t('DELIVERY_NOW', 'Delivery Now'))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('TIME', 'Time'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

var MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};

exports.MomentControl = MomentControl;