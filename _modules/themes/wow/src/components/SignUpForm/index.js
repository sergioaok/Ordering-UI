"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponents = require("ordering-components");

var _reactHookForm = require("react-hook-form");

var _AiOutlineEye = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEye"));

var _AiOutlineEyeInvisible = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEyeInvisible"));

var _BiArrowBack = _interopRequireDefault(require("@meronex/icons/bi/BiArrowBack"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styledComponents = require("styled-components");

var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");

var _Inputs = require("../../../../../styles/Inputs");

var _Confirm = require("../../../../../components/Confirm");

var _Modal = require("../../../../../components/Modal");

var _utils = require("../../../../../utils");

var _FacebookLogin = require("../FacebookLogin");

var _Buttons = require("../../styles/Buttons");

var _RegisterWelcomeContent = require("../RegisterWelcomeContent");

var _styles = require("./styles");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes'];

var SignUpFormUI = function SignUpFormUI(props) {
  var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _theme$images2, _theme$images2$logos, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie9, _validationFields$fie10, _props$afterMidElemen, _props$afterMidCompon, _configs$facebook_log, _configs$facebook_id, _configs$facebook_id2, _props$afterComponent, _props$afterElements;

  var handleChangeInput = props.handleChangeInput,
      handleButtonSignupClick = props.handleButtonSignupClick,
      elementLinkToLogin = props.elementLinkToLogin,
      useChekoutFileds = props.useChekoutFileds,
      validationFields = props.validationFields,
      showField = props.showField,
      isRequiredField = props.isRequiredField,
      formState = props.formState,
      handleSuccessSignup = props.handleSuccessSignup,
      isPopup = props.isPopup,
      externalPhoneNumber = props.externalPhoneNumber,
      saveCustomerUser = props.saveCustomerUser,
      fieldsNotValid = props.fieldsNotValid,
      signupData = props.signupData;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var history = (0, _reactRouterDom.useHistory)();
  var formMethods = (0, _reactHookForm.useForm)();

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

  var theme = (0, _styledComponents.useTheme)();
  var emailInput = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      userPhoneNumber = _useState4[0],
      setUserPhoneNumber = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isValidPhoneNumber = _useState6[0],
      setIsValidPhoneNumber = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordSee = _useState8[0],
      setPasswordSee = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      welcomeModalOpen = _useState10[0],
      setWelcomeModalOpen = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      mainLoginFormShow = _useState12[0],
      setMainLoginFormShow = _useState12[1];

  var handleSuccessFacebook = function handleSuccessFacebook(user) {
    var _user$session;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };

  var togglePasswordView = function togglePasswordView() {
    setPasswordSee(!passwordSee);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && validationFields !== null && validationFields !== void 0 && (_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie2 = _validationFields$fie.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie3 = _validationFields$fie2.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.required && !externalPhoneNumber) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      });
      return;
    }

    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      });
      return;
    }

    handleButtonSignupClick && handleButtonSignupClick();

    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result);
    }
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };

    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }

    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }

    handleChangeInput(phoneNumber, true);
  };

  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/\s/gi, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/\s/gi, ''));
    emailInput.current.value = e.target.value.toLowerCase().replace(/\s/gi, '');
  };

  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3, _formState$result4;

    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && !((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.result) {
      var _formState$result5;

      saveCustomerUser && saveCustomerUser((_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result);
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading) {
      var _validationFields$fie4;

      Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.checkout).map(function (field) {
        return !notValidationFields.includes(field.code) && formMethods.register(field.code, {
          required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null
        });
      });
      formMethods.register('email', {
        required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
        }
      });
    }
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    Object.keys(signupData).map(function (fieldName) {
      formMethods.setValue(fieldName, signupData[fieldName]);
    });
  }, [signupData]);
  (0, _react.useEffect)(function () {
    setWelcomeModalOpen(true);
  }, []);
  var showInputPhoneNumber = (_validationFields$fie5 = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6.checkout) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7.cellphone) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.enabled) !== null && _validationFields$fie5 !== void 0 ? _validationFields$fie5 : false;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.SignUpContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroSide, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.authHero
  }), /*#__PURE__*/_react.default.createElement(_styles.FormSideContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BackButton, {
    onClick: function onClick() {
      return history.goBack();
    }
  }, /*#__PURE__*/_react.default.createElement(_BiArrowBack.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('BACK', 'Back'))), mainLoginFormShow ? /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "logo",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype,
    alt: "Logo sign up",
    width: "200",
    height: "66",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isSkeleton: useChekoutFileds && (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !(useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie9 = validationFields.fields) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9.checkout) && (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 ? void 0 : _validationFields$fie10.checkout
  }).map(function (field) {
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.enabled && field.required ? field.type : 'hidden',
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.name),
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      required: field.required,
      autoComplete: "off"
    }) : /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.enabled && field.required ? field.type : 'hidden',
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.name),
      onChange: handleChangeInput,
      required: field.required,
      autoComplete: "off"
    }));
  }), !!showInputPhoneNumber && !externalPhoneNumber && /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), externalPhoneNumber && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    value: externalPhoneNumber,
    className: "form",
    readOnly: true,
    name: "cellphone"
  }), (!fieldsNotValid || fieldsNotValid && !fieldsNotValid.includes('password')) && /*#__PURE__*/_react.default.createElement(_styles.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    className: "form",
    placeholder: t('PASSWORD', 'Password'),
    onChange: handleChangeInput,
    required: true,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_styles.TogglePassword, {
    onClick: togglePasswordView
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_AiOutlineEye.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineEyeInvisible.default, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 43
    }));
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.loading || (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : t('SIGN_UP', 'Sign up'))), elementLinkToLogin && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')), elementLinkToLogin)) : /*#__PURE__*/_react.default.createElement(_styles.RegisterMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.RegisterMethodsInnerContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    onClick: function onClick() {
      return setMainLoginFormShow(true);
    }
  }, t('WIDTH_PHONE_NUMBER', 'With phone number')), !externalPhoneNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.SocialButtons, {
    isPopup: isPopup
  }, (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) && (configs === null || configs === void 0 ? void 0 : (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 ? void 0 : (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  })) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  })))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: welcomeModalOpen,
    width: "50%",
    onClose: function onClose() {
      return setWelcomeModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_RegisterWelcomeContent.RegisterWelcomeContent, null)), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('SIGN_UP', 'Sign up'),
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

var SignUpForm = function SignUpForm(props) {
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SignUpFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SignupForm, loginControllerProps);
};

exports.SignUpForm = SignUpForm;