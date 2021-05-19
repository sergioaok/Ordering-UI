"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ProductOption = require("../components/ProductOption");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var option = {
  id: 53,
  extra_id: 49,
  name: 'Size',
  image: null,
  conditioned: false,
  respect_to: null,
  min: 1,
  max: 1,
  rank: 1,
  with_half_option: false,
  allow_suboption_quantity: false,
  limit_suboptions_by_max: false,
  enabled: true,
  suboptions: [{
    id: 172,
    extra_option_id: 53,
    name: 'small',
    price: 1,
    image: null,
    sku: null,
    rank: 1,
    description: null,
    max: 1,
    half_price: null,
    enabled: true
  }, {
    id: 173,
    extra_option_id: 53,
    name: 'large',
    price: 3,
    image: null,
    sku: null,
    rank: 1,
    description: null,
    max: 1,
    half_price: null,
    enabled: true
  }, {
    id: 174,
    extra_option_id: 53,
    name: 'medium',
    price: 2,
    image: null,
    sku: null,
    rank: 1,
    description: null,
    max: 1,
    half_price: null,
    enabled: true
  }]
};
var state = {
  id: 173,
  name: 'large',
  price: 3,
  selected: false,
  quantity: 0,
  position: 'whole',
  total: 0
};
describe('Mounting Product Option component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
      option: option,
      currentState: state
    })));
    cy.get('h3').should('contain.text', option.name);
  });
});