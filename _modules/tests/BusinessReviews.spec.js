"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessReviews = require("../components/BusinessReviews");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var business = {
  id: 1232,
  name: 'testing',
  reviews: {
    total: 2,
    reviews: [{
      id: 1,
      total: 2,
      comment: 'lorem',
      quality: 3,
      delivery: 2,
      service: 4,
      package: 1
    }, {
      id: 2,
      total: 3,
      comment: 'ipsum',
      quality: 3,
      delivery: 3,
      service: 3,
      package: 3
    }]
  }
};
describe('Mounting Business Reviews component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
      businessId: 22,
      reviews: business.reviews.reviews,
      businessName: business.name,
      stars: business.reviews.total
    })));
    cy.get('h3').contains("Reviews of ".concat(business.name)).should('be.visible');
    cy.get('div#content').find('div#review').should('have.length', business.reviews.reviews.length);
  });
});