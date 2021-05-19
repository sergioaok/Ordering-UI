"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _UpsellingPage = require("../components/UpsellingPage");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Upselling Page component', function () {
  var business = {
    currency: 'USD',
    header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
    name: 'McBonalds',
    service_fee: 9,
    slug: 'mcbonalds',
    tax: 10,
    tax_type: 1
  };
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
      businessId: 41,
      business: business,
      cartProducts: [],
      onClose: function onClose() {},
      onAccept: function onAccept() {},
      openUpselling: true,
      canOpenUpselling: true,
      setCanOpenUpselling: function setCanOpenUpselling() {},
      handleUpsellingPage: function handleUpsellingPage() {}
    })));
    cy.get('.popup-component').should('be.visible');
    cy.get('div[name="Chipotle BBQ Snack Wrap (Grilled or Crispy)"]').should('be.visible');
  });
});