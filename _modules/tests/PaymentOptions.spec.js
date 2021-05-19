"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _PaymentOptions = require("../components/PaymentOptions");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paymethods = [{
  id: 6,
  paymethod_id: 1,
  business_id: 3,
  sandbox: false,
  enabled: true,
  created_at: '2018-10-06 18:18:26',
  updated_at: '2020-11-11 19:24:34',
  data: {},
  paymethod: {
    id: 1,
    name: 'testing#1',
    gateway: 'cash',
    enabled: true,
    deleted_at: null,
    created_at: '2018-10-06 18:18:25',
    updated_at: '2018-10-06 18:18:25'
  }
}, {
  id: 7,
  paymethod_id: 2,
  business_id: 3,
  sandbox: false,
  enabled: true,
  created_at: '2018-10-06 18:18:26',
  updated_at: '2020-11-11 19:24:40',
  data: {},
  paymethod: {
    id: 2,
    name: 'testing#2',
    gateway: 'card_delivery',
    enabled: true,
    deleted_at: null,
    created_at: '2018-10-06 18:18:25',
    updated_at: '2018-10-06 18:18:25'
  }
}];
describe('Mounting Payment Options component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
      paymethods: paymethods
    })));
    cy.get('.payments-list').find('div.card').should('have.length', paymethods.length);
  });
});