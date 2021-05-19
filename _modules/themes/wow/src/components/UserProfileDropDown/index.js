"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileDropDown = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _FaSignOutAlt = _interopRequireDefault(require("@meronex/icons/fa/FaSignOutAlt"));

var _styledComponents = require("styled-components");

var _BisUser = _interopRequireDefault(require("@meronex/icons/bi/BisUser"));

var _RiBankCardFill = _interopRequireDefault(require("@meronex/icons/ri/RiBankCardFill"));

var _HiLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiLocationMarker"));

var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));

var _FaHandHoldingHeart = _interopRequireDefault(require("@meronex/icons/fa/FaHandHoldingHeart"));

var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));

var _BiLogIn = _interopRequireDefault(require("@meronex/icons/bi/BiLogIn"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserProfileDropDown = function UserProfileDropDown(props) {
  var _theme$images, _theme$images$general;

  var auth = props.auth,
      selectedItem = props.selectedItem,
      handleChangeItem = props.handleChangeItem;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !auth && /*#__PURE__*/_react.default.createElement(_styles.Item, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BiLogIn.default, {
    color: "#85C347"
  })), /*#__PURE__*/_react.default.createElement("span", null, t('LOGIN', 'Login'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'myProfile',
    onClick: function onClick() {
      return handleChangeItem('myProfile');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BisUser.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_PROFILE', 'My profile'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_RiBankCardFill.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PAYMENT_METHODS', 'Payment Methods'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.wowCard,
    alt: "wow-card"
  })), /*#__PURE__*/_react.default.createElement("span", null, t('ADD_WOW_CARD', 'Add Wow card'))), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'savedAddress',
    onClick: function onClick() {
      return handleChangeItem('savedAddress');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_ADDRESSES', 'My Addresses')))), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'businesses',
    onClick: function onClick() {
      return handleChangeItem('businesses');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BiStore.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('BUSINESSES', 'Businesses'))), /*#__PURE__*/_react.default.createElement("h1", null, t('INFORMATION_AND_SUPPORT', 'Information and support')), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'help',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'help'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('HELP', 'Help'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_FaHandHoldingHeart.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_OWN', 'My Own'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('ABOUT_WOW', 'About Wow'))), auth && /*#__PURE__*/_react.default.createElement(ProfileLogout, null));
};

exports.UserProfileDropDown = UserProfileDropDown;

var ProfileLogoutUI = function ProfileLogoutUI(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;

  var handleClick = function handleClick() {
    deleteUserCustomer(true);
    props.handleLogoutClick();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.LogoutContainer, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_FaSignOutAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('LOGOUT', 'Logout')));
};

var ProfileLogout = function ProfileLogout(props) {
  var logoutActionProps = {
    UIComponent: ProfileLogoutUI
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};