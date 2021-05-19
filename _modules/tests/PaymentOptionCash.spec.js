"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _PaymentOptionCash = require("../components/PaymentOptionCash");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderTotal = 5;
describe('Mounting Payment Option Cash component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_PaymentOptionCash.PaymentOptionCash, {
      orderTotal: orderTotal
    })));
    cy.get('label').should('contain', 'Don\'t have exact amount? Let us know with how much will you pay');
    cy.get('input[name=cash]').type(4);
    cy.get('p').should('contain', "This value must be greater than order total: ".concat(orderTotal, ",00 $"));
  });
});