"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _MdRadioButtonChecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonChecked"));

var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));

var _BsChevronDown = _interopRequireDefault(require("@meronex/icons/bs/BsChevronDown"));

var _BsChevronUp = _interopRequireDefault(require("@meronex/icons/bs/BsChevronUp"));

var _orderingComponents = require("ordering-components");

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

var BusinessesFilter = function BusinessesFilter(props) {
  var isFilterPage = props.isFilterPage,
      loading = props.loading,
      totalItems = props.totalItems,
      searchValue = props.searchValue,
      businessTypeSelected = props.businessTypeSelected,
      defaultOrderByValue = props.defaultOrderByValue,
      defaultMaxDeliveryFee = props.defaultMaxDeliveryFee,
      handleChangeSort = props.handleChangeSort;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      sortSelected = _useState2[0],
      setSortSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(2),
      _useState4 = _slicedToArray(_useState3, 2),
      maxDeliveryFee = _useState4[0],
      setMaxDeliveryFee = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      openSortFilter = _useState6[0],
      setOpenSortFilter = _useState6[1];

  var filterTypes = [{
    value: null,
    content: t('PICKED_FOR_YOU_(DEFAULT)', 'Picked for you (default)')
  }, {
    value: 'name',
    content: t('NAME)', 'Name')
  }, {
    value: 'rating',
    content: t('RATING', 'Rating')
  }, {
    value: 'distance',
    content: t('DISTANCE', 'Distance')
  }, {
    value: 'minimun',
    content: t('MINIMUM_PURCHASE', 'Minimum purchase')
  }, {
    value: 'newest',
    content: t('NEWER_STORE', 'Newer store')
  }];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var handleSort = function handleSort(value) {
    setSortSelected(value);

    if (isFilterPage) {
      handleChangeSort(value);
    } else {
      handleGoToPage({
        page: 'filter',
        search: "?orderBy=".concat(value)
      });
    }
  };

  (0, _react.useEffect)(function () {
    if (!defaultOrderByValue || defaultOrderByValue === sortSelected) return;
    setSortSelected(defaultOrderByValue);
  }, [defaultOrderByValue]);
  (0, _react.useEffect)(function () {
    if (!defaultMaxDeliveryFee || defaultMaxDeliveryFee === maxDeliveryFee) return;
    setMaxDeliveryFee(defaultMaxDeliveryFee);
  }, [defaultMaxDeliveryFee]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, searchValue === '' || searchValue === null || !searchValue ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessTypeSelected === null || businessTypeSelected === 'null' ? t('ALL_STORES', 'All stores') : businessTypeSelected) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, searchValue && /*#__PURE__*/_react.default.createElement("span", null, "\"", searchValue, "\""))), isFilterPage && /*#__PURE__*/_react.default.createElement(_styles.BusinessNumber, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, totalItems, " ", t('RESTAURANTS', 'Restaurants')) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  })), isFilterPage && /*#__PURE__*/_react.default.createElement(_styles.ClearAll, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, t('CLEAR_ALL', 'Clear all')), /*#__PURE__*/_react.default.createElement(_styles.SortContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapFilterSectionTitle, {
    onClick: function onClick() {
      return setOpenSortFilter(!openSortFilter);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('SORT', 'Sort')), openSortFilter ? /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null) : /*#__PURE__*/_react.default.createElement(_BsChevronUp.default, null)), openSortFilter && filterTypes.map(function (item) {
    var _orderState$options;

    return /*#__PURE__*/_react.default.createElement(_styles.SortItem, {
      key: item.value,
      onClick: function onClick() {
        return handleSort(item.value);
      }
    }, item.value === 'delivery_time', ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1, sortSelected === item.value ? /*#__PURE__*/_react.default.createElement(_MdRadioButtonChecked.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, null), /*#__PURE__*/_react.default.createElement("span", null, item.content));
  })));
};

exports.BusinessesFilter = BusinessesFilter;