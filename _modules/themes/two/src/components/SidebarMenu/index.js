"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IosMenu = _interopRequireDefault(require("@meronex/icons/ios/IosMenu"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _AiOutlineLogin = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLogin"));

var _AiOutlineUserAdd = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUserAdd"));

var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));

var _AiOutlineHome = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineHome"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));

var _VscAccount = _interopRequireDefault(require("@meronex/icons/vsc/VscAccount"));

var _HiOutlineShoppingBag = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineShoppingBag"));

var _orderingComponents = require("ordering-components");

var _useOutsideClick = require("../../../../../hooks/useOutsideClick");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _LogoutButton = require("../LogoutButton");

var _LanguageSelector = require("../LanguageSelector");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SidebarMenu = function SidebarMenu(props) {
  var _options$address, _options$address3, _options$address4;

  var sideBarRef = (0, _react.useRef)(null);
  var configTypes = props.configTypes;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      options = _useOrder2[0].options;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var isHome = window.location.pathname === '/' || window.location.pathname === '/home';

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    actionSidebar(false);
    setIsMenuOpen(false);
  };

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    document.getElementById('sidebar_menu').style.width = value ? width > 489 ? '340px' : '100vw' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh';
      } else {
        document.getElementById('sidebar_menu').style.width = '340px';
      }
    }
  }, [width]);
  (0, _useOutsideClick.useOutsideClick)(sideBarRef, function () {
    actionSidebar(false);
    setIsMenuOpen(false);
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!isHome || isHome && auth) && /*#__PURE__*/_react.default.createElement(_styles.Container, {
    auth: auth
  }, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    isHome: isHome,
    auth: auth,
    "aria-label": "menu",
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_IosMenu.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    ref: sideBarRef,
    id: "sidebar_menu",
    isHome: isHome
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    isHome: isHome,
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), !(isHome && !(options !== null && options !== void 0 && (_options$address = options.address) !== null && _options$address !== void 0 && _options$address.location)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address2;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address2 = options.address) !== null && _options$address2 !== void 0 && _options$address2.location ? 'delivery' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address3 = options.address) !== null && _options$address3 !== void 0 && _options$address3.location ? /*#__PURE__*/_react.default.createElement(_BiStore.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineHome.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/delivery'
  }, options !== null && options !== void 0 && (_options$address4 = options.address) !== null && _options$address4 !== void 0 && _options$address4.location ? t('DELIVERY', 'Delivery') : t('HOME', 'Home'))))), configTypes.includes(2) && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address5;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address5 = options.address) !== null && _options$address5 !== void 0 && _options$address5.location ? 'pickup' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/pickup'
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineShoppingBag.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/pickup'
  }, t('PICKUP', 'Pickup'))))), configTypes.includes(3) && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address6;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address6 = options.address) !== null && _options$address6 !== void 0 && _options$address6.location ? 'eatin' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/eatin'
  }, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/eatin'
  }, t('EAT_IN', 'Eat in'))))), configTypes.includes(4) && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address7;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address7 = options.address) !== null && _options$address7 !== void 0 && _options$address7.location ? 'curbside' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/curbside'
  }, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/curbside'
  }, t('CURBSIDE', 'Curbside'))))), configTypes.includes(5) && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address8;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address8 = options.address) !== null && _options$address8 !== void 0 && _options$address8.location ? 'drivethru' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/drivethru'
  }, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/drivethru'
  }, t('DRIVE_THRU', 'Drive thru')))))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/profile/orders'
  }, /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/profile/orders'
  }, t('ORDERS', 'Orders'))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement(_VscAccount.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ACCOUNT', 'Account')), /*#__PURE__*/_react.default.createElement("span", null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname))))), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    onCustomClick: function onCustomClick() {
      return actionSidebar(false);
    }
  })), !auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLogin.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, t('SIGN_IN', 'Sign in'))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/signup'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineUserAdd.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/signup'
  }, t('SIGNUP', 'Sign up')))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, {
    isHome: isHome
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapLanguageSelector, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)))));
};

exports.SidebarMenu = SidebarMenu;