"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _MomentControl = require("../components/MomentControl");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting MomentControl component', function () {
  var currentDate = new Date();
  var momentProps = {
    maxDate: currentDate
  };
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_MomentControl.MomentControl, momentProps)));
    cy.get('[name="days"]').should('be.visible');
    cy.get('[name="hours"]').should('be.visible');
  });
});