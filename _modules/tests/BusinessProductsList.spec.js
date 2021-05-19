"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessProductsList = require("../components/BusinessProductsList");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryState = {
  loading: false,
  pagination: {
    currentPage: 0,
    pageSize: 20,
    totalItems: null,
    totalPages: 0,
    nextPageItems: 10
  },
  products: [{
    id: 1309,
    name: 'MbWrap Southwest (Grilled)',
    price: 12,
    description: '',
    images: 'https://res.cloudinary.com/ordering2/image/upload/v1606324885/xnnoqx0zqlea71f8zong.png',
    category_id: 1,
    inventoried: true,
    quantity: 0,
    featured: false,
    enabled: true,
    upselling: false,
    in_offer: false,
    offer_price: null,
    rank: null
  }]
};
var categories = [{
  id: null,
  name: 'All'
}, {
  id: 1,
  name: 'ONE#01'
}, {
  id: 2,
  name: 'ONE#02'
}, {
  id: 3,
  name: 'ONE#03'
}];
describe('Mounting Business Products List component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
      categories: categories,
      category: {
        id: null,
        name: 'All'
      },
      categoryState: categoryState,
      businessId: 41
    })));
    cy.get('div#container h3').contains(categories[1].name).should('be.visible');
  });
});