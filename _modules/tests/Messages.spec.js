"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Messages = require("../components/Messages");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Messages component', function () {
  var order = {
    id: 1000,
    business_id: 47,
    created_at: '2021-01-14 21:28:50',
    driver: null,
    business: {
      name: 'DakotaWine',
      app_id: 'Ordering app'
    }
  };
  var messages = {
    loading: false,
    error: null,
    messages: [{
      author: {
        id: 1,
        name: 'super',
        lastname: 'admin',
        level: 1
      },
      author_id: 1,
      change: null,
      id: 2500,
      type: 2,
      created_at: '2021-01-14 21:28:50',
      comment: 'test 1'
    }, {
      author: {
        id: 1,
        name: 'super',
        lastname: 'admin',
        level: 1
      },
      author_id: 1,
      change: null,
      id: 2501,
      created_at: '2021-01-14 21:28:50',
      type: 2,
      comment: 'test 2'
    }]
  };
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
      business: true,
      order: order,
      messagesToShow: messages,
      orderId: order.id
    })));
    cy.get('h1').should('be.visible');
    cy.get('div').contains('Order placed').should('be.visible');
    cy.get('div').contains('test 1').should('be.visible');
    cy.get('div').contains('test 2').should('be.visible');
    cy.get('#message').type('test 3');
    cy.get('button[type=submit]').click();
  });
});