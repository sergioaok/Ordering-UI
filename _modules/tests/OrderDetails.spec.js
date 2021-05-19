"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _OrderDetails = require("../components/OrderDetails");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order = {
  id: 598,
  uuid: 'dd4f7670-bac2-41c7-8243-d78da84d07b5',
  paymethod_id: 1,
  business_id: 7,
  customer_id: 25,
  delivery_type: 1,
  delivery_datetime: '2021-01-12 19:40:00',
  service_fee: 0,
  tax_type: 1,
  tax: 2,
  delivery_zone_price: 10,
  offer: 0,
  offer_type: null,
  offer_rate: 0,
  discount: 0,
  coupon: null,
  status: 0,
  comment: null,
  driver_id: null,
  driver_tip: 0,
  pay_data: null,
  refund_data: null,
  to_print: false,
  language_id: 1,
  app_id: null,
  cash: null,
  delivery_zone_id: 20,
  locked: false,
  order_group_id: null,
  logistic_status: 0,
  created_at: '2021-01-13 00:40:36',
  updated_at: '2021-01-13 00:40:36',
  offer_id: null,
  prepared_in: null,
  delivered_in: null,
  last_driver_assigned_at: null,
  last_logistic_attempted_at: null,
  priority: 0,
  logistic_attemps: 0,
  expired_at: null,
  resolved_at: null,
  delivery_datetime_utc: '2021-01-13 00:40:00',
  unread_count: 1,
  driver: null,
  review: null,
  user_review: null,
  order_group: null
};
describe('Mounting Order Details component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
      order: order
    })));
    cy.get('.order-header').should('exist');
    cy.get('.order-content').should('exist');
  });
});