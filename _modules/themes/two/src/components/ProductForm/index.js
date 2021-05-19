"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));

var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));

var _orderingComponents = require("ordering-components");

var _utils = require("../../../../../utils");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _ProductIngredient = require("../ProductIngredient");

var _ProductOption = require("../ProductOption");

var _ProductOptionSubOption = require("../ProductOptionSubOption");

var _LoginForm = require("../LoginForm");

var _SignUpForm = require("../SignUpForm");

var _ForgotPasswordForm = require("../ForgotPasswordForm");

var _AddressList = require("../AddressList");

var _Modal = require("../Modal");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _Inputs = require("../../styles/Inputs");

var _NotFoundSource = require("../NotFoundSource");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { SoldOutRecommendationSelector } from '../SoldOutRecommendationSelector'
var ProductOptionsUI = function ProductOptionsUI(props) {
  var _theme$images, _theme$images$dummies, _orderState$options, _orderState$options2, _error$;

  var editMode = props.editMode,
      isSoldOut = props.isSoldOut,
      productObject = props.productObject,
      productCart = props.productCart,
      increment = props.increment,
      decrement = props.decrement,
      showOption = props.showOption,
      maxProductQuantity = props.maxProductQuantity,
      errors = props.errors,
      handleSave = props.handleSave,
      handleChangeIngredientState = props.handleChangeIngredientState,
      handleChangeSuboptionState = props.handleChangeSuboptionState,
      handleChangeCommentState = props.handleChangeCommentState;
  var product = productObject.product,
      loading = productObject.loading,
      error = productObject.error;
  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user,
      login = _useSession2[1].login;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalIsOpen = _useState2[0],
      setModalIsOpen = _useState2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var theme = (0, _styledComponents.useTheme)();

  var _useState3 = (0, _react.useState)('login'),
      _useState4 = _slicedToArray(_useState3, 2),
      modalPageToShow = _useState4[0],
      setModalPageToShow = _useState4[1];

  var closeModal = function closeModal() {
    setModalIsOpen(false);
    setModalPageToShow('login');
  };

  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeModal();
    }
  };

  var handleSaveProduct = function handleSaveProduct() {
    var isErrors = Object.values(errors).length > 0;

    if (!isErrors) {
      handleSave && handleSave();
      return;
    }

    var myElement = document.getElementsByClassName('error')[0];
    var productContainer = document.getElementsByClassName('product-container')[0];

    if (!myElement || !productContainer) {
      return;
    }

    var topPos = myElement.offsetTop - productContainer.offsetTop;

    if (windowSize.width <= 768) {
      var productImage = document.getElementById('product_image');
      topPos = topPos + (myElement.offsetTop < productImage.clientHeight ? productImage.clientHeight : 0);
    }

    (0, _utils.scrollTo)(productContainer, topPos, 1250);
  };

  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };

  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    closeModal();
  };

  var isError = function isError(id) {
    var classnames = '';

    if (errors["id:".concat(id)]) {
      classnames = 'error';
    }

    if (isSoldOut || maxProductQuantity <= 0) {
      classnames += ' soldout';
    }

    return classnames;
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ProductContainer, {
    className: "product-container"
  }, loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 200
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  })), !loading && !error && product && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductHeader, null, /*#__PURE__*/_react.default.createElement(_styles.ProductFormTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    id: "product_image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product),
    alt: "product",
    width: "300px",
    height: "300px",
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductEdition, null, (product === null || product === void 0 ? void 0 : product.ingredients.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('INGREDIENTS', 'Ingredients')), /*#__PURE__*/_react.default.createElement(_styles.WrapperIngredients, {
    isProductSoldout: isSoldOut || maxProductQuantity <= 0
  }, product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    return /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
      key: ingredient.id,
      ingredient: ingredient,
      state: productCart.ingredients["id:".concat(ingredient.id)],
      onChange: handleChangeIngredientState
    });
  })), product === null || product === void 0 ? void 0 : product.extras.map(function (extra) {
    return extra.options.map(function (option) {
      var currentState = productCart.options["id:".concat(option.id)] || {};
      return /*#__PURE__*/_react.default.createElement("div", {
        key: option.id
      }, showOption(option) && /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
        option: option,
        currentState: currentState,
        error: errors["id:".concat(option.id)]
      }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSubOption, {
        className: isError(option.id)
      }, option.suboptions.map(function (suboption) {
        var _productCart$options$, _productCart$options$2;

        var currentState = ((_productCart$options$ = productCart.options["id:".concat(option.id)]) === null || _productCart$options$ === void 0 ? void 0 : _productCart$options$.suboptions["id:".concat(suboption.id)]) || {};
        var balance = ((_productCart$options$2 = productCart.options["id:".concat(option.id)]) === null || _productCart$options$2 === void 0 ? void 0 : _productCart$options$2.balance) || 0;
        return /*#__PURE__*/_react.default.createElement(_ProductOptionSubOption.ProductOptionSubOption, {
          key: suboption.id,
          onChange: handleChangeSuboptionState,
          balance: balance,
          option: option,
          suboption: suboption,
          state: currentState,
          productName: product === null || product === void 0 ? void 0 : product.name
        });
      }))));
    });
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('PREFERENCES', 'Preferences')), /*#__PURE__*/_react.default.createElement(_styles.SectionDescription, null, /*#__PURE__*/_react.default.createElement("span", null, t('EXTRA_INSTRUCTIONS', 'Extra instructions')), /*#__PURE__*/_react.default.createElement("span", null, t('LIST_ANY_SPECIAL_REQUEST', 'List any special request'))), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('E_G_ALLERGIES_EXTRA_SPICY_ETC', 'e.g. allergies, extra spicy, etc.'),
    defaultValue: productCart.comment,
    onChange: handleChangeCommentState,
    disabled: !(productCart && !isSoldOut && maxProductQuantity)
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, productCart && !isSoldOut && maxProductQuantity > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "incdec-control"
  }, /*#__PURE__*/_react.default.createElement(_FiMinusCircle.default, {
    onClick: decrement,
    className: "".concat(productCart.quantity === 1 || isSoldOut ? 'disabled' : '')
  }), /*#__PURE__*/_react.default.createElement("span", null, productCart.quantity), /*#__PURE__*/_react.default.createElement(_FiPlusCircle.default, {
    onClick: increment,
    className: "".concat(maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : '')
  })), productCart && !isSoldOut && maxProductQuantity > 0 && auth && ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address_id) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(maxProductQuantity === 0 || Object.keys(errors).length > 0 ? 'disabled' : ''),
    color: "primary",
    onClick: function onClick() {
      return handleSaveProduct();
    },
    disabled: orderState.loading,
    borderRounded: true
  }, orderState.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', 'Loading ')) : /*#__PURE__*/_react.default.createElement("span", null, editMode ? t('UPDATE', 'Update') : t('ADD_TO_CART', 'Add to Cart')), !orderState.loading && /*#__PURE__*/_react.default.createElement("span", null, " - "), /*#__PURE__*/_react.default.createElement("span", null, productCart.total && parsePrice(productCart.total))), auth && !((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.address_id) && (orderState.loading ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add",
    color: "primary",
    disabled: true,
    borderRounded: true
  }, t('LOADING', 'Loading ')) : /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user.addresses,
    isProductForm: true
  })), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    borderRounded: true,
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up')))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return closeModal();
    },
    width: "55%",
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.AuthContainer, null, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', 'Login')),
    isPopup: true
  }))), error && error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0]
  }));
};

var ProductForm = function ProductForm(props) {
  var productOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductForm, productOptionsProps);
};

exports.ProductForm = ProductForm;