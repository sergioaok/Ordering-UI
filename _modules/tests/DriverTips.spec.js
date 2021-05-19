"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _DriverTips = require("../components/DriverTips");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var driverTipsOptions = [1, 2, 3, 4, 5];
describe('Mounting Driver Tips component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
      businessId: 41,
      driverTipsOptions: driverTipsOptions,
      useOrderContext: true
    })));
    cy.get('#driver-tip-container').find('div').should('have.length', driverTipsOptions.length);
  });
});