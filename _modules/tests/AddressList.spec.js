"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _AddressList = require("../components/AddressList");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Address List component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
      userId: 25,
      accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1zdGFnaW5nLm9yZGVyaW5nLmNvXC92NDAwXC9lblwvbHVpc3Y0XC9hdXRoIiwiaWF0IjoxNjExNzg0MzQ1LCJleHAiOjE2NDMzMjAzNDUsIm5iZiI6MTYxMTc4NDM0NSwianRpIjoiU2hzdmprTXV5YzZvUVFsMSIsInN1YiI6MjYwLCJsZXZlbCI6M30.I6Y_dVsKZHy5PITORU4mISo2gHj9YDevUUJEmv0X0og"
    })));
    cy.wait(4000);
    cy.get('button').contains('Add Address').should('exist');
    cy.log('Test functionality');
    cy.get('button').contains('Add Address').click();
    cy.get('div.popup-dialog').should('be.visible');
  });
});