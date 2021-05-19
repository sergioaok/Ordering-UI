"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ticket = void 0;

var _react = _interopRequireWildcard(require("react"));

var _OrderBill = require("../OrderBill");

var _styledComponents = require("styled-components");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _orderingComponents = require("ordering-components");

var _reactToPrint = require("react-to-print");

var _jspdf = _interopRequireDefault(require("jspdf"));

var _domToImage = _interopRequireDefault(require("dom-to-image"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Ticket = function Ticket(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _theme$images2, _theme$images2$logos, _order$summary, _order$business, _order$business2, _props$afterComponent, _props$afterElements;

  var order = props.order;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      parsePrice = _useUtils2$.parsePrice;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var printRef = (0, _react.useRef)();
  var handlePrint = (0, _reactToPrint.useReactToPrint)({
    content: function content() {
      return printRef.current;
    }
  });

  var savePDF = function savePDF() {
    var input = document.getElementById('doc');
    var pdf = new _jspdf.default('p', 'px', 'a4');
    var width = pdf.internal.pageSize.width;
    var height = pdf.internal.pageSize.height;

    if (pdf) {
      _domToImage.default.toPng(input).then(function (imgData) {
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('ticket.pdf');
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.TicketContainer, {
    ref: printRef,
    id: "doc"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.ticketHero
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TopContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderBillInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("strong", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total))), /*#__PURE__*/_react.default.createElement("div", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })))), /*#__PURE__*/_react.default.createElement(_styles.TitleConatiner, null, /*#__PURE__*/_react.default.createElement("h1", null, t('THANKS_ORDER', 'Thanks for your order')), /*#__PURE__*/_react.default.createElement("h1", null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname, " ")), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name, " (", order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.address, ")"))), /*#__PURE__*/_react.default.createElement(_styles.TicketContent, null, order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      isOrdersView: true,
      key: product.id,
      product: product
    });
  }), /*#__PURE__*/_react.default.createElement(_OrderBill.OrderBill, {
    isTicket: true,
    summary: order === null || order === void 0 ? void 0 : order.summary
  }))), /*#__PURE__*/_react.default.createElement(_styles.ExportMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MethodWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handlePrint();
    }
  }, t('PRINT', 'Print'))), /*#__PURE__*/_react.default.createElement(_styles.MethodWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return savePDF();
    }
  }, t('DOWNLOAD_PDF', 'Download pdf')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.Ticket = Ticket;