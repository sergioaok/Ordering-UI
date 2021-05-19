"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _HomeHero = require("../components/HomeHero");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Home Hero component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_HomeHero.HomeHero, null)));
    cy.get('h1').should('contain.text', 'Welcome');
    cy.get('p').should('contain.text', 'Let’s start to order now');
    cy.get('div').should('contain.text', 'Type an address');
    cy.get('button').contains('Find businesses').should('exist').click();
  });
});