"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _LoginForm = require("../components/LoginForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Login component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
      useLoginByCellphone: true,
      elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", null, "Create account"),
      elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", null, "Reset password")
    })));
    cy.get('input[type=email]').type('sergio@ordering.co');
    cy.get('input[type=password').type('test2020');
    cy.get('div').contains('Login with Cellphone').click();
    cy.get('input[type="tel"]').type('1234567890');
    cy.get('button[type=submit]').click();
  });
});