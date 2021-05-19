"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = exports.UserProfileUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _VscCalendar = _interopRequireDefault(require("@meronex/icons/vsc/VscCalendar"));

var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _HiOutlineMail = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineMail"));

var _BiPhone = _interopRequireDefault(require("@meronex/icons/bi/BiPhone"));

var _BiArrowBack = _interopRequireDefault(require("@meronex/icons/bi/BiArrowBack"));

var _BisPencil = _interopRequireDefault(require("@meronex/icons/bi/BisPencil"));

var _styledComponents = require("styled-components");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _Modal = require("../../../../../components/Modal");

var _AddressList = require("../AddressList");

var _UserProfileDropDown = require("../UserProfileDropDown");

var _ProfileBusinesses = require("../ProfileBusinesses");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _ProfileEdit = require("../ProfileEdit");

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

var UserProfileUI = function UserProfileUI(props) {
  var _formState$changes2, _theme$images, _theme$images$general;

  var userData = props.userData,
      formState = props.formState,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      isHiddenAddress = props.isHiddenAddress;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var windowSize = (0, _useWindowSize.useWindowSize)();
  var theme = (0, _styledComponents.useTheme)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user;

  var _useState = (0, _react.useState)('myProfile'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openEditModal = _useState4[0],
      setOpenEditModal = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      setActive = _useState6[0],
      setActiveState = _useState6[1];

  var _useState7 = (0, _react.useState)('accordion__icon'),
      _useState8 = _slicedToArray(_useState7, 2),
      setRotate = _useState8[0],
      setRotateState = _useState8[1];

  var content = (0, _react.useRef)(null);

  var toggleAccordion = function toggleAccordion(e) {
    if (windowSize.width > 992) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };

  var handleChangeItem = function handleChangeItem(item) {
    setSelectedItem(item);

    if (windowSize.width < 992) {
      setActiveState('');
      setRotateState('accordion__icon');
    }
  };

  (0, _react.useEffect)(function () {
    var _formState$changes;

    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
  (0, _react.useEffect)(function () {
    if (windowSize.width > 992) {
      setActiveState('active');
      setRotateState('accordion__icon');
    }
  }, [windowSize === null || windowSize === void 0 ? void 0 : windowSize.width]);
  (0, _react.useEffect)(function () {
    if (auth) return;
    setSelectedItem('myProfile');
  }, [auth]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ProfileSidebar, null, selectedItem === 'help' && /*#__PURE__*/_react.default.createElement(_styles.GoBackContainer, {
    onClick: function onClick() {
      return setSelectedItem('myProfile');
    }
  }, /*#__PURE__*/_react.default.createElement(_BiArrowBack.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('BACK', 'Back'))), /*#__PURE__*/_react.default.createElement(_styles.ProfileSidebarInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, {
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    },
    mobileView: windowSize.width < 992
  }, auth && (windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) < 992 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserHeaderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownCircleImage, {
    src: user === null || user === void 0 ? void 0 : user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.name) || (user === null || user === void 0 ? void 0 : user.name), " ", (userData === null || userData === void 0 ? void 0 : userData.lastname) || (user === null || user === void 0 ? void 0 : user.lastname))), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))) : /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PROFILE', 'My profile'))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_UserProfileDropDown.UserProfileDropDown, {
    auth: auth,
    selectedItem: selectedItem,
    handleChangeItem: handleChangeItem
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProfileContent, null, selectedItem === 'myProfile' && /*#__PURE__*/_react.default.createElement(_styles.MyProfileInfo, null, /*#__PURE__*/_react.default.createElement(_styles.MyProfileInnerContainer, null, auth ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MY_PROFILE', 'My profile')), /*#__PURE__*/_react.default.createElement(_styles.UserHeaderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownCircleImage, {
    src: user === null || user === void 0 ? void 0 : user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.name) || (user === null || user === void 0 ? void 0 : user.name), " ", (userData === null || userData === void 0 ? void 0 : userData.lastname) || (user === null || user === void 0 ? void 0 : user.lastname)), /*#__PURE__*/_react.default.createElement(_styles.EditProfileButton, {
    onClick: function onClick() {
      return setOpenEditModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_BisPencil.default, null))), /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_HiOutlineMail.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.email) || user.email))), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_BiPhone.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement("span", null, ((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code)) && "+".concat((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code), " "), (userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)))), ((userData === null || userData === void 0 ? void 0 : userData.birthdate) || (user === null || user === void 0 ? void 0 : user.birthdate)) && /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_VscCalendar.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('BIRTHDATE', 'Birthdate')), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.birthdate) || (user === null || user === void 0 ? void 0 : user.birthdate))))) : /*#__PURE__*/_react.default.createElement(_styles.GuestProfileContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WOW_GUEST_USER_PROFILE_TITLE', 'What are you waiting for to enjoy all the benefits that Wow + has for you?')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.guestUser,
    alt: "guest user"
  })))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedItem === 'savedAddress' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("p", null, t('YOUR_ADDRESSES', 'Your addresses')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user === null || user === void 0 ? void 0 : user.addresses
  }))), selectedItem === 'businesses' && /*#__PURE__*/_react.default.createElement(_ProfileBusinesses.ProfileBusinesses, null))), openEditModal && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openEditModal,
    onClose: function onClose() {
      return setOpenEditModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfileEdit.ProfileEdit, _extends({}, props, {
    user: user,
    onCancel: function onCancel() {
      return setOpenEditModal(false);
    }
  }))));
};

exports.UserProfileUI = UserProfileUI;

var UserProfile = function UserProfile(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, UserProfileProps);
};

exports.UserProfile = UserProfile;