"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _SidebarMenu = require("../components/SidebarMenu");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Sidebar Menu component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, null)));
    cy.viewport(768, 660);
    cy.get('button[aria-label=menu]').should('be.visible');
    cy.get('button[aria-label=menu]').click();
    cy.get('div#sidebar_menu').should('be.visible');
    cy.get('span').contains('Home').should('be.visible');
    cy.get('span').contains('Sign in').should('be.visible');
    cy.get('span').contains('Sign up').should('be.visible');
  });
});