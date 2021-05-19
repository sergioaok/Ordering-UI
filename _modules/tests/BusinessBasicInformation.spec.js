"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessBasicInformation = require("../components/BusinessBasicInformation");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setOpenBusinessInformation = function setOpenBusinessInformation() {
  console.log('set open business information');
};

var businessState = {
  loading: false,
  business: {
    header: 'https://picsum.photos/1920/700',
    logo: 'https://picsum.photos/200',
    name: 'Testing',
    reviews: {
      total: 5
    },
    delivery_time: '1:0',
    pickup_time: '1:0',
    distance: 3.4027078537806617,
    delivery_price: 3
  }
};
describe('Mounting Business Basic information component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
      businessState: businessState,
      setOpenBusinessInformation: setOpenBusinessInformation
    })));
    cy.get('#container').should('exist');
    cy.get('.info').should('exist');
    cy.get('.popup').should('exist');
  });
});