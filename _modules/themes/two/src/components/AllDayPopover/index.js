"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllDayPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactPopper = require("react-popper");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

var _EnChevronThinDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronThinDown"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AllDayPopover = function AllDayPopover(props) {
  var open = props.open,
      menus = props.menus,
      filterByMenus = props.filterByMenus,
      handleChangeFilterByMenus = props.handleChangeFilterByMenus;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 0]
      }
    }]
  });
  var styles = popper.styles,
      attributes = popper.attributes,
      forceUpdate = popper.forceUpdate;
  (0, _react.useEffect)(function () {
    if (orderStatus.loading) return;
    forceUpdate && forceUpdate();
  }, [open, orderStatus]);

  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;

    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);

    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      props.onClose && props.onClose();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    maxHeight: '70vh',
    overflowY: 'auto'
  });

  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }

  var onChangeFilterByMenus = function onChangeFilterByMenus(menuId) {
    handleChangeFilterByMenus(menuId);
    props.onClose();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    className: "allDay-popover",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    isHome: props.isHome
  }, /*#__PURE__*/_react.default.createElement("h3", {
    onClick: props.onClick
  }, t('ALL_DAY', 'All Day'), " ", /*#__PURE__*/_react.default.createElement(_EnChevronThinDown.default, null))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), menus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: menu.id,
      active: menu.id === filterByMenus,
      onClick: function onClick() {
        return onChangeFilterByMenus(menu.id);
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, menu === null || menu === void 0 ? void 0 : menu.name), menu.schedule.map(function (_schedule, index) {
      var _schedule$lapses$, _schedule$lapses$$ope, _schedule$lapses$2, _schedule$lapses$2$op, _schedule$lapses$3, _schedule$lapses$3$cl, _schedule$lapses$4, _schedule$lapses$4$cl;

      return /*#__PURE__*/_react.default.createElement("p", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(_schedule === null || _schedule === void 0 ? void 0 : (_schedule$lapses$ = _schedule.lapses[0]) === null || _schedule$lapses$ === void 0 ? void 0 : (_schedule$lapses$$ope = _schedule$lapses$.open) === null || _schedule$lapses$$ope === void 0 ? void 0 : _schedule$lapses$$ope.hour, _schedule === null || _schedule === void 0 ? void 0 : (_schedule$lapses$2 = _schedule.lapses[0]) === null || _schedule$lapses$2 === void 0 ? void 0 : (_schedule$lapses$2$op = _schedule$lapses$2.open) === null || _schedule$lapses$2$op === void 0 ? void 0 : _schedule$lapses$2$op.minute)), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(_schedule === null || _schedule === void 0 ? void 0 : (_schedule$lapses$3 = _schedule.lapses[0]) === null || _schedule$lapses$3 === void 0 ? void 0 : (_schedule$lapses$3$cl = _schedule$lapses$3.close) === null || _schedule$lapses$3$cl === void 0 ? void 0 : _schedule$lapses$3$cl.hour, _schedule === null || _schedule === void 0 ? void 0 : (_schedule$lapses$4 = _schedule.lapses[0]) === null || _schedule$lapses$4 === void 0 ? void 0 : (_schedule$lapses$4$cl = _schedule$lapses$4.close) === null || _schedule$lapses$4$cl === void 0 ? void 0 : _schedule$lapses$4$cl.minute)));
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles.PopoverArrow, {
    key: "arrow",
    ref: arrowElement,
    style: styles.arrow
  })));
};

exports.AllDayPopover = AllDayPopover;