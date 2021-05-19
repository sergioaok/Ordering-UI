"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _FloatingButton = require("../components/FloatingButton");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClick = function handleClick() {
  console.log('handle click');
};

var btnText = 'Testing';
describe('Mounting Floating button component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
      btnText: btnText,
      btnValue: 10,
      handleClick: handleClick
    })));
    cy.get('button').contains(btnText).should('be.visible');
  });
});