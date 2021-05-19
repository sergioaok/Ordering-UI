"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _AddressForm = require("../components/AddressForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Address Form component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, null)));
    cy.get('div.address-form').should('be.visible');
    cy.wait(4000);
    cy.get('form').should('be.visible');
    cy.get('input.input-autocomplete').should('be.visible');
    cy.get('button.gps-button').should('be.visible');
    cy.get('input.internal_number').should('be.visible');
    cy.get('input.zipcode').should('be.visible');
    cy.get('textarea').should('be.visible');
    cy.get('button').contains('Cancel').should('exist');
  });
});