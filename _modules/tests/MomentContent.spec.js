"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _MomentContent = require("../components/MomentContent");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting MomentContent component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, null)));
    cy.wait(8000);
    cy.get('[name="days"]').should('be.visible');
    cy.get('[name="hours"]').should('be.visible');
    cy.get('div').contains('As soon as possible').should('be.visible').click();
  });
});