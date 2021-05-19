"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _LanguageSelector = require("../components/LanguageSelector");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languages = [{
  code: 'one',
  name: 'Test#1'
}, {
  code: 'two',
  name: 'Test#2'
}, {
  code: 'three',
  name: 'Test#3'
}];
var currentLanguage = 'two';
describe('Mounting Language Selector component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, {
      languages: languages,
      currentLanguage: currentLanguage,
      handlerCustomChangeLanguage: function handlerCustomChangeLanguage() {
        console.log('handlerCustomChangeLanguage');
      },
      notReload: true
    })));
    cy.get('div#select-input').should('exist').click();
    cy.get('div#list').find('div#item').should('have.length', languages.length);
  });
});