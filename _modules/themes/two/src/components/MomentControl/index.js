"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _orderingComponents = require("ordering-components");

var _BsPencil = _interopRequireDefault(require("@meronex/icons/bs/BsPencil"));

var _SuBackward = _interopRequireDefault(require("@meronex/icons/su/SuBackward"));

var _DeliveryDateContent = require("../DeliveryDateContent");

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

var MomentControlUI = function MomentControlUI(props) {
  var isAsap = props.isAsap,
      datesList = props.datesList,
      hoursList = props.hoursList,
      dateSelected = props.dateSelected,
      timeSelected = props.timeSelected,
      handleAsap = props.handleAsap,
      handleChangeDate = props.handleChangeDate,
      handleChangeTime = props.handleChangeTime;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseTime = _useUtils2[0].parseTime;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(isAsap),
      _useState2 = _slicedToArray(_useState, 2),
      isAsapSelected = _useState2[0],
      setIsAsapSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSchedule = _useState4[0],
      setIsSchedule = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      editDeliveryDateModalOpen = _useState6[0],
      setEditDeliveryDateModalOpen = _useState6[1];

  var handleSelectAsap = function handleSelectAsap() {
    handleAsap();
    setIsSchedule(false);
    setIsAsapSelected(true);
  };

  var handleIsSchedule = function handleIsSchedule() {
    setIsAsapSelected(false);
    setIsSchedule(true);
  };

  (0, _react.useEffect)(function () {
    setIsAsapSelected(isAsap);
    setIsSchedule(!isAsap);
  }, [isAsap]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "moment_control"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setEditDeliveryDateModalOpen(!editDeliveryDateModalOpen);
    }
  }, editDeliveryDateModalOpen ? /*#__PURE__*/_react.default.createElement(_SuBackward.default, null) : /*#__PURE__*/_react.default.createElement(_BsPencil.default, null))), !editDeliveryDateModalOpen ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Days, {
    name: "days"
  }, datesList.slice(0, 6).map(function (date) {
    var dateParts = date.split('-');

    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 3).toUpperCase();

    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();

    return /*#__PURE__*/_react.default.createElement(_styles.Day, {
      key: dayNumber,
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.ContentDay, {
      className: "content-day"
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, null, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, null, dayNumber)));
  }), /*#__PURE__*/_react.default.createElement(_styles.MiddleLine, null)), /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')), /*#__PURE__*/_react.default.createElement(_styles.WrapToggle, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    selected: isAsapSelected,
    onClick: function onClick() {
      return handleSelectAsap();
    }
  }, t('ASAP', 'As soon as possible')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    selected: isSchedule,
    onClick: function onClick() {
      return handleIsSchedule();
    }
  }, t('SCHEDULE_FOR_LATER', 'Schedule for later'))), isSchedule && /*#__PURE__*/_react.default.createElement(_styles.Hours, {
    name: "hours"
  }, hoursList.map(function (hour, i) {
    var _configs$format_time;

    return /*#__PURE__*/_react.default.createElement(_styles.Hour, {
      key: i,
      selected: timeSelected === hour.startTime,
      onClick: function onClick() {
        return handleChangeTime(hour.startTime);
      }
    }, (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
      outputFormat: 'hh:mma'
    }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
      outputFormat: 'HH:mm'
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_DeliveryDateContent.DeliveryDateContent, {
    dateSelected: dateSelected,
    timeSelected: timeSelected,
    handleChangeDate: handleChangeDate,
    handleChangeTime: handleChangeTime
  }));
};

var MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};

exports.MomentControl = MomentControl;