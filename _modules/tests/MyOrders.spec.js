"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _MyOrders = require("../components/MyOrders");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting My Orders component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_MyOrders.MyOrders, null)));
    cy.get('h1').should('contain.text', 'Active Orders');
    cy.get('h1').should('contain.text', 'Previous Orders');
  });
});