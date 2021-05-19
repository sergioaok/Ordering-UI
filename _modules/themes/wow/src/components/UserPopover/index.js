"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactPopper = require("react-popper");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _FaRegAddressCard = _interopRequireDefault(require("@meronex/icons/fa/FaRegAddressCard"));

var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));

var _FaSignOutAlt = _interopRequireDefault(require("@meronex/icons/fa/FaSignOutAlt"));

var _MdcMenuRightOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcMenuRightOutline"));

var _RiStarSmileLine = _interopRequireDefault(require("@meronex/icons/ri/RiStarSmileLine"));

var _MdFavoriteBorder = _interopRequireDefault(require("@meronex/icons/md/MdFavoriteBorder"));

var _BiHelpCircle = _interopRequireDefault(require("@meronex/icons/bi/BiHelpCircle"));

var _styledComponents = require("styled-components");

var _style = require("../../../../../components/Dropdown/style");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var IconOption = function IconOption(_ref) {
  var value = _ref.value;

  switch (value) {
    case 'orders':
      return /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null);

    case 'profits':
      return /*#__PURE__*/_react.default.createElement(_RiStarSmileLine.default, null);

    case 'profile':
      return /*#__PURE__*/_react.default.createElement(_FaRegAddressCard.default, null);

    case 'favorites':
      return /*#__PURE__*/_react.default.createElement(_MdFavoriteBorder.default, null);

    case 'help':
      return /*#__PURE__*/_react.default.createElement(_BiHelpCircle.default, null);

    default:
      return /*#__PURE__*/_react.default.createElement(_MdcMenuRightOutline.default, null);
  }
};

var optionsDefault = [{
  name: 'orders',
  pathname: '/profile/orders'
}, {
  name: 'profits',
  pathname: '/profits'
}, {
  name: 'profile',
  pathname: '/profile'
}, {
  name: 'favorites',
  pathname: '/'
}, {
  name: 'help',
  pathname: '/help'
}];

var UserPopover = function UserPopover(props) {
  var _props$beforeElements, _props$beforeComponen, _sessionState$user, _sessionState$user2, _sessionState$user3, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera, _props$afterComponent, _props$afterElements;

  var open = props.open,
      isHome = props.isHome,
      optionsList = props.optionsList,
      withLogout = props.withLogout,
      isCustomerMode = props.isCustomerMode;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      sessionState = _useSession2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var theme = (0, _styledComponents.useTheme)();
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var options = isCustomerMode ? optionsDefault.filter(function (option) {
    return option.name === 'profile';
  }) : optionsList || optionsDefault;
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
      attributes = popper.attributes,
      forceUpdate = popper.forceUpdate;
  (0, _react.useEffect)(function () {
    forceUpdate && forceUpdate();
  }, [open, sessionState]);

  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;

    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));

    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };

  var handleGoToPage = function handleGoToPage(page) {
    events.emit('go_to_page', {
      page: page
    });
    props.onClick && props.onClick();
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    minWidth: '150px'
  });

  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    isPhoto: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    isHome: isHome,
    ref: referenceElement,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.name)), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, options && options.length > 0 && options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: option.name,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, /*#__PURE__*/_react.default.createElement(IconOption, {
      value: option.name
    }), " ", t(option.name.toUpperCase(), (0, _utils.capitalize)(option.name)));
  }), withLogout && /*#__PURE__*/_react.default.createElement(PopoverListItemLogout, {
    onClose: props.onClose
  }), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DownloadAppInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype Invert",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.AppLinkWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLink, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_1_HREF'),
    "aria-label": "GooglePlay"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Google play",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.googlePlay,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLink, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_2_HREF'),
    "aria-label": "AppStore"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "App store",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.appStore,
    loading: "lazy"
  })))))), /*#__PURE__*/_react.default.createElement(_styles.PopoverArrow, {
    key: "arrow",
    ref: arrowElement,
    style: styles.arrow
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

exports.UserPopover = UserPopover;

var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;

  var handleClick = function handleClick() {
    deleteUserCustomer(true);
    props.handleLogoutClick();
    props.onClose && props.onClose();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.PopoverListItem, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_FaSignOutAlt.default, null), " ", t('LOGOUT', 'Logout'));
};

var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};