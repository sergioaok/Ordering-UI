"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsList = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _SingleProductCard = require("../SingleProductCard");

var _NotFoundSource = require("../NotFoundSource");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var BusinessProductsListUI = function BusinessProductsListUI(props) {
  var _categoryState$produc, _categoryState$produc2, _categoryState$produc3;

  var errors = props.errors,
      businessId = props.businessId,
      category = props.category,
      categories = props.categories,
      categoryState = props.categoryState,
      isBusinessLoading = props.isBusinessLoading,
      onProductClick = props.onProductClick,
      handleSearchRedirect = props.handleSearchRedirect,
      featured = props.featured,
      searchValue = props.searchValue,
      handleClearSearch = props.handleClearSearch;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, category.id && /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: businessId,
      onProductClick: onProductClick
    });
  })), !category.id && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, featured && (categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.find(function (product) {
    return product.featured;
  })) && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, null, /*#__PURE__*/_react.default.createElement("h3", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, (_categoryState$produc3 = categoryState.products) === null || _categoryState$produc3 === void 0 ? void 0 : _categoryState$produc3.map(function (product) {
    return product.featured && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: businessId,
      onProductClick: onProductClick
    });
  })))), !category.id && categories.filter(function (category) {
    return category.id !== null;
  }).map(function (category, i, _categories) {
    var _categoryState$produc4;

    var products = ((_categoryState$produc4 = categoryState.products) === null || _categoryState$produc4 === void 0 ? void 0 : _categoryState$produc4.filter(function (product) {
      return product.category_id === category.id;
    })) || [];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: category.id
    }, products.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
      id: "container"
    }, /*#__PURE__*/_react.default.createElement("h3", null, category.name), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, products.map(function (product) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: product.id,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: businessId,
        product: product,
        onProductClick: onProductClick
      });
    }), categoryState.loading && i + 1 === _categories.length && _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton:".concat(i),
        isSkeleton: true
      });
    }))));
  }), (categoryState.loading || isBusinessLoading) && /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })), !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleClearSearch('');
    }
  })), errors && errors.length > 0 && errors.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, "ERROR: [", e, "]");
  }));
};

var BusinessProductsList = function BusinessProductsList(props) {
  var businessProductsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductsList, businessProductsListProps);
};

exports.BusinessProductsList = BusinessProductsList;