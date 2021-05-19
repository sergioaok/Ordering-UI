"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Confirm = require("../components/Confirm");

var _ThemeContext = require("../contexts/ThemeContext");

var _theme = _interopRequireDefault(require("../../template/theme.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configFile = {
  app_id: 'ordering-react',
  project: 'luisv4',
  api: {
    url: 'https://apiv4.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket.ordering.co'
  }
};

var ProviderMock = function ProviderMock(props) {
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeProvider, {
    theme: _theme.default
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderingProvider, {
    Alert: _Confirm.Alert,
    settings: configFile
  }, props.children));
};

var _default = ProviderMock;
exports.default = _default;