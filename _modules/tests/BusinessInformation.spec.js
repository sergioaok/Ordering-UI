"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessInformation = require("../components/BusinessInformation");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var business = {
  header: 'https://picsum.photos/200',
  logo: 'https://picsum.photos/200',
  name: 'testing',
  description: 'foo bar',
  reviews: {
    total: 5
  },
  delivery_time: '1:0',
  pickup_time: '1:0',
  distance: 5,
  delivery_price: 5
};
describe('Mounting Business Information component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
      business: business
    })));
    cy.get('p').contains(business.description).should('be.visible');
  });
});