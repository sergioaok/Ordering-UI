"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ProductIngredient = require("../components/ProductIngredient");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ingredient = {
  id: 7,
  product_id: 1318,
  name: 'ingredient#1',
  image: null
};
var state = {
  id: 7,
  name: 'uno',
  selected: true
};
describe('Mounting Product Ingredient component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
      state: state,
      ingredient: ingredient
    })));
    cy.get('div span').contains(ingredient.name).should('be.visible');
  });
});