"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _UpsellingPage = require("../../../../../components/UpsellingPage");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Confirm = require("../../../../../components/Confirm");

var _CartContent = require("../../../../../components/CartContent");

var _utils = require("../../../../../utils");

var _Buttons = require("../../styles/Buttons");

var _PaymentOptions = require("../PaymentOptions");

var _DriverTips = require("../DriverTips");

var _CheckoutBill = require("../CheckoutBill");

var _CouponControl = require("../CouponControl");

var _DeliveryDetails = require("../DeliveryDetails");

var _Cart = require("../Cart");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CheckoutUI = function CheckoutUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$beforeElements2, _props$beforeComponen2, _cart$products, _props$beforeElements3, _props$beforeComponen3, _props$beforeElements4, _props$beforeComponen4, _businessDetails$busi2, _businessDetails$busi3, _props$beforeElements5, _props$beforeComponen5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _props$beforeElements6, _props$beforeComponen6, _cart$products2, _cart$products3, _props$afterComponent, _props$afterElements;

  var cart = props.cart,
      errors = props.errors,
      placing = props.placing,
      cartState = props.cartState,
      businessDetails = props.businessDetails,
      paymethodSelected = props.paymethodSelected,
      handlePaymethodChange = props.handlePaymethodChange,
      handlerClickPlaceOrder = props.handlerClickPlaceOrder,
      handleOrderRedirect = props.handleOrderRedirect,
      isCustomerMode = props.isCustomerMode;

  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
      _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
      validationFields = _useValidationFields2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      options = _useOrder2[0].options;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 1),
      customerState = _useCustomer2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      errorCash = _useState2[0],
      setErrorCash = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      userErrors = _useState4[0],
      setUserErrors = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length) {
      handlerClickPlaceOrder && handlerClickPlaceOrder();
      return;
    }

    setAlertState({
      open: true,
      content: Object.values(userErrors).map(function (error) {
        return error;
      })
    });
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4;

    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (!userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          errors.push(t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "The field ".concat(field === null || field === void 0 ? void 0 : field.name, " is required")));
        }
      }
    });

    if (!(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie3 = _validationFields$fie2.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie4 = _validationFields$fie3.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'));
    }

    if (userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone);
        var phoneNumber = (0, _libphonenumberJs.default)(phone);

        if (!(phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.isValid())) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }

    setUserErrors(errors);
  };

  (0, _react.useEffect)(function () {
    var _validationFields$fie5;

    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && _validationFields$fie5.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user]);
  (0, _react.useEffect)(function () {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _businessDetails$busi;

    var paymethods = (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi = businessDetails.business) === null || _businessDetails$busi === void 0 ? void 0 : _businessDetails$busi.paymethods) || [];

    if (paymethods && paymethods.length > 1) {
      handlePaymethodChange(null);
    }
  }, [cart === null || cart === void 0 ? void 0 : cart.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrappContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckoutInfoContent, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), (_props$beforeElements2 = props.beforeElementsSectionOne) === null || _props$beforeElements2 === void 0 ? void 0 : _props$beforeElements2.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen2 = props.beforeComponentsSectionOne) === null || _props$beforeComponen2 === void 0 ? void 0 : _props$beforeComponen2.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionSix && !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_ORDER', 'Your Order')), /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    cart: cart,
    isCheckout: true,
    isProducts: (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) || 0
  })), (_props$beforeElements3 = props.beforeElementsSectioTwo) === null || _props$beforeElements3 === void 0 ? void 0 : _props$beforeElements3.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen3 = props.beforeComponentsSectionTwo) === null || _props$beforeComponen3 === void 0 ? void 0 : _props$beforeComponen3.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement(_DeliveryDetails.DeliveryDetails, null)), (_props$beforeElements4 = props.beforeElementsSectionThree) === null || _props$beforeElements4 === void 0 ? void 0 : _props$beforeElements4.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen4 = props.beforeComponentsSectionThree) === null || _props$beforeComponen4 === void 0 ? void 0 : _props$beforeComponen4.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionFive && !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.id,
    isLoading: businessDetails.loading,
    paymethods: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isPaymethodNull: paymethodSelected,
    isCustomerMode: isCustomerMode
  })), (_props$beforeElements5 = props.beforeElementsSectionFour) === null || _props$beforeElements5 === void 0 ? void 0 : _props$beforeElements5.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen5 = props.beforeComponentsSectionFour) === null || _props$beforeComponen5 === void 0 ? void 0 : _props$beforeComponen5.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionFour && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6.checkout) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7.driver_tip) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.enabled) && /*#__PURE__*/_react.default.createElement(_styles.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: _utils.DriverTipsOptions,
    useOrderContext: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.CheckoutActionContent, null, /*#__PURE__*/_react.default.createElement(_styles.CheckoutActionInnerContent, null, (_props$beforeElements6 = props.beforeElementsSectionFive) === null || _props$beforeElements6 === void 0 ? void 0 : _props$beforeElements6.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen6 = props.beforeComponentsSectionFive) === null || _props$beforeComponen6 === void 0 ? void 0 : _props$beforeComponen6.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapCheckoutBill, null, /*#__PURE__*/_react.default.createElement(_CheckoutBill.CheckoutBill, {
    cart: cart
  }), /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    price: cart === null || cart === void 0 ? void 0 : cart.total
  })), /*#__PURE__*/_react.default.createElement(_styles.ActionContainer, null, (cart === null || cart === void 0 ? void 0 : cart.total) >= 1 && /*#__PURE__*/_react.default.createElement(_styles.TotalPrice, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('TOTAL', 'Total')), (cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) > 0 && /*#__PURE__*/_react.default.createElement("span", null, cart === null || cart === void 0 ? void 0 : (_cart$products3 = cart.products) === null || _cart$products3 === void 0 ? void 0 : _cart$products3.length, " ", t('PRODUCTS', 'Products'))), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.total))), !props.isHideSectionSeven && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) ? 'secundary' : 'primary',
    disabled: !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected || placing || errorCash || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum),
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CUSTOMER_DETAILS', 'Customer Details'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var Checkout = function Checkout(props) {
  var _Object$values, _cartState$cart, _cartState$error, _cartState$cart2;

  var errors = props.errors,
      clearErrors = props.clearErrors,
      query = props.query,
      cartUuid = props.cartUuid,
      handleOrderRedirect = props.handleOrderRedirect,
      handleCheckoutRedirect = props.handleCheckoutRedirect,
      handleSearchRedirect = props.handleSearchRedirect,
      handleCheckoutListRedirect = props.handleCheckoutListRedirect;

  var _useOrder3 = (0, _orderingComponents.useOrder)(),
      _useOrder4 = _slicedToArray(_useOrder3, 2),
      orderState = _useOrder4[0],
      confirmCart = _useOrder4[1].confirmCart;

  var _useSession3 = (0, _orderingComponents.useSession)(),
      _useSession4 = _slicedToArray(_useSession3, 1),
      token = _useSession4[0].token;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useState7 = (0, _react.useState)({
    loading: true,
    error: null,
    cart: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      cartState = _useState8[0],
      setCartState = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openUpselling = _useState10[0],
      setOpenUpselling = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      canOpenUpselling = _useState12[0],
      setCanOpenUpselling = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      currentCart = _useState14[0],
      setCurrentCart = _useState14[1];

  var _useState15 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      alertState = _useState16[0],
      setAlertState = _useState16[1];

  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && ((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products4;

    return cart === null || cart === void 0 ? void 0 : (_cart$products4 = cart.products) === null || _cart$products4 === void 0 ? void 0 : _cart$products4.length;
  })) || null;

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
  };

  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCurrentCart(null);
    setCanOpenUpselling(false);
    handleCheckoutRedirect(currentCart.uuid);
  };

  (0, _react.useEffect)(function () {
    if (!orderState.loading && currentCart !== null && currentCart !== void 0 && currentCart.business_id) {
      var _Object$values2;

      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values2 = Object.values(orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
        return (cart === null || cart === void 0 ? void 0 : cart.business_id) === (currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id);
      })));
    }
  }, [orderState.loading]);
  (0, _react.useEffect)(function () {
    if (currentCart !== null && currentCart !== void 0 && currentCart.products) {
      setOpenUpselling(true);
    }
  }, [currentCart]);
  (0, _react.useEffect)(function () {
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);

  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(cartId) {
      var _result$order, _result$paymethod_dat, userCustomer, url, response, _yield$response$json, result, _confirmCartRes$resul, confirmCartRes, cart;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: true
              }));
              userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
              url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
              _context.next = 6;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;

              if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
                _context.next = 16;
                break;
              }

              handleOrderRedirect(result.order.uuid);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false
              }));
              _context.next = 33;
              break;

            case 16:
              if (!(result.status === 2 && ((_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.gateway) === 'stripe_redirect' && query.get('payment_intent'))) {
                _context.next = 31;
                break;
              }

              _context.prev = 17;
              _context.next = 20;
              return confirmCart(cartUuid);

            case 20:
              confirmCartRes = _context.sent;

              if (confirmCartRes.error) {
                setAlertState({
                  open: true,
                  content: [confirmCartRes.error.message]
                });
              }

              if ((_confirmCartRes$resul = confirmCartRes.result.order) !== null && _confirmCartRes$resul !== void 0 && _confirmCartRes$resul.uuid) {
                handleOrderRedirect(confirmCartRes.result.order.uuid);
              }

              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: result
              }));
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](17);
              setAlertState({
                open: true,
                content: [_context.t0.message]
              });

            case 29:
              _context.next = 33;
              break;

            case 31:
              cart = Array.isArray(result) ? null : result;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: cart,
                error: cart ? null : result
              }));

            case 33:
              _context.next = 38;
              break;

            case 35:
              _context.prev = 35;
              _context.t1 = _context["catch"](0);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                error: [_context.t1.toString()]
              }));

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 35], [17, 26]]);
    }));

    return function getOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    }
  }, [token, cartUuid]);

  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    businessId: (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.business_id
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    isForceOpenCart: true
  })), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartState.loading && !(window.location.pathname === '/checkout') && /*#__PURE__*/_react.default.createElement(_styles.WrappContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckoutInfoContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 400,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.CheckoutActionContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 400,
    style: {
      marginBottom: '10px'
    }
  }))), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CHECKOUT ', 'Checkout'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

exports.Checkout = Checkout;