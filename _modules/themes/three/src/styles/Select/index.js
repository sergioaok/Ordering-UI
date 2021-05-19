"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _BsChevronDown = _interopRequireDefault(require("@meronex/icons/bs/BsChevronDown"));

var _Selects = require("../Selects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Select = function Select(props) {
  var placeholder = props.placeholder,
      options = props.options,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      notAsync = props.notAsync,
      notReload = props.notReload;
  var isHome = window.location.pathname === '/' || window.location.pathname === '/home';

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
    return option.value === defaultValue;
  });

  var _useState3 = (0, _react.useState)(defaultOption),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];

  var _useState5 = (0, _react.useState)(defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var dropdownReference = (0, _react.useRef)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var handleSelectClick = function handleSelectClick(e) {
    !open && setOpen(true);
  };

  var closeSelect = function closeSelect(e) {
    if (open) {
      var _dropdownReference$cu;

      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));

      if (outsideDropdown) {
        setOpen(false);
      }
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setOpen(false);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', closeSelect);
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('mouseup', closeSelect);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!notAsync) {
      var _defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
        return option.value === defaultValue;
      });

      setSelectedOption(_defaultOption);
      setValue(defaultValue);
    }
  }, [defaultValue, options]);

  var handleChangeOption = function handleChangeOption(option) {
    setSelectedOption(option);
    setValue(option.value);
    onChange && onChange(option.value);
    setOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_Selects.Select, {
    id: "select-input",
    isHome: isHome,
    disabled: orderState.loading && !notReload,
    onMouseUp: handleSelectClick
  }, !selectedOption && /*#__PURE__*/_react.default.createElement(_Selects.Selected, null, placeholder || '', /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), selectedOption && /*#__PURE__*/_react.default.createElement(_Selects.Selected, null, /*#__PURE__*/_react.default.createElement(_Selects.Header, null, selectedOption.showOnSelected || selectedOption.content), /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_Selects.Options, {
    id: "list",
    position: "right",
    ref: dropdownReference
  }, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_Selects.Option, {
      id: "item",
      key: option.value,
      selected: value === option.value,
      onClick: function onClick() {
        return handleChangeOption(option);
      }
    }, option.content);
  })));
};

exports.Select = Select;