"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Cms = require("../components/Cms");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = 'Sorry, the selected page was not found';
describe('Mounting Cms component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Cms.Cms, {
      pageSlug: "testing"
    })));
    cy.get('h1').contains(content).should('be.visible');
    cy.get('Button').contains('Go to pages list').should('be.visible');
  });
});