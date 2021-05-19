"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryMenuPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactPopper = require("react-popper");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

var _AiOutlineUnorderedList = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUnorderedList"));

var _GrClose = _interopRequireDefault(require("@meronex/icons/gr/GrClose"));

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CategoryMenuPopover = function CategoryMenuPopover(props) {
  var _allTime$lapses$, _allTime$lapses$$open, _allTime$lapses$2, _allTime$lapses$2$ope, _allTime$lapses$3, _allTime$lapses$3$clo, _allTime$lapses$4, _allTime$lapses$4$clo;

  var open = props.open,
      categories = props.categories,
      categorySelected = props.categorySelected,
      handlerClickCategory = props.handlerClickCategory,
      allTime = props.allTime;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      totalProducts = _useState2[0],
      setTotalProducts = _useState2[1];

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
        offset: [0, 12]
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

  (0, _react.useEffect)(function () {
    if (orderStatus.loading) return;
    var _totalProducts = 0;

    var _iterator = _createForOfIteratorHelper(categories),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var category = _step.value;

        if (typeof category.id === 'number') {
          _totalProducts += category.products.length;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setTotalProducts(_totalProducts);
  }, [categories]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    className: "categoryMenu-popover"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    onClick: props.onClick,
    isHome: props.isHome
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineUnorderedList.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_styles.HeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles.TitleAndTime, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ALL_DAY', 'All Day')), /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.getHourMin)(allTime === null || allTime === void 0 ? void 0 : (_allTime$lapses$ = allTime.lapses[0]) === null || _allTime$lapses$ === void 0 ? void 0 : (_allTime$lapses$$open = _allTime$lapses$.open) === null || _allTime$lapses$$open === void 0 ? void 0 : _allTime$lapses$$open.hour, allTime === null || allTime === void 0 ? void 0 : (_allTime$lapses$2 = allTime.lapses[0]) === null || _allTime$lapses$2 === void 0 ? void 0 : (_allTime$lapses$2$ope = _allTime$lapses$2.open) === null || _allTime$lapses$2$ope === void 0 ? void 0 : _allTime$lapses$2$ope.minute), " - ", (0, _utils.getHourMin)(allTime === null || allTime === void 0 ? void 0 : (_allTime$lapses$3 = allTime.lapses[0]) === null || _allTime$lapses$3 === void 0 ? void 0 : (_allTime$lapses$3$clo = _allTime$lapses$3.close) === null || _allTime$lapses$3$clo === void 0 ? void 0 : _allTime$lapses$3$clo.hour, allTime === null || allTime === void 0 ? void 0 : (_allTime$lapses$4 = allTime.lapses[0]) === null || _allTime$lapses$4 === void 0 ? void 0 : (_allTime$lapses$4$clo = _allTime$lapses$4.close) === null || _allTime$lapses$4$clo === void 0 ? void 0 : _allTime$lapses$4$clo.minute))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    circle: true,
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_GrClose.default, null))), /*#__PURE__*/_react.default.createElement("div", null, categories && categories.length && categories.map(function (category) {
    var _category$products;

    return /*#__PURE__*/_react.default.createElement(_styles.Menu, {
      key: category.name,
      className: "category ".concat(category.id === 'featured' ? 'special' : ''),
      active: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
      borderBottom: true,
      onClick: function onClick() {
        return handlerClickCategory(category);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, category.name), /*#__PURE__*/_react.default.createElement("span", null, category.name === 'All' ? totalProducts : category === null || category === void 0 ? void 0 : (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.length));
  }))));
};

exports.CategoryMenuPopover = CategoryMenuPopover;