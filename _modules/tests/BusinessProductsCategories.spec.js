"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessProductsCategories = require("../components/BusinessProductsCategories");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categories = [{
  id: 1,
  name: 'test#1'
}, {
  id: 2,
  name: 'test#2'
}, {
  id: 3,
  name: 'test#3'
}, {
  id: 4,
  name: 'test#4'
}];
var categorySelected = {
  id: 1
};
describe('Mounting Business Products Categories component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
      categories: categories,
      categorySelected: categorySelected
    })));
    cy.get('span#autoscroll').find('div').should('have.length', categories.length);
  });
});