"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _NotNetworkConnectivity = require("../components/NotNetworkConnectivity");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = 'https://picsum.photos/600';
describe('Mounting Not Network Connectivity component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_NotNetworkConnectivity.NotNetworkConnectivity, {
      image: image,
      isOnline: false
    })));
    cy.get('div#container').should('be.visible');
    cy.get('img#not-network').should('exist');
  });
});