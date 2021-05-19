"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewSettingContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _Buttons = require("../../styles/Buttons");

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

var ReviewSettingContent = function ReviewSettingContent(props) {
  var defaultValue = props.defaultValue,
      handleReviewSettingValue = props.handleReviewSettingValue;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(defaultValue || 4.5),
      _useState2 = _slicedToArray(_useState, 2),
      reviewSettingValue = _useState2[0],
      setReivewSettingValue = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("p", null, reviewSettingValue), /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, reviewSettingValue), " ", /*#__PURE__*/_react.default.createElement(_AiFillStar.default, null)), /*#__PURE__*/_react.default.createElement("p", null, t('AND_OVER', 'and over'))), /*#__PURE__*/_react.default.createElement(_styles.WrapStep, null, /*#__PURE__*/_react.default.createElement(_styles.StepValue, {
    setted: reviewSettingValue === 3,
    deActive: reviewSettingValue >= 3.5
  }, /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    onClick: function onClick() {
      return setReivewSettingValue(3);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "3")), /*#__PURE__*/_react.default.createElement(_styles.Line, {
    deActive: reviewSettingValue >= 3.5
  }), /*#__PURE__*/_react.default.createElement(_styles.StepValue, {
    setted: reviewSettingValue === 3.5,
    deActive: reviewSettingValue >= 4
  }, /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    onClick: function onClick() {
      return setReivewSettingValue(3.5);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "3.5")), /*#__PURE__*/_react.default.createElement(_styles.Line, {
    deActive: reviewSettingValue >= 4
  }), /*#__PURE__*/_react.default.createElement(_styles.StepValue, {
    setted: reviewSettingValue === 4,
    deActive: reviewSettingValue >= 4.5
  }, /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    onClick: function onClick() {
      return setReivewSettingValue(4);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "4")), /*#__PURE__*/_react.default.createElement(_styles.Line, {
    deActive: reviewSettingValue >= 4.5
  }), /*#__PURE__*/_react.default.createElement(_styles.StepValue, {
    setted: reviewSettingValue === 4.5,
    deActive: reviewSettingValue === 5
  }, /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    onClick: function onClick() {
      return setReivewSettingValue(4.5);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "4.5")), /*#__PURE__*/_react.default.createElement(_styles.Line, {
    deActive: reviewSettingValue === 5
  }), /*#__PURE__*/_react.default.createElement(_styles.StepValue, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    onClick: function onClick() {
      return setReivewSettingValue(5);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "5"))), /*#__PURE__*/_react.default.createElement(_styles.WrapActoinButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    borderRounded: true,
    onClick: props.onClose
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRounded: true,
    onClick: function onClick() {
      return handleReviewSettingValue(reviewSettingValue);
    }
  }, t('VIEW_RESULTS', 'View Results'))));
};

exports.ReviewSettingContent = ReviewSettingContent;