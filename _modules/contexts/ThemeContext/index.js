"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        direction: rtl;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    @media (min-width: 578px) {\n      /** Mozilla scrollbar*/\n      * {\n        scrollbar-color: #CCC !important;\n        scrollbar-width: thin !important;\n      }\n\n      /** Scrollbar for browser based on webkit */\n      ::-webkit-scrollbar {\n        width: 6px;\n        height: 0px;\n      }\n      ::-webkit-scrollbar-thumb {\n        background: #CCCCCC;\n      }\n      ::-webkit-scrollbar-thumb:hover {\n        background: #AFAFAF;\n      }\n      ::-webkit-scrollbar-thumb:active {\n        background: #6b6b6b;\n      }\n      ::-webkit-scrollbar-track {\n        background: rgba(204, 204, 204, 0.3);\n      }\n    }\n\n    body {\n      font-family: '", "', sans-serif;\n      margin: 0;\n      background-color: ", ";\n      color: ", ";\n\n      ", "\n    }\n\n    input, textarea, button {\n      font-family: inherit;\n    }\n\n    .popup-backdrop {\n      background-color: rgba(0, 0, 0, 0.4);\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 2000;\n    }\n\n    .popup-component {\n      background-color: rgba(0, 0, 0, 0.3);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
var ThemeContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Api provider to manage theme
 * @param {props} props
 */

exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(_ref) {
  var _theme$fonts$primary;

  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useState = (0, _react.useState)(props.theme),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), ((_theme$fonts$primary = theme.fonts.primary) === null || _theme$fonts$primary === void 0 ? void 0 : _theme$fonts$primary.name) || 'Helvetica', theme.colors.backgroundPage, theme.colors.colorPage, theme.rtl && (0, _styledComponents.css)(_templateObject2()));
  (0, _react.useEffect)(function () {
    var fonts = Object.entries(theme.fonts || {});
    fonts.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          fontFamily = _ref3[1];

      if (!window.document.getElementById("".concat(name, "-font-styles"))) {
        var font = window.document.createElement('link');
        font.id = "".concat(name, "-font-styles");
        font.rel = 'stylesheet';
        font.async = true;
        font.defer = true;
        font.href = "https://fonts.googleapis.com/css2?family=".concat(fontFamily.name, ":wght@").concat(fontFamily.weights.join(';'), "&display=swap");
        window.document.body.appendChild(font);
      }
    });
  }, []);

  var update = function update(theme) {
    setTheme(theme);
  };

  var merge = function merge(partTheme) {
    setTheme(_objectSpread(_objectSpread({}, theme), partTheme));
  };

  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: [theme, {
      update: update,
      merge: merge
    }]
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), children));
};
/**
 * Hook to get theme state
 */


exports.ThemeProvider = ThemeProvider;

var useTheme = function useTheme() {
  var themeManager = (0, _react.useContext)(ThemeContext);
  return themeManager || [{}];
};

exports.useTheme = useTheme;