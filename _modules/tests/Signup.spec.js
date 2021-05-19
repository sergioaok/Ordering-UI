"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _SignUpForm = require("../components/SignUpForm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Sign up component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, null)));
    cy.get('[name="name"]').should('be.visible').type('test');
    cy.get('[name="lastname"]').should('be.visible').type('test');
    cy.get('[name="email"]').should('be.visible').type('test@ordering.co');
    cy.get('[name="middle_name"]').should('be.visible').type('test');
    cy.get('[name="second_lastname"]').should('be.visible').type('test');
    cy.get('.PhoneInputInput').should('be.visible').type('584141234123');
    cy.get('[name="password"]').should('be.visible').type('test2021');
    cy.get('button[type=submit]').click();
  });
});