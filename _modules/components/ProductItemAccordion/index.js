"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TiPencil = _interopRequireDefault(require("@meronex/icons/ti/TiPencil"));

var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));

var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));

var _orderingComponents = require("ordering-components");

var _useWindowSize = require("../../hooks/useWindowSize");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductItemAccordion = function ProductItemAccordion(props) {
  var _product$valid;

  var isCartProduct = props.isCartProduct,
      product = props.product,
      changeQuantity = props.changeQuantity,
      getProductMax = props.getProductMax,
      offsetDisabled = props.offsetDisabled,
      onDeleteProduct = props.onDeleteProduct,
      onEditProduct = props.onEditProduct;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0, _react.useState)('0px'),
      _useState4 = _slicedToArray(_useState3, 2),
      setHeight = _useState4[0],
      setHeightState = _useState4[1];

  var _useState5 = (0, _react.useState)('accordion__icon'),
      _useState6 = _slicedToArray(_useState5, 2),
      setRotate = _useState6[0],
      setRotateState = _useState6[1];

  var content = (0, _react.useRef)(null);
  var productSelect = (0, _react.useRef)(null);
  var productActionsEdit = (0, _react.useRef)(null);
  var productActionsDelete = (0, _react.useRef)(null);

  var productInfo = function productInfo() {
    if (isCartProduct) {
      var _product$ingredients, _product$options;

      var ingredients = JSON.parse(JSON.stringify(Object.values((_product$ingredients = product.ingredients) !== null && _product$ingredients !== void 0 ? _product$ingredients : {})));
      var options = JSON.parse(JSON.stringify(Object.values((_product$options = product.options) !== null && _product$options !== void 0 ? _product$options : {})));
      options = options.map(function (option) {
        var _option$suboptions;

        option.suboptions = Object.values((_option$suboptions = option.suboptions) !== null && _option$suboptions !== void 0 ? _option$suboptions : {});
        return option;
      });
      return _objectSpread(_objectSpread({}, productInfo), {}, {
        ingredients: ingredients,
        options: options
      });
    }

    return product;
  };

  var toggleAccordion = function toggleAccordion(e) {
    var _productSelect$curren, _productActionsEdit$c, _productActionsDelete;

    var isActionsClick = ((_productSelect$curren = productSelect.current) === null || _productSelect$curren === void 0 ? void 0 : _productSelect$curren.contains(e.target)) || ((_productActionsEdit$c = productActionsEdit.current) === null || _productActionsEdit$c === void 0 ? void 0 : _productActionsEdit$c.contains(e.target)) || ((_productActionsDelete = productActionsDelete.current) === null || _productActionsDelete === void 0 ? void 0 : _productActionsDelete.contains(e.target));
    if (!(product === null || product === void 0 ? void 0 : product.valid_menu) && isCartProduct || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : "".concat(content.current.scrollHeight, "px"));
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };

  var handleChangeQuantity = function handleChangeQuantity(value) {
    if (parseInt(value) === 0) {
      onDeleteProduct(product);
    } else {
      changeQuantity(product, parseInt(value));
    }
  };

  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
        name = _ref.name,
        position = _ref.position,
        price = _ref.price;
    var pos = position ? "(".concat(position, ")") : '';
    return "".concat(quantity, " x ").concat(name, " ").concat(pos, " +").concat(price);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isValid: (_product$valid = product === null || product === void 0 ? void 0 : product.valid) !== null && _product$valid !== void 0 ? _product$valid : true,
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, isCartProduct ? /*#__PURE__*/_react.default.createElement(_styles.ProductSelect, {
    ref: productSelect,
    value: product.quantity,
    onChange: function onChange(e) {
      return handleChangeQuantity(Number(e.target.value));
    }
  }, _toConsumableArray(Array(getProductMax(product) + 1)).map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: i,
      disabled: offsetDisabled(product) < i && i !== 0
    }, i === 0 ? t('REMOVE', 'Remove') : i);
  })) : /*#__PURE__*/_react.default.createElement(_styles.ProductQuantity, null, product === null || product === void 0 ? void 0 : product.quantity), (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    bgimage: product === null || product === void 0 ? void 0 : product.images
  })), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, null, /*#__PURE__*/_react.default.createElement("h3", null, product.name), windowSize.width <= 410 && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.total || product.price)), isCartProduct && /*#__PURE__*/_react.default.createElement("div", null, onEditProduct && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsEdit
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40",
    onClick: function onClick() {
      return onEditProduct(product);
    }
  })), onDeleteProduct && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsDelete
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212",
    onClick: function onClick() {
      return onDeleteProduct(product);
    }
  })))))), ((product === null || product === void 0 ? void 0 : product.valid) || !isCartProduct) && windowSize.width > 410 && /*#__PURE__*/_react.default.createElement(_styles.ProductPriceSection, null, /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product.total || product.price)), (productInfo().ingredients.length > 0 || productInfo().options.length > 0 || product.comment) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))), isCartProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  })))), isCartProduct && (product === null || product === void 0 ? void 0 : product.valid_menu) && !(product === null || product === void 0 ? void 0 : product.valid_quantity) && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('PRODUCT_QUANTITY_ERROR', 'Not available'))), !(product === null || product === void 0 ? void 0 : product.valid_menu) && isCartProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('PRODUCT_QUANTITY_ERROR', 'Not available')))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: "".concat(setHeight)
    }
  }, productInfo().ingredients.length > 0 && productInfo().ingredients.some(function (ingredient) {
    return !ingredient.selected;
  }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), productInfo().ingredients.map(function (ingredient) {
    return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
      className: "ingredient",
      key: ingredient.id
    }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
  })), productInfo().options.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, productInfo().options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: option.id
    }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
      className: "suboption"
    }, option.suboptions.map(function (suboption) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: suboption.id
      }, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
        quantity: suboption.quantity,
        name: suboption.name,
        position: suboption.position !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
        price: parsePrice(suboption.price)
      })));
    })));
  })), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPECIAL_COMMENT', 'Special Comment')), /*#__PURE__*/_react.default.createElement("h3", null, product.comment))));
};

exports.ProductItemAccordion = ProductItemAccordion;