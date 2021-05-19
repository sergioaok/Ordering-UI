"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _BsCheck = _interopRequireDefault(require("@meronex/icons/bs/BsCheck"));

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

var ProductOptionUI = function ProductOptionUI(props) {
  var children = props.children,
      option = props.option,
      error = props.error;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var maxMin = "(".concat(t('MIN', 'Min'), ": ").concat(option.min, " / ").concat(t('MAX', 'Max'), ": ").concat(option.max, ")");

  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required');
  } else if (option.min === 0 && option.max > 0) {
    maxMin = "(".concat(t('MAX', 'Max'), ": ").concat(option.max, ")");
  } else if (option.min > 0 && option.max === 0) {
    maxMin = "(".concat(t('MIN', 'Min'), ": ").concat(option.min, ")");
  }

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapHeader, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, option.image && /*#__PURE__*/_react.default.createElement(_styles.OptionThumbnail, {
    src: option.image
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, /*#__PURE__*/_react.default.createElement("span", null, option.name), option.min === 1 && option.max === 1 && /*#__PURE__*/_react.default.createElement("span", null, t('SELECT_AT_LEAST_1', 'select at least 1')))), /*#__PURE__*/_react.default.createElement(_styles.Flag, {
    error: error
  }, option.min === 1 && option.max === 1 && !error && /*#__PURE__*/_react.default.createElement(_BsCheck.default, null), maxMin)), children);
};

var ProductOption = function ProductOption(props) {
  var productOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductOption, productOptionProps);
};

exports.ProductOption = ProductOption;