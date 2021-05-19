"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountManage = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccountManage = function AccountManage(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MANAGE_ACCOUNT', 'Manage Account')), /*#__PURE__*/_react.default.createElement(_styles.AccountDataSection, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ACCOUNT_DATA', 'Account Data')), /*#__PURE__*/_react.default.createElement("p", null, t('ACCOUNT_REQUEST', 'You can request an archive of your personal information. We’ll notify you when it’s ready to download.')), /*#__PURE__*/_react.default.createElement("button", null, t('REQUEST_ARCHIVE', 'Request Archive'))), /*#__PURE__*/_react.default.createElement(_styles.AccountDeleteSection, null, /*#__PURE__*/_react.default.createElement("h3", null, t('DELETE_ACCOUNT', 'Delete Account')), /*#__PURE__*/_react.default.createElement("p", null, t('ACCOUNT_DELETE_REQUEST', 'You can request to have your account deleted and personal information removed. If you have both a Ordering account, then the information associated with both will be affected to the extent we can identify that the accounts are owned by the same user.')), /*#__PURE__*/_react.default.createElement("button", null, t('DELETE_ACCOUNT', 'Delete Account'))));
};

exports.AccountManage = AccountManage;