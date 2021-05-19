"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _CardForm = require("../components/CardForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

var _pure = require("@stripe/stripe-js/pure");

var _reactStripeJs = require("@stripe/react-stripe-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var publicKey = 'pk_test_SP5YYDD4PdEVfH8U2QJhsVxR';
describe('Mounting Card Form component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_reactStripeJs.Elements, {
      stripe: (0, _pure.loadStripe)(publicKey)
    }, /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_CardForm.CardForm, null))));
    cy.get('form').should('be.visible');
    cy.get('button').contains('Cancel').should('be.visible');
    cy.get('button').contains('Add').should('be.visible');
  });
});