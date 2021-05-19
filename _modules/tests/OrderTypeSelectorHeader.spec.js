"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _OrderTypeSelectorHeader = require("../components/OrderTypeSelectorHeader");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = function Block(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, props.text));
};

var configTypes = [1, 2, 3];
var defaultValue = 2;
var orderTypes = [{
  value: 1,
  content: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#1"
  }),
  showOnSelected: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#1"
  })
}, {
  value: 2,
  content: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#2"
  }),
  showOnSelected: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#2"
  })
}, {
  value: 3,
  content: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#3"
  }),
  showOnSelected: /*#__PURE__*/_react.default.createElement(Block, {
    text: "Test#3"
  })
}];
describe('Mounting Order Type Selector Header component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
      configTypes: configTypes,
      orderTypes: orderTypes,
      defaultValue: defaultValue
    })));
    cy.get('div#select-input').should('exist').click({
      force: true
    });
    cy.get('div#list').find('div#item').should('have.length', orderTypes.length);
  });
});