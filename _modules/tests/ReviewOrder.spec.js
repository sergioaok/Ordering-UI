"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ReviewOrder = require("../components/ReviewOrder");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order = {
  id: 607,
  business_id: 21
};

var setIsReviewed = function setIsReviewed() {
  return console.log('toggle review fn');
};

describe('Mounting Order Reviews component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
      order: order,
      setIsReviewed: setIsReviewed
    }))); // cy.get('#list #stars:first-child').should('exist')

    cy.wait(4000);
    cy.get(':nth-child(6) > div > :nth-child(1) > input[type=radio]').first().check({
      force: true
    });
    cy.get(':nth-child(7) > div > :nth-child(1) > input[type=radio]').first().check({
      force: true
    });
    cy.get(':nth-child(8) > div > :nth-child(1) > input[type=radio]').first().check({
      force: true
    });
    cy.get(':nth-child(9) > div > :nth-child(1) > input[type=radio]').first().check({
      force: true
    });
    cy.get('input[placeholder=Comments]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.popup-dialog').should('exist');
    cy.get('div').should('contain', 'Thank you, Review successfully submitted');
  });
});