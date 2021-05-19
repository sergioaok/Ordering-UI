"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _NotFoundSource = require("../components/NotFoundSource");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = 'Some error has ocurred';
describe('Mounting Not found source component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
      content: content
    })));
    cy.get('h1').contains(content).should('be.visible');
  });
});