"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessReviews = exports.BusinessReviewsUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Select = require("../../styles/Select");

var _AiOutlineStar = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineStar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Score = function Score(_ref) {
  var star = _ref.star,
      text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(_styles.ScoreDiv, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
    color: "#D81212"
  }), " ", star), /*#__PURE__*/_react.default.createElement("p", null, text));
};

var BusinessReviewsUI = function BusinessReviewsUI(props) {
  var businessName = props.businessName,
      stars = props.stars,
      reviewsList = props.reviewsList,
      handleClickOption = props.handleClickOption;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var values = ['all', 1, 2, 3, 4, 5];
  var options = reviewsList.loading ? [] : values.map(function (value) {
    if (value === 'all') {
      return {
        value: value,
        content: value.toUpperCase(),
        showOnSelected: value.toUpperCase()
      };
    } else {
      return {
        value: value,
        content: value,
        showOnSelected: value
      };
    }
  });
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessReviewsContainer, null, reviewsList.error ? /*#__PURE__*/_react.default.createElement("h2", null, t('ERROR_UNKNOWN', 'An error has ocurred')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewOf, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement("h3", null, t('REVIEWS_OF', 'Reviews of'), " ", businessName) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200
  }), !reviewsList.loading ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    name: "desktop",
    options: options,
    defaultValue: options[0].value,
    onChange: function onChange(val) {
      return handleClickOption(val);
    },
    notAsync: true,
    InitialIcon: _AiOutlineStar.default
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperStars, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
    color: "#D81212"
  }), stars) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSelect, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: options,
    defaultValue: options[0].value,
    onChange: function onChange(val) {
      return handleClickOption(val);
    },
    notAsync: true,
    InitialIcon: _AiOutlineStar.default
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    id: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
    color: "#D81212"
  }), stars) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  })), !reviewsList.loading ? reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.Review, {
      key: review.id,
      id: "review"
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
      color: "#D81212"
    }), " ", review.total)), /*#__PURE__*/_react.default.createElement(_styles.Comment, null, /*#__PURE__*/_react.default.createElement("p", {
      title: review.comment
    }, review.comment)))), /*#__PURE__*/_react.default.createElement(_styles.ScoresContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Scores, null, /*#__PURE__*/_react.default.createElement(Score, {
      star: review.quality,
      text: t('REVIEW_QUALITY', 'Quality of products')
    }), /*#__PURE__*/_react.default.createElement(Score, {
      star: review.delivery,
      text: t('REVIEW_PUNCTUALITY', 'Punctuality')
    }), /*#__PURE__*/_react.default.createElement(Score, {
      star: review.service,
      text: t('REVIEW_SERVICE', 'Service')
    }), /*#__PURE__*/_react.default.createElement(Score, {
      star: review.package,
      text: t('REVIEW_PRODUCT_PACKAGING', 'Product Packaging')
    }))));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(2)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 50
    })));
  })), !reviewsList.loading && (reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.ReviewsNotFound, null, t('REVIEWS_NOT_FOUND', 'Reviews Not Found')))));
};

exports.BusinessReviewsUI = BusinessReviewsUI;

var BusinessReviews = function BusinessReviews(props) {
  var BusinessReviewProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessReviewsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessReviews, BusinessReviewProps);
};

exports.BusinessReviews = BusinessReviews;