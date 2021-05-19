"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = require("../../styles/Select");

var _MdRadioButtonChecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonChecked"));

var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));

var _orderingComponents = require("ordering-components");

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
  var dropDownStyle = props.dropDownStyle,
      toggle = props.toggle,
      radioStyle = props.radioStyle,
      handleChangeOrderType = props.handleChangeOrderType,
      typeSelected = props.typeSelected,
      defaultValue = props.defaultValue,
      configTypes = props.configTypes,
      orderTypes = props.orderTypes;
  var options = orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  });
  var defaultType = configTypes !== null && configTypes !== void 0 && configTypes.includes(typeSelected) ? null : configTypes === null || configTypes === void 0 ? void 0 : configTypes[0];
  return typeSelected !== undefined && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, {
    radioStyle: radioStyle,
    toggle: toggle,
    dropDownStyle: dropDownStyle
  }, dropDownStyle ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }),
    defaultValue: defaultType || defaultValue || typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options.map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Option, {
      key: type.value,
      selected: type.value === defaultValue || type.value === typeSelected,
      onClick: function onClick() {
        return handleChangeOrderType(type.value);
      },
      toggle: toggle,
      radioStyle: radioStyle
    }, radioStyle && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type.value === typeSelected ? /*#__PURE__*/_react.default.createElement(_MdRadioButtonChecked.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, null)), type === null || type === void 0 ? void 0 : type.content);
  })));
};

var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      content: t('DELIVERY', 'Delivery')
    }, {
      value: 2,
      content: t('PICKUP', 'Pickup')
    }, {
      value: 3,
      content: t('EAT_IN', 'Eat in')
    }, {
      value: 4,
      content: t('CURBSIDE', 'Curbside')
    }, {
      value: 5,
      content: t('DRIVE_THRU', 'Drive thru')
    }]
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};

exports.OrderTypeSelectorHeader = OrderTypeSelectorHeader;