"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _reactHookForm = require("react-hook-form");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

var _Image = require("../Image");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));

var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _utils = require("../../../../../utils");

var _Confirm = require("../Confirm");

var _Modal = require("../Modal");

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

var MessagesUI = function MessagesUI(props) {
  var _messages$messages, _order$business, _theme$images, _theme$images$dummies, _order$driver, _order$business2, _order$driver2, _messagesToShow$messa2;

  var order = props.order,
      messages = props.messages,
      handleSend = props.handleSend,
      image = props.image,
      message = props.message,
      sendMessage = props.sendMessage,
      setImage = props.setImage,
      setMessage = props.setMessage,
      business = props.business,
      driver = props.driver,
      messagesToShow = props.messagesToShow,
      readMessages = props.readMessages;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      getTimeAgo = _useUtils2$.getTimeAgo;

  var buttonRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)({
    open: false,
    src: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      modalImage = _useState4[0],
      setModalImage = _useState4[1];

  var imageRef = (0, _react.useRef)(null);

  var handleModalImage = function handleModalImage(src) {
    setModalImage({
      open: true,
      src: src
    });
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (!sendMessage.loading && sendMessage !== null && sendMessage !== void 0 && sendMessage.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR', 'Error')]
      });
    }

    if (sendMessage.loading) {
      clearInputs();
    }
  }, [sendMessage]);
  (0, _react.useEffect)(function () {
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
    readMessages && readMessages();
  }, [messages === null || messages === void 0 ? void 0 : (_messages$messages = messages.messages) === null || _messages$messages === void 0 ? void 0 : _messages$messages.length]);
  (0, _react.useEffect)(function () {
    setImage(null);
  }, [alertState.open]);

  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };

  var removeImage = function removeImage(e) {
    setImage(null);
    imageRef.current.value = '';
  };

  var onChangeImage = function onChangeImage(e) {
    var _files$;

    var files = e.target.files[0];
    var reader = new window.FileReader();
    reader.readAsDataURL(files);

    reader.onload = function () {
      setImage(reader.result);
    };

    var type = files.type.split('/')[0];

    if (type !== 'image') {
      setAlertState({
        open: true,
        content: t('ERROR_ONLY_IMAGES', 'Only images can be accepted')
      });
      return;
    }

    if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
      setAlertState({
        open: true,
        content: t('IMAGE_MESSAGES_MAXIMUM_SIZE', 'Images larger than 2 megabytes cannot be sent')
      });
      return;
    }

    buttonRef.current.focus();

    reader.onerror = function (error) {
      console.log(error);
      setAlertState({
        open: true,
        content: t('ERROR_READ_FILE', 'Failed to read file')
      });
    };
  };

  var getStatus = function getStatus(s) {
    var status = parseInt(s);

    switch (status) {
      case 0:
        return 'ORDER_STATUS_PENDING';

      case 1:
        return 'ORDERS_COMPLETED';

      case 2:
        return 'ORDER_REJECTED';

      case 3:
        return 'ORDER_STATUS_IN_BUSINESS';

      case 4:
        return 'ORDER_READY';

      case 5:
        return 'ORDER_REJECTED_RESTAURANT';

      case 6:
        return 'ORDER_STATUS_CANCELLEDBYDRIVER';

      case 7:
        return 'ORDER_STATUS_ACCEPTEDBYRESTAURANT';

      case 8:
        return 'ORDER_CONFIRMED_ACCEPTED_BY_DRIVER';

      case 9:
        return 'ORDER_PICKUP_COMPLETED_BY_DRIVER';

      case 10:
        return 'ORDER_PICKUP_FAILED_BY_DRIVER';

      case 11:
        return 'ORDER_DELIVERY_COMPLETED_BY_DRIVER';

      case 12:
        return 'ORDER_DELIVERY_FAILED_BY_DRIVER';

      default:
        return status;
    }
  };

  var getLevel = function getLevel(level) {
    switch (level) {
      case 0:
        return t('ADMIN', 'Admin');

      case 1:
        return t('BUSINESS', 'Business');

      case 2:
        return t('DRIVER', 'Driver');

      case 3:
        return t('CUSTOMER', 'Customer');
    }
  };

  var clearInputs = function clearInputs() {
    var input = document.getElementById('message');

    if (input) {
      input.value = '';
    }

    removeImage();
    setMessage('');
  };

  var onSubmit = function onSubmit(values) {
    handleSend();
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var MapMessages = function MapMessages(_ref) {
    var messages = _ref.messages;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, messages === null || messages === void 0 ? void 0 : messages.messages.map(function (message) {
      var _message$change, _message$driver, _message$driver2, _messagesToShow$messa, _message$can_see, _message$can_see2;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: message.id
      }, message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
        key: message.id
      }, ((_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.attribute), " ", t('CHANGED_FROM', 'Changed from'), " ", ' ', message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, t(getStatus(parseInt(message.change.old, 10)))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", t('TO', 'to'), " ", ' ', " ", /*#__PURE__*/_react.default.createElement("strong", null, t(getStatus(parseInt(message.change.new, 10)))), " "), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, message.change.new ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname), t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'Driver unassigned')), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), ((messagesToShow === null || messagesToShow === void 0 ? void 0 : (_messagesToShow$messa = messagesToShow.messages) === null || _messagesToShow$messa === void 0 ? void 0 : _messagesToShow$messa.length) || (message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes('2')) && business || (message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes('4')) && driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", getLevel(message.author.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
        name: "image"
      }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", getLevel(message.author.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
        src: message.source,
        onClick: function onClick() {
          return handleModalImage(message.source);
        },
        alt: "chat-image",
        width: "168px",
        height: "300px"
      })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message.author.name, " (", getLevel(message.author.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
        name: "image"
      }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.PartnerName, null, message.author.name, " (", getLevel(message.author.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
        src: message.source,
        onClick: function onClick() {
          return handleModalImage(message.source);
        },
        alt: "chat-image",
        width: "168px",
        height: "300px"
      })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))));
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, null, /*#__PURE__*/_react.default.createElement(_styles.Image, null, business && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: ((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), driver && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  })), business && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online'))), driver && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.name), /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online')))), /*#__PURE__*/_react.default.createElement(_styles.Chat, {
    id: "chat"
  }, (messages === null || messages === void 0 ? void 0 : messages.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  })))), !(messages !== null && messages !== void 0 && messages.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'Via'), " ", /*#__PURE__*/_react.default.createElement("strong", null, order.app_id), ' ', /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(order.created_at)))), /*#__PURE__*/_react.default.createElement(MapMessages, {
    messages: messagesToShow !== null && messagesToShow !== void 0 && (_messagesToShow$messa2 = messagesToShow.messages) !== null && _messagesToShow$messa2 !== void 0 && _messagesToShow$messa2.length ? messagesToShow : messages
  }))), /*#__PURE__*/_react.default.createElement(_styles.SendForm, null, /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('WRITE_A_MESSAGE', 'Write a message'),
    onChange: onChangeMessage,
    name: "message",
    id: "message",
    ref: register({
      required: !image
    }),
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.SendImage, {
    htmlFor: "chat_image",
    hidden: image
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "image",
    id: "chat_image",
    accept: "image/png,image/jpg,image/jpeg",
    onChange: onChangeImage,
    ref: imageRef
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: (sendMessage === null || sendMessage === void 0 ? void 0 : sendMessage.loading) || message === '' && !image || (messages === null || messages === void 0 ? void 0 : messages.loading),
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_IosSend.default, null), sendMessage.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('SENDING_MESSAGE', 'Sending...')) : /*#__PURE__*/_react.default.createElement("span", null, t('SEND', 'Send')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    onClose: function onClose() {
      return setModalImage(_objectSpread(_objectSpread({}, modalImage), {}, {
        open: false
      }));
    },
    open: modalImage.open,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true,
    height: "auto"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return setModalImage(_objectSpread(_objectSpread({}, modalImage), {}, {
        open: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: modalImage.src,
    width: "320px",
    height: "180px",
    loading: "lazy"
  }))));
};

var Messages = function Messages(props) {
  var MessagesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MessagesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Messages, MessagesProps);
};

exports.Messages = Messages;