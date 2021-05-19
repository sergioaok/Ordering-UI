"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _AddressDetails = require("../components/AddressDetails");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = '5th av. New York.';
describe('Mounting Address details component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
      businessId: 22,
      addressToShow: address
    })));
    cy.get('h4').contains(address).should('be.visible');
    cy.get('img#google-maps-image').should('be.visible');
  });
});