"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _SingleProductCard = require("../components/SingleProductCard");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var product = {
  name: 'Foo',
  description: 'Bar',
  price: 5,
  images: 'https://picsum.photos/200'
};
describe('Mounting Single Product Card component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      product: product,
      businessId: 41
    })));
    cy.get('h1').contains(product.name).should('be.visible');
    cy.get('p').contains(product.description).should('be.visible');
    cy.get('span').contains(product.price).should('be.visible');
    cy.get('div.image').should('be.visible');
  });
});