"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));

var _Confirm = require("../Confirm");

var _SpinnerLoader = require("../SpinnerLoader");

var _InputPhoneNumber = require("../InputPhoneNumber");

var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

var _Tabs = require("../../styles/Tabs");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _FacebookLogin = require("../FacebookLogin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoginFormUI = function LoginFormUI(props) {
  var _configs$facebook_log, _configs$facebook_log2, _configs$facebook_id, _configs$facebook_id2, _configs$twilio_servi, _configs$twilio_servi2, _props$beforeMidEleme, _props$beforeMidCompo, _props$afterMidElemen, _props$afterMidCompon;

  var useLoginByEmail = props.useLoginByEmail,
      useLoginByCellphone = props.useLoginByCellphone,
      handleChangeInput = props.handleChangeInput,
      handleChangeTab = props.handleChangeTab,
      handleButtonLoginClick = props.handleButtonLoginClick,
      handleSendVerifyCode = props.handleSendVerifyCode,
      handleCheckPhoneCode = props.handleCheckPhoneCode,
      elementLinkToSignup = props.elementLinkToSignup,
      elementLinkToForgotPassword = props.elementLinkToForgotPassword,
      formState = props.formState,
      verifyPhoneState = props.verifyPhoneState,
      checkPhoneCodeState = props.checkPhoneCodeState,
      loginTab = props.loginTab,
      isPopup = props.isPopup,
      credentials = props.credentials;
  var numOtpInputs = 4;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useForm = (0, _reactHookForm.useForm)(),
      register = _useForm.register,
      errors = _useForm.errors,
      setValue = _useForm.setValue;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      login = _useSession2[1].login;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loginWithOtpState = _useState4[0],
      setLoginWithOtpState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      willVerifyOtpState = _useState6[0],
      setWillVerifyOtpState = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      validPhoneFieldState = _useState8[0],
      setValidPhoneField = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      otpState = _useState10[0],
      setOtpState = _useState10[1];

  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
      _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
      otpLeftTime = _useCountdownTimer2[0],
      _ = _useCountdownTimer2[1],
      resetOtpLeftTime = _useCountdownTimer2[2];

  var onSubmit = function onSubmit() {
    if (loginWithOtpState) {
      if (!validPhoneFieldState) {
        setAlertState({
          open: true,
          content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
        });
        return;
      }

      setWillVerifyOtpState(true);
    } else {
      handleButtonLoginClick();
    }
  };

  var handleSuccessFacebook = function handleSuccessFacebook(user) {
    var _user$session;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    document.querySelector('.wrap-reset > a').tabIndex = '-1';
  }, []);

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var parseNumber = function parseNumber(unparsedNumber) {
    if (!unparsedNumber) return {};
    var parsedNumber = (0, _libphonenumberJs.default)(unparsedNumber);
    var cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
    var countryPhoneCode = +(parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.countryCallingCode);
    return {
      cellphone: cellphone,
      countryPhoneCode: countryPhoneCode
    };
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setValidPhoneField(isValid);
    handleChangeInput({
      target: {
        name: 'cellphone',
        value: number
      }
    });
    setValue('cellphone', number, '');
  };

  var handleSendOtp = function handleSendOtp() {
    if (willVerifyOtpState) {
      var _parseNumber = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
          cellphone = _parseNumber.cellphone,
          countryPhoneCode = _parseNumber.countryPhoneCode;

      resetOtpLeftTime();
      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      });
    }
  };

  (0, _react.useEffect)(function () {
    handleSendOtp();
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) == numOtpInputs) {
      var _parseNumber2 = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
          cellphone = _parseNumber2.cellphone,
          countryPhoneCode = _parseNumber2.countryPhoneCode;

      handleCheckPhoneCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode,
        code: otpState
      });
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$, _checkPhoneCodeState$2;

    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error) setAlertState({
      open: true,
      content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || [t('ERROR', 'Error')]
    });else resetOtpLeftTime();
  }, [checkPhoneCodeState]);
  (0, _react.useEffect)(function () {
    var _verifyPhoneState$res, _verifyPhoneState$res2;

    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res = verifyPhoneState.result) !== null && _verifyPhoneState$res !== void 0 && _verifyPhoneState$res.error) setAlertState({
      open: true,
      content: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
    });else resetOtpLeftTime();
  }, [verifyPhoneState]);
  return /*#__PURE__*/_react.default.createElement(_styles.LoginContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup
  }, !willVerifyOtpState ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FormTitle, null, t('SIGN_IN', 'Sign in')), elementLinkToSignup && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('NEW_ON_ORDERING', 'Are you new to Ordering?')), elementLinkToSignup), Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.SocialButtons, {
    isPopup: isPopup
  }, ((configs === null || configs === void 0 ? void 0 : (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log2 = configs.facebook_login) === null || _configs$facebook_log2 === void 0 ? void 0 : _configs$facebook_log2.value) === '1') && (configs === null || configs === void 0 ? void 0 : (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 ? void 0 : (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  })) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  })), /*#__PURE__*/_react.default.createElement(_styles.LoginWithEmail, null, /*#__PURE__*/_react.default.createElement(_styles.Line, null), /*#__PURE__*/_react.default.createElement("p", null, t('OR', 'or')), /*#__PURE__*/_react.default.createElement(_styles.Line, null))) : /*#__PURE__*/_react.default.createElement(_styles.FormTitle, null, t('VERIFY_PHONE', 'Verify Phone')), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.LoginWith, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, useLoginByEmail && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      setLoginWithOtpState(false);
      handleChangeTab('email');
    },
    active: loginTab === 'email'
  }, t('LOGIN_WITH_EMAIL', 'Login with Email')), configs && Object.keys(configs).length > 0 && ((configs === null || configs === void 0 ? void 0 : (_configs$twilio_servi = configs.twilio_service_enabled) === null || _configs$twilio_servi === void 0 ? void 0 : _configs$twilio_servi.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$twilio_servi2 = configs.twilio_service_enabled) === null || _configs$twilio_servi2 === void 0 ? void 0 : _configs$twilio_servi2.value) === '1') && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      setLoginWithOtpState(true);
      handleChangeTab('cellphone');
    },
    active: loginTab === 'cellphone'
  }, t('LOGIN_WITH_SMS', 'Login with SMS')))), (useLoginByCellphone || useLoginByEmail) && /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), useLoginByEmail && loginTab === 'email' && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL', 'Email')), useLoginByEmail && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "email",
    name: "email",
    "aria-label": "email",
    placeholder: t('EMAIL', 'Email'),
    tabindex: "1",
    ref: register({
      required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off"
  })), loginTab === 'cellphone' && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.WrapperInputPhoneNumber, null, /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: credentials === null || credentials === void 0 ? void 0 : credentials.cellphone,
    setValue: handleChangePhoneNumber,
    handleIsValid: function handleIsValid() {}
  })), !(verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.loading) && willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime)), /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again'), "?")), /*#__PURE__*/_react.default.createElement(_styles.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: "0000",
    isInputNum: true,
    shouldAutoFocus: true
  }))), ((verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loading) || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 160
    }
  }), useLoginByEmail && loginTab === 'email' && !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles.WrapperPassword, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    isPopup: isPopup,
    className: "wrap-reset"
  }, elementLinkToForgotPassword)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    "aria-label": "password",
    placeholder: t('PASSWORD', 'Password'),
    tabindex: "2",
    ref: register({
      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')), elementLinkToForgotPassword), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "primary",
    onClick: onSubmit,
    disabled: formState.loading
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : loginWithOtpState ? t('GET_VERIFY_CODE', 'Get verify code') : t('LOGIN', 'Login')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('LOGIN', 'Login'),
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

var LoginForm = function LoginForm(props) {
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LoginFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LoginForm, loginControllerProps);
};

exports.LoginForm = LoginForm;