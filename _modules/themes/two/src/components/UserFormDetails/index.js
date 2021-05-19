"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _reactHookForm = require("react-hook-form");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _InputPhoneNumber = require("../InputPhoneNumber");

var _Confirm = require("../Confirm");

var _utils = require("../../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone'];

var UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie13;

  var onCancel = props.onCancel,
      formState = props.formState,
      showField = props.showField,
      cleanFormState = props.cleanFormState,
      onCloseProfile = props.onCloseProfile,
      isRequiredField = props.isRequiredField,
      validationFields = props.validationFields,
      handleChangeInput = props.handleChangeInput,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      isCheckout = props.isCheckout,
      externalUserData = props.externalUserData,
      closeModal = props.closeModal;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      userSession = _useSession2[0].user;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isValidPhoneNumber = _useState2[0],
      setIsValidPhoneNumber = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      validationFieldsSorted = _useState4[0],
      setValidationFieldsSorted = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      userPhoneNumber = _useState6[0],
      setUserPhoneNumber = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];

  var user = externalUserData || userSession;

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };

  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;

  var setUserCellPhone = function setUserCellPhone() {
    if (userPhoneNumber && !userPhoneNumber.includes('null')) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }

    if (user !== null && user !== void 0 && user.cellphone) {
      var phone = null;

      if (user !== null && user !== void 0 && user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }

      setUserPhoneNumber(phone);
      return;
    }

    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.required && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.enabled) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }

    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        });
        return;
      }

      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }

    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;

      if (user !== null && user !== void 0 && user.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }

      closeModal && closeModal();
      handleButtonUpdateClick(changes);
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

  var sortValidationFields = function sortValidationFields() {
    var _validationFields$fie11;

    var fields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];
    var fieldsSorted = [];
    var validationsFieldsArray = Object.values((_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout);
    fields.forEach(function (f) {
      validationsFieldsArray.forEach(function (field) {
        if (f === field.code) {
          fieldsSorted.push(field);
        }
      });
    });
    fieldsSorted.push(validationsFieldsArray.filter(function (field) {
      return !fields.includes(field.code);
    }));
    setValidationFieldsSorted((0, _utils.flatArray)(fieldsSorted));
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      var content = Object.values(errors).map(function (error) {
        return error.message;
      });

      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }

      setAlertState({
        open: true,
        content: content
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    var _validationFields$fie12;

    if (validationFields !== null && validationFields !== void 0 && (_validationFields$fie12 = validationFields.fields) !== null && _validationFields$fie12 !== void 0 && _validationFields$fie12.checkout) {
      sortValidationFields();
    }
  }, [validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : _validationFields$fie13.checkout]);
  (0, _react.useEffect)(function () {
    if (onCloseProfile) {
      onCloseProfile();
    }

    if (user && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();

      if (!(formState !== null && formState !== void 0 && formState.loading)) {
        cleanFormState && cleanFormState({
          changes: {}
        });
        setUserCellPhone(true);
      }
    }
  }, [user]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: handleSubmit(onSubmit),
    isCheckout: isCheckout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, validationFieldsSorted.map(function (field) {
    var _formState$result3, _formState$result4, _ref, _formState$changes$fi;

    return !notValidationFields.includes(field.code) && showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, (field.id >= 1 && field.id < 6 || field.id >= 55) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, {
      key: field.id
    }, /*#__PURE__*/_react.default.createElement("label", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.id >= 1 && field.id < 6 || field.id >= 55 ? field.type : 'hidden',
      name: field.code,
      className: "form",
      defaultValue: formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result[field.code] : (_ref = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref !== void 0 ? _ref : '',
      onChange: handleChangeInput,
      ref: register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null,
        pattern: {
          value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
          message: field.code === 'email' ? t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
        }
      }),
      autoComplete: "off"
    })));
  }), !!showInputPhoneNumber && !externalUserData && /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), externalUserData && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    value: (externalUserData === null || externalUserData === void 0 ? void 0 : externalUserData.phone) || (externalUserData === null || externalUserData === void 0 ? void 0 : externalUserData.cellphone),
    className: "form",
    name: "cellphone"
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, {
    isCheckout: isCheckout
  }, onCancel && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    onClick: function onClick() {
      return onCancel();
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), (formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 || (formState === null || formState === void 0 ? void 0 : formState.loading)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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

exports.UserFormDetailsUI = UserFormDetailsUI;