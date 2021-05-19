"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

var _ResetPassword = require("../components/ResetPassword");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = '1234567890';
var random = '1234567890';

var handleResetPassword = function handleResetPassword() {
  console.log('Reset password fn');
};

describe('Mounting Reset Password component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ResetPassword.ResetPassword, {
      code: code,
      random: random,
      handleResetPassword: handleResetPassword
    })));
    cy.get('[name="password"]').type('test2020');
    cy.get('[name="confirm-password"]').type('test2020');
    cy.get('button[type="submit"]').click();
  });
});