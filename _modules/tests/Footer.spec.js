"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Footer = require("../components/Footer");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Footer component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Footer.Footer, null)));
    cy.get('h1[name="title-1"]').should('be.visible');
    cy.get('h1[name="title-2"]').should('be.visible');
    cy.get('h1[name="title-3"]').should('be.visible');
    cy.get('a').contains('Ordering').should('be.visible').click();
    cy.get('[aria-label="link2"]').should('be.visible').click();
    cy.get('[aria-label="link3"]').should('be.visible').click();
    cy.get('[aria-label="link4"]').should('be.visible').click();
    cy.get('[aria-label="link5"]').should('be.visible').click();
    cy.get('[aria-label="link6"]').should('be.visible').click();
    cy.get('[aria-label="facebook"] > svg').should('be.visible').click();
    cy.get('[aria-label="instagram"] > svg').should('be.visible').click();
    cy.get('[aria-label="twitter"] > svg').should('be.visible').click();
    cy.get('[aria-label="youtube"] > svg').should('be.visible').click();
    cy.get('[aria-label="whatsapp"] > svg').should('be.visible').click();
    cy.get('[name="copy"]').should('be.visible');
  });
});