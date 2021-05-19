"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Confirm = require("../components/Confirm");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirmProps = {
  title: 'Test confirm',
  content: 'testing confirm components',
  acceptText: 'Accept',
  handleClose: function handleClose() {
    console.log('onClose');
  },
  handleCancel: function handleCancel() {
    console.log('onCancel');
  },
  handleAccept: function handleAccept() {
    console.log('onAccept');
  }
};
describe('Mounting Confirm component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
      open: true,
      closeOnBackdrop: false,
      title: confirmProps.title,
      content: confirmProps.content,
      acceptText: confirmProps.acceptText,
      onClose: confirmProps.handleClose,
      onCancel: confirmProps.handleCancel,
      onAccept: confirmProps.handleAccept
    })));
    cy.get('.popup-dialog').should('exist');
    cy.get('h2').should('contain', confirmProps.title);
    cy.get('div').should('contain', confirmProps.content);
    cy.get('button').contains(confirmProps.acceptText).should('be.visible');
    cy.get('button').contains('Cancel').should('be.visible');
  });
});