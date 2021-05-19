"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Header = require("../components/Header");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Header component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
      isHome: true
    })));
    cy.wait(4000);
    cy.get('[alt="Logotype"]').should('be.visible');
    cy.get('#select-input').should('be.visible').click();
    cy.get('div').contains('ASAP').should('be.visible').click();
    cy.get('div').contains('Select an address').should('be.visible').click();
    cy.get('[name="signin"]').should('be.visible');
    cy.get('[name="signup"]').should('be.visible');
    cy.get('div').contains('EN').should('be.visible').click();
  });
});