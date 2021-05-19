"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _SearchBar = require("../components/SearchBar");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placeholder = 'Search Businesses';
describe('Mounting Search Bar component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
      placeholder: placeholder
    })));
    cy.get('input').invoke('attr', 'placeholder').should('contain', placeholder);
  });
});