"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _UserFormDetails = require("../components/UserFormDetails");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validationFields = {
  loading: false,
  fields: {
    checkout: {
      name: {
        id: 1,
        name: 'Name',
        code: 'name',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      lastname: {
        id: 2,
        name: 'Last Name',
        code: 'lastname',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      email: {
        id: 3,
        name: 'Email',
        code: 'email',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      cellphone: {
        id: 4,
        name: 'Mobile phone',
        code: 'mobile_phone',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      middle_name: {
        id: 55,
        name: 'Middle name',
        code: 'middle_name',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      second_lastname: {
        id: 56,
        name: 'Second lastname',
        code: 'second_lastname',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      }
    }
  }
};

var showField = function showField(fieldName) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;

  return !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && _validationFields$fie.checkout[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.checkout[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.checkout[fieldName].enabled);
};

var isRequiredField = function isRequiredField(fieldName) {
  var _validationFields$fie4, _validationFields$fie5, _validationFields$fie6;

  return !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.checkout[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout[fieldName].enabled) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.checkout[fieldName].required);
};

describe('Mounting User Form Details component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, {
      validationFields: validationFields,
      showField: showField,
      isRequiredField: isRequiredField,
      isCheckout: true,
      isEdit: true
    })));
    cy.get('form').find('input').should('have.length', Object.keys(validationFields.fields.checkout).length);
  });
});