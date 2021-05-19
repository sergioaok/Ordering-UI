"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Modal = require("../Modal");

var _ProductForm = require("../ProductForm");

var _AutoScroll = require("../AutoScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UpsellingPageUI = function UpsellingPageUI(props) {
  var _upsellingProducts$pr3;

  var upsellingProducts = props.upsellingProducts,
      handleUpsellingPage = props.handleUpsellingPage,
      openUpselling = props.openUpselling,
      canOpenUpselling = props.canOpenUpselling,
      setCanOpenUpselling = props.setCanOpenUpselling,
      business = props.business,
      isCustomMode = props.isCustomMode;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      actualProduct = _useState2[0],
      setActualProduct = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalIsOpen = _useState4[0],
      setModalIsOpen = _useState4[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  (0, _react.useEffect)(function () {
    var _upsellingProducts$pr, _upsellingProducts$pr2;

    if (upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr = upsellingProducts.products) !== null && _upsellingProducts$pr !== void 0 && _upsellingProducts$pr.length && !upsellingProducts.loading) {
      setCanOpenUpselling && setCanOpenUpselling(true);
    } else if (!(upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr2 = upsellingProducts.products) !== null && _upsellingProducts$pr2 !== void 0 && _upsellingProducts$pr2.length) && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
      handleUpsellingPage();
    }
  }, [upsellingProducts.loading, upsellingProducts === null || upsellingProducts === void 0 ? void 0 : upsellingProducts.products.length]);

  var handleFormProduct = function handleFormProduct(product) {
    setModalIsOpen(true);
    setActualProduct(product);
  };

  var handleSaveProduct = function handleSaveProduct() {
    setActualProduct(null);
    setModalIsOpen(false);
  };

  var UpsellingLayout = function UpsellingLayout() {
    return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UpsellingContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
      innerScroll: true
    }, !upsellingProducts.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !upsellingProducts.error ? upsellingProducts.products.map(function (product, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: product.id,
        name: product.name,
        onClick: function onClick() {
          return handleFormProduct(product);
        }
      }, /*#__PURE__*/_react.default.createElement(_styles.Details, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        title: product.name
      }, product.name)), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.price))), /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement("img", {
        src: product.images,
        alt: "product-".concat(i),
        width: "70px",
        height: "70px",
        loading: "lazy"
      })));
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, upsellingProducts.message)) : _toConsumableArray(Array(8)).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 250,
        height: 50
      }));
    }))));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomMode ? /*#__PURE__*/_react.default.createElement(UpsellingLayout, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !canOpenUpselling || (upsellingProducts === null || upsellingProducts === void 0 ? void 0 : (_upsellingProducts$pr3 = upsellingProducts.products) === null || _upsellingProducts$pr3 === void 0 ? void 0 : _upsellingProducts$pr3.length) === 0 ? '' : /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WANT_SOMETHING_ELSE', 'Do you want something else?'),
    open: openUpselling,
    onClose: function onClose() {
      return handleUpsellingPage();
    },
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(UpsellingLayout, null), /*#__PURE__*/_react.default.createElement(_styles.CloseUpselling, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    outline: true,
    onClick: function onClick() {
      return handleUpsellingPage(false);
    }
  }, t('NO_THANKS', 'No, Thanks'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: "0",
    closeOnBackdrop: true,
    isProductForm: true
  }, actualProduct && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    product: actualProduct,
    businessId: actualProduct.api.businessId,
    businessSlug: business.slug,
    onSave: function onSave() {
      return handleSaveProduct();
    }
  })));
};

var UpsellingPage = function UpsellingPage(props) {
  var UpsellingPageProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UpsellingPageUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UpsellingPage, UpsellingPageProps);
};

exports.UpsellingPage = UpsellingPage;