"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformation = exports.BusinessInformationUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../../../../utils");

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _BusinessReviews = require("../BusinessReviews");

var _Modal = require("../Modal");

var _styles = require("./styles");

var _Tabs = require("../../styles/Tabs");

var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));

var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));

var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));

var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _AutoScroll = require("../AutoScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessInformationUI = function BusinessInformationUI(props) {
  var _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _theme$images3, _theme$images3$dummie, _business$reviews, _orderState$options, _business$reviews2, _configs$google_maps_, _business$reviews3, _business$reviews4, _business$reviews5;

  var business = props.business,
      getBusinessType = props.getBusinessType,
      optimizeImage = props.optimizeImage,
      businessLocation = props.businessLocation,
      businessSchedule = props.businessSchedule,
      businessPhotos = props.businessPhotos,
      businessVideos = props.businessVideos,
      onClose = props.onClose;
  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)('General Info'),
      _useState2 = _slicedToArray(_useState, 2),
      tabValue = _useState2[0],
      setTabValue = _useState2[1];

  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDistance = _useUtils2$.parseDistance;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalImage = _useState4[0],
      setModalImage = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;

    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };

    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };

  var handleModalImage = function handleModalImage(src) {
    setImage(src);
    setModalImage(true);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.BusinessInformationContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, null, /*#__PURE__*/_react.default.createElement("img", {
    src: business.header,
    alt: "business-image",
    width: "444px",
    height: "250px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessBasicContent, null, ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage ? optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit') : (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "start"
  }), business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)), getBusinessType && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, getBusinessType())), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0))))))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, business.reviews && /*#__PURE__*/_react.default.createElement(_styles.FlexTabs, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabValue('General Info');
    },
    active: tabValue === 'General Info'
  }, t('GENERAL_INFO', 'General Info')), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabValue('Reviews');
    },
    active: tabValue === 'Reviews'
  }, t('REVIEWS', 'Reviews')))), tabValue === 'General Info' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business.about && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_ABOUT', 'Business short description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.about)), business.description && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_DESCRIPTION', 'Business description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.description)), businessLocation.location && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_LOCATION', 'Business location')), businessLocation.location && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: businessLocation.location,
    mapControls: businessLocation.googleMapsControls || business.googleMapsControls
  }))), (businessSchedule === null || businessSchedule === void 0 ? void 0 : businessSchedule.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_OPENING_TIME', 'Business Opening Time')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    modal: true
  }, businessSchedule.map(function (schedule, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[i]), /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].open)), /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].close)));
  }))))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, t('DELIVERY_TIME', 'Delivery Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("h5", null, t('PICKUP_TIME', 'Pickup Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))))), (businessPhotos === null || businessPhotos === void 0 ? void 0 : businessPhotos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')), /*#__PURE__*/_react.default.createElement("div", null, businessPhotos.map(function (photo, i) {
    return /*#__PURE__*/_react.default.createElement("img", {
      key: i,
      src: photo.file,
      alt: "photo-".concat(i),
      width: "191",
      height: "128",
      onClick: function onClick() {
        return handleModalImage(photo.file);
      },
      loading: "lazy"
    });
  }))), (businessVideos === null || businessVideos === void 0 ? void 0 : businessVideos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_VIDEOS', 'Business Videos')), /*#__PURE__*/_react.default.createElement("div", null, businessVideos.map(function (video, i) {
    return /*#__PURE__*/_react.default.createElement("iframe", {
      key: i,
      src: (0, _utils.formatUrlVideo)(video.video),
      width: "191",
      height: "128",
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true
    });
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.reviews) && /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
    businessId: business.id,
    reviews: (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.reviews,
    businessName: business.name,
    stars: (_business$reviews5 = business.reviews) === null || _business$reviews5 === void 0 ? void 0 : _business$reviews5.total
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    onClose: function onClose() {
      return setModalImage(false);
    },
    open: modalImage,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true,
    height: "auto"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return setModalImage(false);
    }
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    width: "320px",
    height: "180px",
    loading: "lazy"
  }))));
};

exports.BusinessInformationUI = BusinessInformationUI;

var BusinessInformation = function BusinessInformation(props) {
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };

  var BusinessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI,
    googleMapsControls: googleMapsControls
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessInformation, BusinessInformationProps);
};

exports.BusinessInformation = BusinessInformation;