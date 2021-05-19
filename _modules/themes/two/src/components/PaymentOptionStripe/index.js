"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionStripe = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _BsThreeDots = _interopRequireDefault(require("@meronex/icons/bs/BsThreeDots"));

var _BsCheck = _interopRequireDefault(require("@meronex/icons/bs/BsCheck"));

var _AiFillCreditCard = _interopRequireDefault(require("@meronex/icons/ai/AiFillCreditCard"));

var _BisChevronRight = _interopRequireDefault(require("@meronex/icons/bi/BisChevronRight"));

var _utils = require("../../../../../utils");

var _Modal = require("../Modal");

var _Confirm = require("../Confirm");

var _StripeElementsForm = require("../StripeElementsForm");

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _SpinnerLoader = require("../SpinnerLoader");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PaymentOptionStripeUI = function PaymentOptionStripeUI(props) {
  var _cardsList$error$;

  var defaultCardSetActionStatus = props.defaultCardSetActionStatus,
      onSelectCard = props.onSelectCard,
      onCancel = props.onCancel,
      deleteCard = props.deleteCard,
      setDefaultCard = props.setDefaultCard,
      cardDefault = props.cardDefault,
      cardsList = props.cardsList,
      handleNewCard = props.handleNewCard;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirm = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      addCartOpen = _useState4[0],
      setAddCardOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      openActionCardId = _useState8[0],
      setOpenActionCardId = _useState8[1];

  var dropdownReference = (0, _react.useRef)();

  var _handleNewCard = function _handleNewCard(card) {
    setAddCardOpen(false);
    handleNewCard(card);
    setDefaultCard(card);
  };

  var handleDeleteCard = function handleDeleteCard(card) {
    setOpen(false);
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CARD', 'Are you sure that you want to delete the card?'),
      handleOnAccept: function handleOnAccept() {
        deleteCard(card);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };

  var _handleCardClick = function _handleCardClick(card) {
    setDefaultCard(card);
    setOpen(false);
  };

  var closeActionContent = function closeActionContent(e) {
    if (open) {
      var _dropdownReference$cu;

      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));

      if (outsideDropdown) {
        setOpen(false);
      }
    }
  };

  var handleOpenActionContent = function handleOpenActionContent(card) {
    setOpen(true);
    setOpenActionCardId(card);
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', closeActionContent);
    return function () {
      document.removeEventListener('mouseup', closeActionContent);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.OptionStripeContainer, null, !token && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')), token && !cardsList.loading && cardsList.cards && cardsList.cards.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.CardItem, null, /*#__PURE__*/_react.default.createElement("span", null, t('NO_CARDS', 'No cards'))), token && cardsList.error && cardsList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$error$ = cardsList.error[0]) === null || _cardsList$error$ === void 0 ? void 0 : _cardsList$error$.message) || (cardsList === null || cardsList === void 0 ? void 0 : cardsList.error[0])
  }), token && cardsList.cards && cardsList.cards.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperItems, {
    borderBottom: true
  }, /*#__PURE__*/_react.default.createElement("p", null, t('SAVED_CARDS', 'Saved cards')), cardsList.cards.map(function (card, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CardItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "brand"
    }, (0, _utils.getIconCard)(card.brand)), /*#__PURE__*/_react.default.createElement("span", {
      className: "brandName"
    }, card.brand), /*#__PURE__*/_react.default.createElement("span", null, "...", card.last4)), /*#__PURE__*/_react.default.createElement(_styles.CardItemActions, null, card.id === (cardDefault === null || cardDefault === void 0 ? void 0 : cardDefault.id) && /*#__PURE__*/_react.default.createElement(_styles.DefaultCardItem, null, /*#__PURE__*/_react.default.createElement(_BsCheck.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DEFAULT', 'Default'))), /*#__PURE__*/_react.default.createElement(_BsThreeDots.default, {
      onClick: function onClick() {
        return handleOpenActionContent(card.id);
      }
    }), open && openActionCardId === card.id && /*#__PURE__*/_react.default.createElement(_styles.CardItemActionsContent, {
      ref: dropdownReference
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return _handleCardClick(card);
      }
    }, t('SET_DEFAULT', 'Set Default')), /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return handleDeleteCard(card);
      }
    }, t('DELETE', 'Delete')))));
  })), token && !cardsList.loading && /*#__PURE__*/_react.default.createElement(_styles.WrapperItems, {
    bottomSection: true
  }, /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PAYMENT_CARD', 'Add New Payment Card')), /*#__PURE__*/_react.default.createElement(_styles.AddActionButton, {
    onClick: function onClick() {
      return setAddCardOpen(true);
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_AiFillCreditCard.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('CREDIT/DEBIT_CARD', 'Credit/Debit Card'))), /*#__PURE__*/_react.default.createElement(_BisChevronRight.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ActionsModal, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onSelectCard(cardDefault);
    },
    disabled: !cardDefault
  }, t('ACCEPT', 'Accept')))), (defaultCardSetActionStatus === null || defaultCardSetActionStatus === void 0 ? void 0 : defaultCardSetActionStatus.loading) && /*#__PURE__*/_react.default.createElement(_styles.Layer, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, null)), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_CREDIT_OR_DEBIT_CARD', 'Add credit or debit card'),
    className: "modal-info",
    open: addCartOpen,
    onClose: function onClose() {
      return setAddCardOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    businessId: props.businessId,
    publicKey: props.publicKey,
    toSave: true,
    requirements: props.clientSecret,
    onCancel: function onCancel() {
      return setAddCardOpen(false);
    },
    onNewCard: _handleNewCard
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('CARD', 'Card'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), token && cardsList.loading && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BlockLoading, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 50
    }));
  }));
};

var PaymentOptionStripe = function PaymentOptionStripe(props) {
  var paymentOptionStripeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionStripeUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionStripe, paymentOptionStripeProps);
};

exports.PaymentOptionStripe = PaymentOptionStripe;