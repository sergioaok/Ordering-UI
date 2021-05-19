"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("ordering-components/_modules/components");

var _contexts = require("ordering-components/_modules/contexts");

var _styledComponents = require("styled-components");

var _Modal = require("../Modal");

var _SignUpForm = require("../SignUpForm");

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

var _Confirm = require("../Confirm");

var _UserDetails = require("../UserDetails");

var _AddressList = require("../AddressList");

var _styles = require("./styles");

var _SpinnerLoader = require("../SpinnerLoader");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PhoneAutocompleteUI = function PhoneAutocompleteUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _customerState$result, _customerState$result2, _props$afterComponent, _props$afterElements;

  var phone = props.phone,
      customerState = props.customerState,
      customersPhones = props.customersPhones,
      setCustomersPhones = props.setCustomersPhones,
      openModal = props.openModal,
      setOpenModal = props.setOpenModal,
      onChangeNumber = props.onChangeNumber,
      setCustomerState = props.setCustomerState,
      countryCallingCode = props.countryCallingCode,
      onRedirectPage = props.onRedirectPage;

  var _useOrder = (0, _contexts.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _contexts.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var userName = userCustomer !== null && userCustomer !== void 0 && userCustomer.lastname ? "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname) : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name;

  var handleCloseAlert = function handleCloseAlert() {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      error: null
    }));
    setAlertState({
      open: false,
      content: []
    });
  };

  var saveCustomerUser = function saveCustomerUser(user) {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      users: [].concat(_toConsumableArray(customersPhones.users), [user])
    }));
    setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
      result: user
    }));
    setOpenModal({
      customer: true,
      signup: false
    });
  };

  var handleFindClick = function handleFindClick() {
    var _orderState$options, _orderState$options$a;

    if (userCustomer !== null && userCustomer !== void 0 && userCustomer.id && orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.address) {
      onRedirectPage && onRedirectPage('search');
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_ADDRESS_CUSTOMER', 'Please select an address for the selected customer')
      });
    }
  };

  (0, _react.useEffect)(function () {
    if (customersPhones !== null && customersPhones !== void 0 && customersPhones.error) {
      setAlertState({
        open: true,
        content: [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]
      });
    }
  }, [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.homeHero
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME_CALLCENTER', 'Start First by adding the customers\' phone number')), /*#__PURE__*/_react.default.createElement(_styles.AutoComplete, {
    className: "autocomplete"
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "phone-input",
    id: "phone-input",
    placeholder: t('PHONE', 'Phone'),
    type: "text",
    pattern: "[0-9]*",
    onInput: onChangeNumber,
    value: phone,
    onChange: function onChange() {},
    maxLength: "10",
    autoComplete: "off",
    disabled: customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.loading
  }), phone && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    name: "phone-button",
    id: "phone-button",
    className: "phone-button"
  }, t('SEE_PHONES', 'See phones')), (customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.loading) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      top: 0,
      position: 'absolute',
      height: 'auto',
      left: '100%',
      width: '0px',
      transform: 'translate(-10px, 10%)'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.WrappBtn, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: "find",
    onClick: function onClick() {
      return handleFindClick();
    },
    disabled: !(userCustomer !== null && userCustomer !== void 0 && userCustomer.id)
  }, userCustomer !== null && userCustomer !== void 0 && userCustomer.id ? "".concat(t('CONTINUE_WITH', 'Continue with'), " ").concat(userName) : t('FIND', 'Find'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.signup,
    width: "80%",
    onClose: function onClose() {
      return setOpenModal({
        openModal: openModal,
        signup: false
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    externalPhoneNumber: "".concat(countryCallingCode, " ").concat(phone),
    saveCustomerUser: saveCustomerUser,
    fieldsNotValid: props.fieldsNotValid,
    useChekoutFileds: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.customer,
    width: "60%",
    onClose: function onClose() {
      return setOpenModal({
        openModal: openModal,
        customer: false
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userData: customerState === null || customerState === void 0 ? void 0 : customerState.result,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$result = customerState.result) === null || _customerState$result === void 0 ? void 0 : _customerState$result.id,
    isCustomerMode: true
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$result2 = customerState.result) === null || _customerState$result2 === void 0 ? void 0 : _customerState$result2.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: _objectSpread(_objectSpread({}, customerState === null || customerState === void 0 ? void 0 : customerState.result), {}, {
      phone: phone
    }),
    isEnableContinueButton: true
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var phoneProps = _objectSpread({
    UIComponent: PhoneAutocompleteUI
  }, props);

  return /*#__PURE__*/_react.default.createElement(_components.PhoneAutocomplete, phoneProps);
};

exports.PhoneAutocomplete = PhoneAutocomplete;