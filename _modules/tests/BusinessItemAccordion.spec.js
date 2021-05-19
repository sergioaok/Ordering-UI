"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessItemAccordion = require("../components/BusinessItemAccordion");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cart = {
  uuid: '9c99f26b-4600-4456-bd22-259120e5d666',
  total: 10,
  business: {
    name: 'McBonalds',
    slug: 'mcbonalds',
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
    header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
    service_fee: 9,
    tax_type: 1,
    tax: 0,
    currency: 'USD'
  }
};
describe('Mounting Business Item Accordion component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessItemAccordion.BusinessItemAccordion, {
      uuid: cart.uuid,
      isProducts: true,
      orderTotal: cart.total,
      business: cart.business,
      isValidProducts: true
    })));
    cy.wait(4000);
    cy.get('div.total > p').contains("".concat(cart.total, ",00 $")).should('be.visible');
    cy.get('div.info > h2').contains(cart.business.name).should('be.visible');
  });
});