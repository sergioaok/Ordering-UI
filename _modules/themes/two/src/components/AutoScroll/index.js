"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoScroll = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _styles = require("./styles");

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _ThemeContext = require("../../../../../contexts/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AutoScroll = function AutoScroll(_ref) {
  var children = _ref.children,
      modal = _ref.modal,
      special = _ref.special,
      innerScroll = _ref.innerScroll;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      parentElement = _useState2[0],
      setParentElement = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      containerElement = _useState4[0],
      setContainerElement = _useState4[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme2 = _slicedToArray(_useTheme, 1),
      theme = _useTheme2[0];

  (0, _react.useLayoutEffect)(function () {
    var _document, _document$getElementB;

    var element = (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById('autoscroll')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.parentNode;
    element && element.parentNode.addEventListener('scroll', handleScroll);
    var containerElement = element === null || element === void 0 ? void 0 : element.parentNode;
    setParentElement(element);
    setContainerElement(containerElement);
    return function () {
      if (containerElement !== null && containerElement !== void 0 && containerElement.length) {
        containerElement.removeEventListener('scroll', handleScroll);
      }
    };
  });
  (0, _react.useEffect)(function () {
    handleScroll();
  });

  var handleScroll = function handleScroll() {
    var botonRight = document.getElementById('right-autoscroll');
    var botonLeft = document.getElementById('left-autoscroll');

    if (botonLeft || botonRight) {
      if (theme !== null && theme !== void 0 && theme.rtl) {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 < 40) {
          botonRight && botonRight.classList.add('hidden');
        } else {
          botonRight && botonRight.classList.remove('hidden');
        }

        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 > (parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 20) {
          botonLeft && botonLeft.classList.add('hidden');
        } else {
          botonLeft && botonLeft.classList.remove('hidden');
        }
      } else {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) < 40) {
          botonLeft && botonLeft.classList.add('hidden');
        } else {
          botonLeft && botonLeft.classList.remove('hidden');
        }

        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) > (parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 20) {
          botonRight && botonRight.classList.add('hidden');
        } else {
          botonRight && botonRight.classList.remove('hidden');
        }
      }
    }
  };

  var scrolling = function scrolling(left) {
    if (left) {
      containerElement.scrollBy({
        top: 0,
        left: -parentElement.offsetWidth / 10 > -200 ? -200 : -parentElement.offsetWidth / 10,
        behavior: 'smooth'
      });
    } else {
      containerElement.scrollBy({
        top: 0,
        left: +parentElement.offsetWidth / 10 < 200 ? 200 : +parentElement.offsetWidth / 10,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.AutoscrollContainer, {
    modal: modal,
    id: "autoscroll"
  }, (!special ? width < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth) + 50 : width < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth)) || (!special && innerScroll ? (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth) + 50 : (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth)) ? /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, {
    id: "left-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling(true);
    }
  }) : '', children, (!special ? width < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth) + 50 : width < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth)) || (!special && innerScroll ? (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth) + 50 : (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < (parentElement === null || parentElement === void 0 ? void 0 : parentElement.offsetWidth)) ? /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, {
    id: "right-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling();
    }
  }) : '');
};

exports.AutoScroll = AutoScroll;