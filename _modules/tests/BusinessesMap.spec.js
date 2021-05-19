"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _BusinessesMap = require("../components/BusinessesMap");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Businesses Map component', function () {
  var userLocation = {
    lat: 40.7751052,
    lng: -73.9651148
  };
  var businessList = [{
    location: {
      lat: 40.94677350000001,
      lng: -73.98595739999996,
      zipcode: -1,
      zoom: 15
    },
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
    id: 41,
    slug: 'mcbonalds'
  }, {
    location: {
      lat: 40.80196739999999,
      lng: -73.94575050000003,
      zipcode: -1,
      zoom: 15
    },
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562275904/rtsxbq0sblemyu6bxehq.jpg',
    id: 3,
    slug: 'tastewine'
  }, {
    location: {
      lat: 37.791370300000004,
      lng: -122.39876809999998,
      zipcode: -1,
      zoom: 15
    },
    id: 12
  }];
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
      userLocation: userLocation,
      businessList: businessList
    })));
    cy.get('div').should('be.visible');
  });
});