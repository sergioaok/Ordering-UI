"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _UserProfileForm = require("../components/UserProfileForm");

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
describe('Mounting User Profile Form component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
      userData: userData,
      useSessionUser: true
    })));
    cy.get('input[type=file]').should('exist');
    cy.get('h1').should('contain.text', "".concat(userData.name, " ").concat(userData.lastname));
    cy.get('p').should('contain.text', "".concat(userData.email));
    cy.get('p').should('contain.text', "+".concat(userData.country_phone_code, " ").concat(userData.cellphone));
  });
});