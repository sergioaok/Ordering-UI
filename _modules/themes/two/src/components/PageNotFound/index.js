"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFound = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PageNotFound = function PageNotFound() {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera, _theme$images4, _theme$images4$genera;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  return /*#__PURE__*/_react.default.createElement(_styles.PageNotFoundContainer, {
    width: width
  }, /*#__PURE__*/_react.default.createElement(_styles.PageNotFoundText, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAGE_NOT_FOUND', 'PAGE NOT FOUND')), ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFoundLighting) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.notFoundLighting,
    alt: "lighting",
    height: "40",
    width: "40",
    loading: "lazy"
  })), ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.notFound404) && /*#__PURE__*/_react.default.createElement(_styles.PageNotFoundImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$genera = _theme$images4.general) === null || _theme$images4$genera === void 0 ? void 0 : _theme$images4$genera.notFound404,
    alt: "error404",
    width: "300",
    height: "300",
    loading: "lazy"
  })));
};

exports.PageNotFound = PageNotFound;