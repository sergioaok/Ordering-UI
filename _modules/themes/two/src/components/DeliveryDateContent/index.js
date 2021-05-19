"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDateContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

require("react-calendar/dist/Calendar.css");

var _styles = require("./styles");

var _Select = require("../../styles/Select");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeliveryDateContent = function DeliveryDateContent(props) {
  var timeSelected = props.timeSelected,
      dateSelected = props.dateSelected,
      handleChangeDate = props.handleChangeDate,
      handleChangeTime = props.handleChangeTime;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(new Date(dateSelected)),
      _useState2 = _slicedToArray(_useState, 2),
      dateValue = _useState2[0],
      onDateValueChange = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      hour = _useState4[0],
      setHour = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      minute = _useState6[0],
      setMinute = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      AP = _useState8[0],
      setAP = _useState8[1];

  var hoursOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "00")
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "01")
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "02")
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "03")
  }, {
    value: 4,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "04")
  }, {
    value: 5,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "05")
  }, {
    value: 6,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "06")
  }, {
    value: 7,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "07")
  }, {
    value: 8,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "08")
  }, {
    value: 9,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "09")
  }, {
    value: 10,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "10")
  }, {
    value: 11,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "11")
  }];
  var minsOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "00")
  }, {
    value: 15,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "15")
  }, {
    value: 30,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "30")
  }, {
    value: 45,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "45")
  }];
  var morningAfterOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('AM', 'AM'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PM', 'PM'))
  }];
  (0, _react.useEffect)(function () {
    if (timeSelected === null) return;

    var _hour = parseInt(timeSelected.split(':')[0]);

    var _min = parseInt(timeSelected.split(':')[1]);

    setHour(_hour < 12 ? _hour : _hour - 12);
    setMinute(_min);
  }, [timeSelected]);

  var handleSaveDate = function handleSaveDate() {
    var deliveryTime = AP === 0 ? "".concat(hour, ":").concat(minute) : "".concat(hour + 12, ":").concat(minute);
    handleChangeTime(deliveryTime);
  };

  (0, _react.useEffect)(function () {
    var deliveryDate = dateValue.toLocaleDateString().split('/');
    handleChangeDate("".concat(deliveryDate[2], "-").concat(deliveryDate[0], "-").concat(deliveryDate[1]));
  }, [dateValue]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapCalendar, null, /*#__PURE__*/_react.default.createElement(_reactCalendar.default, {
    onChange: onDateValueChange,
    minDate: new Date(),
    value: dateValue,
    calendarType: "US"
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapTimeSelect, null, /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_TIME', 'Delivery Time')), /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContent, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: hour,
    options: hoursOptions,
    onChange: function onChange(hour) {
      return setHour(hour);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: minute,
    options: minsOptions,
    onChange: function onChange(min) {
      return setMinute(min);
    }
  }), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: AP,
    options: morningAfterOptions,
    onChange: function onChange(ap) {
      return setAP(ap);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRounded: true,
    onClick: function onClick() {
      return handleSaveDate();
    }
  }, t('SAVE_DATE', 'Save Date')));
};

exports.DeliveryDateContent = DeliveryDateContent;