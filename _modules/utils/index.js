"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSeconds = exports.verifyDecimals = exports.sortInputFields = exports.fieldsToSort = exports.getHourMin = exports.bytesConverter = exports.getTraduction = exports.flatArray = exports.getGoogleMapImage = exports.capitalize = exports.convertHoursToMinutes = exports.formatUrlVideo = exports.scrollTo = exports.getIconCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));

var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));

var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var getIconCard = function getIconCard() {
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand.toLowerCase();

  switch (value) {
    case 'visa':
      return /*#__PURE__*/_react.default.createElement(_FaCcVisa.default, null);

    case 'mastercard':
      return /*#__PURE__*/_react.default.createElement(_FaCcMastercard.default, null);

    default:
      return /*#__PURE__*/_react.default.createElement(_FaCreditCard.default, null);
  }
};
/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */


exports.getIconCard = getIconCard;

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */


var scrollTo = function scrollTo(element, to, duration) {
  if (!element) return;
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;

    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};
/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */


exports.scrollTo = scrollTo;

var formatUrlVideo = function formatUrlVideo(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var id = match && match[7].length === 11 ? match[7] : false;
  return "https://www.youtube-nocookie.com/embed/".concat(id);
};
/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */


exports.formatUrlVideo = formatUrlVideo;

var convertHoursToMinutes = function convertHoursToMinutes(time) {
  if (!time) return '0min';

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      minute = _time$split2[1];

  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result, "min");
};
/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */


exports.convertHoursToMinutes = convertHoursToMinutes;

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Function to return a static google maps image based in location
 * @param {object} param object with latitude and logitude
 */


exports.capitalize = capitalize;

var getGoogleMapImage = function getGoogleMapImage(location, apiKey) {
  var lat = location === null || location === void 0 ? void 0 : location.lat;
  var lng = location === null || location === void 0 ? void 0 : location.lng;
  return "https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=".concat(lat, ",").concat(lng, "&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C").concat(lat, ",").concat(lng, "&key=").concat(apiKey);
};
/**
 * _Function to flat array of one level
 * @param {Array} arr to flat
 */


exports.getGoogleMapImage = getGoogleMapImage;

var flatArray = function flatArray(arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
};
/**
 * Function to return the traduction depending of a key 't'
 * @param {string} key for traduction
 */


exports.flatArray = flatArray;

var getTraduction = function getTraduction(key) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var keyList = {
    // Add the key and traduction that you need below
    ERROR_ORDER_WITHOUT_CART: 'The order was placed without a cart',
    ERROR_INVALID_COUPON: "The coupon doesn't exist",
    ERROR_IVALID_COUPON_MINIMUM: 'You must have more products in your cart to use the coupon',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_PICKUP: 'The business is too far for order type pickup',
    ERROR_PLACE_PAY_WITH_CARD2: 'An error occurred while trying to pay by card',
    ERROR_ADD_PRODUCT_BUSINESS_CLOSED: 'The business is closed at the moment',
    INTERNAL_ERROR: 'Server Error, please wait, we are working to fix it',
    PREPARED_IN: 'Preparation time',
    DELIVERY_DATETIME: 'Delivery datetime',
    ERROR_MISSING_PAYMETHOD_HOOK: 'Missing payment method hook',
    INVALID_CODE: 'Invalid verify code',
    ERROR_YOU_HAVE_NOT_CART: 'Cart not found',
    ERROR_PLACE_PAY_WITH_REDIRECT: 'An error occurred while trying to pay by redirect'
  };
  return keyList[key] ? t(key, keyList[key]) : t(key);
};
/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */


exports.getTraduction = getTraduction;

var bytesConverter = function bytesConverter(bytes) {
  return Math.floor(bytes / 1024);
};
/**
 * Function to get time in 12 hours format.
 */


exports.bytesConverter = bytesConverter;

var getHourMin = function getHourMin(hour, min) {
  var _hour;

  if (hour < 12) {
    _hour = hour < 10 ? "0".concat(hour) : "".concat(hour);
  } else {
    _hour = hour - 12 < 10 ? "0".concat(hour - 12) : "".concat(hour - 12);
  }

  var _min = min < 10 ? "0".concat(min) : "".concat(min);

  if (hour < 12) {
    return "".concat(_hour, " : ").concat(_min, " AM");
  } else {
    return "".concat(_hour, " : ").concat(_min, " PM");
  }
};
/**
 * List of fields with correct order
 */


exports.getHourMin = getHourMin;
var fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];
/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */

exports.fieldsToSort = fieldsToSort;

var sortInputFields = function sortInputFields(_ref2) {
  var fields = _ref2.fields,
      values = _ref2.values;
  var fieldsBase = fields;
  var fieldsSorted = [];
  var fieldsArray = Array.isArray(values) ? values : Object.values(values);

  if (!fieldsBase) {
    fieldsBase = fieldsToSort;
  }

  fieldsBase.forEach(function (f) {
    fieldsArray.forEach(function (field) {
      if (f === field.code) {
        fieldsSorted.push(field);
      }
    });
  });
  return fieldsSorted;
};
/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */


exports.sortInputFields = sortInputFields;

var verifyDecimals = function verifyDecimals(value, parser) {
  if (value % 1 === 0) {
    return value;
  } else {
    return parser(value);
  }
};
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */


exports.verifyDecimals = verifyDecimals;

var formatSeconds = function formatSeconds(seconds) {
  // Hours, minutes and seconds
  var hrs = ~~(seconds / 3600);
  var mins = ~~(seconds % 3600 / 60);
  var secs = ~~seconds % 60; // Output like "1:01" or "4:03:59" or "123:03:59"

  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};

exports.formatSeconds = formatSeconds;