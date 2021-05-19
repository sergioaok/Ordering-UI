"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _UserPopover = require("../components/UserPopover");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionsList = [{
  name: 'testing#1',
  pathname: '/profile'
}, {
  name: 'testing#2',
  pathname: '/profile/orders'
}];
describe('Mounting User Popover component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
      open: true,
      optionsList: optionsList
    })));
    cy.get('a').each(function ($a, $i) {
      cy.wrap($a).should('contain.text', (0, _utils.capitalize)(optionsList[$i].name));
    });
  });
});