"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ProductItemAccordion = require("../components/ProductItemAccordion");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var product = {
  id: 1304,
  category_id: 249,
  images: 'https://res.cloudinary.com/ordering2/image/upload/v1606327261/e9hov207zdviitts8zkb.png',
  business_id: 41,
  inventoried: false,
  stock: 0,
  name: 'Blue Raspberry-Lemon Side Kick.',
  price: 65,
  code: 'y2ZwEAgJqd',
  comment: null,
  quantity: 1,
  total: 65,
  balance: 1,
  valid_quantity: true,
  ingredients: {},
  options: {},
  valid_menu: true,
  valid: true
};
describe('Mounting Product Item Accordion component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      isCartProduct: true,
      product: product
    })));
    cy.get('div.info span').contains(product.quantity).should('be.visible');
    cy.get('div.info div h3').contains(product.name).should('be.visible');
  });
});