"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificBusiness = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _HiLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiLocationMarker"));

var _MdcClockTimeThree = _interopRequireDefault(require("@meronex/icons/mdc/MdcClockTimeThree"));

var _MdcSilverwareForkKnife = _interopRequireDefault(require("@meronex/icons/mdc/MdcSilverwareForkKnife"));

var _FaPhoneAlt = _interopRequireDefault(require("@meronex/icons/fa/FaPhoneAlt"));

var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SpecificBusiness = function SpecificBusiness(props) {
  var _theme$images, _theme$images$dummies, _business$today, _business$today$lapse, _business$today$lapse2, _business$today2, _business$today2$laps, _business$today2$laps2, _business$today3, _business$today3$laps, _business$today3$laps2, _business$today4, _business$today4$laps, _business$today4$laps2;

  var business = props.business;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement("h1", null, business === null || business === void 0 ? void 0 : business.name)), /*#__PURE__*/_react.default.createElement(_styles.BuisinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.address))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_MdcClockTimeThree.default, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "open"
  }, t('OPEN', 'Open')), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 ? void 0 : (_business$today = business.today) === null || _business$today === void 0 ? void 0 : (_business$today$lapse = _business$today.lapses[0]) === null || _business$today$lapse === void 0 ? void 0 : (_business$today$lapse2 = _business$today$lapse.open) === null || _business$today$lapse2 === void 0 ? void 0 : _business$today$lapse2.hour, business === null || business === void 0 ? void 0 : (_business$today2 = business.today) === null || _business$today2 === void 0 ? void 0 : (_business$today2$laps = _business$today2.lapses[0]) === null || _business$today2$laps === void 0 ? void 0 : (_business$today2$laps2 = _business$today2$laps.open) === null || _business$today2$laps2 === void 0 ? void 0 : _business$today2$laps2.minute)), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 ? void 0 : (_business$today3 = business.today) === null || _business$today3 === void 0 ? void 0 : (_business$today3$laps = _business$today3.lapses[0]) === null || _business$today3$laps === void 0 ? void 0 : (_business$today3$laps2 = _business$today3$laps.close) === null || _business$today3$laps2 === void 0 ? void 0 : _business$today3$laps2.hour, business === null || business === void 0 ? void 0 : (_business$today4 = business.today) === null || _business$today4 === void 0 ? void 0 : (_business$today4$laps = _business$today4.lapses[0]) === null || _business$today4$laps === void 0 ? void 0 : (_business$today4$laps2 = _business$today4$laps.close) === null || _business$today4$laps2 === void 0 ? void 0 : _business$today4$laps2.minute))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_MdcSilverwareForkKnife.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('MENU', 'Menu')), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null), business === null || business === void 0 ? void 0 : business.menus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: menu.id
    }, menu === null || menu === void 0 ? void 0 : menu.name, ",");
  })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_FaPhoneAlt.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.phone)));
};

exports.SpecificBusiness = SpecificBusiness;