"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _UserDetails = require("../components/UserDetails");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userData = {
  name: 'testing',
  middle_name: 'test',
  lastname: 'foo',
  second_lastname: 'bar',
  email: 'test@testing.com',
  cellphone: '4149797652',
  country_phone_code: 58
};
describe('Mounting User Details component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
      userData: userData,
      cartStatus: 2,
      businessId: 41,
      useValidationFields: true,
      useDefualtSessionManager: true,
      useSessionUser: true,
      isCheckout: true
    })));
    cy.wait(8000);
    cy.get('h1').should('contain.text', 'Customer details');
    cy.get('p').should('contain.text', "Name: ".concat(userData === null || userData === void 0 ? void 0 : userData.name, " ").concat(userData === null || userData === void 0 ? void 0 : userData.middle_name, " ").concat(userData === null || userData === void 0 ? void 0 : userData.lastname, " ").concat(userData === null || userData === void 0 ? void 0 : userData.second_lastname));
    cy.get('p').should('contain.text', "Email: ".concat(userData === null || userData === void 0 ? void 0 : userData.email));
    cy.get('p').should('contain.text', "Phone / Mobile: +".concat(userData === null || userData === void 0 ? void 0 : userData.country_phone_code, " ").concat(userData === null || userData === void 0 ? void 0 : userData.cellphone));
  });
});