"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _StripeRedirectForm = require("../components/StripeRedirectForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paymethods = [{
  name: 'Bancontact',
  value: 'bancontact'
}, {
  name: 'Alipay',
  value: 'alipay'
}, {
  name: 'Giropay',
  value: 'giropay'
}, {
  name: 'iDEAL',
  value: 'ideal'
}];
describe('Mounting Stripe Redirect Form component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_StripeRedirectForm.StripeRedirectForm, {
      paymethods: paymethods
    })));
    cy.get('select').select('Alipay').should('have.value', 'alipay');
    cy.get('input[name=name]').type('User name');
    cy.get('input[name=email]').type('User@email.com');
    cy.get('Button').contains('OK').should('be.visible').click();
  });
});