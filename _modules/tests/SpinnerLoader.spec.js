"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _SpinnerLoader = require("../components/SpinnerLoader");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = 'Loading';
describe('Mounting Spinner Loader component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
      content: content
    })));
    cy.get('h1').contains(content).should('be.visible');
    cy.get('div.spinner').should('be.visible');
  });
});