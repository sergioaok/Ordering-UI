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

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _UpsellingPage = require("../UpsellingPage");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _AddressDetails = require("../AddressDetails");

var _UserDetails = require("../UserDetails");

var _PaymentOptions = require("../PaymentOptions");

var _DriverTips = require("../DriverTips");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _Confirm = require("../Confirm");

var _CartContent = require("../CartContent");

var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");

var _DeliveryTimeSelector = require("../DeliveryTimeSelector");

var _CouponControl = require("../CouponControl");

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};

var CheckoutUI = function CheckoutUI(props) {
  var _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _configs$order_types_, _businessDetails$busi, _businessDetails$busi2, _theme$images, _theme$images$dummies, _configs$google_maps_, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$busi5, _theme$images2, _theme$images2$dummie, _businessDetails$busi6, _businessDetails$erro, _businessDetails$erro2, _businessDetails$busi7, _cart$business, _cart$business2, _configs$driver_tip_t, _configs$driver_tip_u, _cart$business3, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _configs$driver_tip_t2, _configs$driver_tip_u2, _configs$driver_tip_u3, _configs$driver_tip_t3, _configs$driver_tip_u4;

  var cart = props.cart,
      errors = props.errors,
      placing = props.placing,
      cartState = props.cartState,
      businessDetails = props.businessDetails,
      paymethodSelected = props.paymethodSelected,
      handlePaymethodChange = props.handlePaymethodChange,
      handlerClickPlaceOrder = props.handlerClickPlaceOrder,
      handleOrderRedirect = props.handleOrderRedirect;
  var theme = (0, _styledComponents.useTheme)();

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
      _useUtils2$ = _useUtils2[0],
      parseNumber = _useUtils2$.parseNumber,
      parsePrice = _useUtils2$.parsePrice,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var driverTipsOptions = typeof (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];

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

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isUserDetailsEdit = _useState8[0],
      setIsUserDetailsEdit = _useState8[1];

  var configTypes = (configs === null || configs === void 0 ? void 0 : (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];

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
    setIsUserDetailsEdit(true);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };

  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4;

    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (!user[field === null || field === void 0 ? void 0 : field.code]) {
          errors.push(t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "The field ".concat(field === null || field === void 0 ? void 0 : field.name, " is required")));
        }
      }
    });

    if (!(user !== null && user !== void 0 && user.cellphone) && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie3 = _validationFields$fie2.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie4 = _validationFields$fie3.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'));
    }

    if (user !== null && user !== void 0 && user.cellphone) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
        var phone = null;
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code).concat(user === null || user === void 0 ? void 0 : user.cellphone);
        var phoneNumber = (0, _libphonenumberJs.default)(phone);

        if (!phoneNumber.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }

    setUserErrors(errors);
  };

  var getButtonLabelByType = function getButtonLabelByType(type) {
    var types = [];
    types[1] = t('PLACE_ORDER', 'Place Order');
    types[2] = t('PLACE_PICKUP_ORDER', 'Place Pickup Order');
    types[3] = t('PLACE_ORDER_TO_EAT_IN', 'Place Order To Eat In');
    types[4] = t('PLACE_CURBSIDE_ORDER', 'Place Curbside Order');
    types[5] = t('PLACE_DRIVE_THRU_ORDER', 'Place Drive Thru Order');
    return types[type || 1] || types[1];
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
    handlePaymethodChange(null);
  }, [cart === null || cart === void 0 ? void 0 : cart.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrappContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContainer, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_styles.WrapOrderTypeMethod, null, /*#__PURE__*/_react.default.createElement("h1", null, t('METHOD', 'Method')), /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    radioStyle: true,
    configTypes: configTypes
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapDeliveryTimeSelect, null, /*#__PURE__*/_react.default.createElement("h1", null, t('TIME', 'Time')), /*#__PURE__*/_react.default.createElement(_DeliveryTimeSelector.DeliveryTimeSelector, null)), businessDetails !== null && businessDetails !== void 0 && businessDetails.loading || cartState.loading ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 170
  })) : /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
    location: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi = businessDetails.business) === null || _businessDetails$busi === void 0 ? void 0 : _businessDetails$busi.location,
    businessLogo: (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, cartState.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })) : /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: true,
    isCheckout: true
  })), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT', 'Payment')), /*#__PURE__*/_react.default.createElement(_styles.PaymentContent, null, /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.id,
    isLoading: businessDetails.loading,
    paymethods: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isPaymethodNull: paymethodSelected
  }), /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    price: cart === null || cart === void 0 ? void 0 : cart.total
  }))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SUMMARY', 'Summary')), /*#__PURE__*/_react.default.createElement("div", null, cart.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      isCartProduct: true,
      product: product
    });
  }))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.UpsellingPageContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PEOPLE_ALSO_ORDERED', 'People also ordered')), /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    isCustomMode: true,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    cartProducts: cart === null || cart === void 0 ? void 0 : cart.products,
    business: cart === null || cart === void 0 ? void 0 : cart.business
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapFloatingButton, null, !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, {
    bottom: true
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) ? 'secundary' : 'primary',
    disabled: !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected || placing || errorCash || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum),
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')))), /*#__PURE__*/_react.default.createElement(_styles.RightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.RightInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.error) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }))), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_FROM', 'Order from')), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi6 = businessDetails.business) === null || _businessDetails$busi6 === void 0 ? void 0 : _businessDetails$busi6.name))), (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error) && (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$erro = businessDetails.error) === null || _businessDetails$erro === void 0 ? void 0 : _businessDetails$erro.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$erro2 = businessDetails.error[0]) === null || _businessDetails$erro2 === void 0 ? void 0 : _businessDetails$erro2.message) || (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error[0])
  }))), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) ? 'secondary' : 'primary',
    disabled: !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected || placing || errorCash || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum),
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : getButtonLabelByType(options === null || options === void 0 ? void 0 : options.type))), (options === null || options === void 0 ? void 0 : options.type) === 2 && /*#__PURE__*/_react.default.createElement(_styles.PickupOrderTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('THIS_IS_A_PICKUP_ORDER', 'This is a pickup order')), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business).length > 0 && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('YOULL_NEED_TO_GO', 'You’ll need to go')), /*#__PURE__*/_react.default.createElement("span", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi7 = businessDetails.business) === null || _businessDetails$busi7 === void 0 ? void 0 : _businessDetails$busi7.name), /*#__PURE__*/_react.default.createElement("span", null, t('TO_PICK_UP_THIS_ORDER', 'to pick up this order.')))), (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.WrapCartPrice, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.subtotal))), (options === null || options === void 0 ? void 0 : options.type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivey Fee')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.delivery_price))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? t('TAX_INCLUDED', 'Tax (included)') : t('TAX', 'Tax'), "(".concat(parseNumber(cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.tax), "%)")), /*#__PURE__*/_react.default.createElement("span", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.tax) || 0))), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER_TIP', 'Driver tip'), (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !!!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat(parseNumber(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate), "%)"))), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))), (cart === null || cart === void 0 ? void 0 : cart.service_fee) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('SERVICE_FEE', 'Service Fee'), "(".concat(parseNumber(cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.service_fee), "%)")), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.service_fee))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("div", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'Discount'), "(".concat(parseNumber(cart === null || cart === void 0 ? void 0 : cart.discount_rate), "%)")) : /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("span", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0)))), (options === null || options === void 0 ? void 0 : options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartState.loading && cart && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6.checkout) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7.driver_tip) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.enabled) && driverTipsOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 || !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u2 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u2 === void 0 ? void 0 : _configs$driver_tip_u2.value, 10),
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u3 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u3 === void 0 ? void 0 : _configs$driver_tip_u3.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t3 = configs.driver_tip_type) === null || _configs$driver_tip_t3 === void 0 ? void 0 : _configs$driver_tip_t3.value, 10) === 1 || !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u4 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u4 === void 0 ? void 0 : _configs$driver_tip_u4.value, 10) ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    useOrderContext: true
  }))), (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapCartTotalPrice, null, /*#__PURE__*/_react.default.createElement("span", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.total))), /*#__PURE__*/_react.default.createElement(_styles.WrapMaxLimtAndSavePrice, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('AMOUNT_DUE', 'Amount Due')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.total))), (cart === null || cart === void 0 ? void 0 : cart.total) < (cart === null || cart === void 0 ? void 0 : cart.minimum) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('MINIMUM_ORDER_LIMIT', 'Minimum order limit: ')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('YOU_SAVED', 'You saved ')), /*#__PURE__*/_react.default.createElement("span", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0)), /*#__PURE__*/_react.default.createElement("span", null, t('WITH_PROMOTIONS', 'With Promotions')))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};

var Checkout = function Checkout(props) {
  var _Object$values, _cartState$cart, _cartState$error, _cartState$cart2;

  var errors = props.errors,
      clearErrors = props.clearErrors,
      query = props.query,
      cartUuid = props.cartUuid,
      handleOrderRedirect = props.handleOrderRedirect,
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

  var _useState9 = (0, _react.useState)({
    loading: true,
    error: null,
    cart: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      cartState = _useState10[0],
      setCartState = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      currentCart = _useState12[0],
      setCurrentCart = _useState12[1];

  var _useState13 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      alertState = _useState14[0],
      setAlertState = _useState14[1];

  var cartsWithProducts = (_Object$values = Object.values(orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;

    return cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length;
  });

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
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
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);

  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(cartId) {
      var _result$order, _result$paymethod_dat, response, _yield$response$json, result, _confirmCartRes$resul, confirmCartRes, cart;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: true
              }));
              _context.next = 4;
              return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;

              if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
                _context.next = 14;
                break;
              }

              handleOrderRedirect(result.order.uuid);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false
              }));
              _context.next = 31;
              break;

            case 14:
              if (!(result.status === 2 && ((_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.gateway) === 'stripe_redirect' && query.get('payment_intent'))) {
                _context.next = 29;
                break;
              }

              _context.prev = 15;
              _context.next = 18;
              return confirmCart(cartUuid);

            case 18:
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
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](15);
              setAlertState({
                open: true,
                content: [_context.t0.message]
              });

            case 27:
              _context.next = 31;
              break;

            case 29:
              cart = Array.isArray(result) ? null : result;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: cart,
                error: cart ? null : result
              }));

            case 31:
              _context.next = 36;
              break;

            case 33:
              _context.prev = 33;
              _context.t1 = _context["catch"](0);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                error: [_context.t1.toString()]
              }));

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 33], [15, 24]]);
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

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !cartUuid && orderState.carts && cartsWithProducts.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && orderState.carts && cartsWithProducts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    isCheckoutPage: true
  })), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartState.loading && !(window.location.pathname === '/checkout') && /*#__PURE__*/_react.default.createElement(_styles.WrappContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80,
    count: 2,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80,
    count: 4,
    style: {
      marginBottom: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.RightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.RightInnerContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    count: 2,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 2,
    style: {
      marginBottom: '10px'
    }
  })))), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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