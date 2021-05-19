"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessTypeFilter = require("../components/BusinessTypeFilter");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var businessTypes = [{
  key: 'Dummy #1',
  value: null
}, {
  key: 'Dummy #2',
  value: 'dummy2'
}, {
  key: 'Dummy #3',
  value: 'dummy3'
}, {
  key: 'Dummy #4',
  value: 'dummy4'
}, {
  key: 'Dummy #5',
  value: 'dummy5'
}];
var images = [{
  image: 'https://picsum.photos/200',
  value: 'all'
}, {
  image: 'https://picsum.photos/200',
  value: 'dummy2'
}, {
  image: 'https://picsum.photos/200',
  value: 'dummy4'
}, {
  image: 'https://picsum.photos/200',
  value: 'dummy3'
}, {
  image: 'https://picsum.photos/200',
  value: 'dummy5'
}];
describe('Mounting Business type filter component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
      businessTypes: businessTypes,
      images: images
    })));
    cy.get('#container').find('div.category').should('have.length', businessTypes.length);
  });
});