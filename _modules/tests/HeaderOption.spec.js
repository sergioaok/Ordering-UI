"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _HeaderOption = require("../components/HeaderOption");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var variant = 'moment';
describe('Mounting Header Option component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
      variant: variant
    })));
    cy.get('div').should('contain.text', 'ASAP');
    cy.get('svg#icon').should('be.visible');
  });
});