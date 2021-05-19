"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _LogoutButton = require("../components/LogoutButton");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClick = function handleClick() {
  console.log('handle click');
};

describe('Mounting Logout Button component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
      onCustomClick: handleClick
    })));
    cy.get('a').contains('Logout').should('be.visible');
  });
});