"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ForgotPasswordForm = require("../components/ForgotPasswordForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Forgot password component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
      elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", null, "Login")
    })));
    cy.get('div').contains('Login').should('be.visible');
    cy.get('input').type('superadmin@ordering.co');
    cy.get('button[type=submit]').click();
  });
});