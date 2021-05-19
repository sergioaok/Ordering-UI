"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductIngredient = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));

var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductIngredientUI = function ProductIngredientUI(props) {
  var state = props.state,
      ingredient = props.ingredient,
      toggleSelect = props.toggleSelect;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapIngredient, {
    onClick: function onClick() {
      return toggleSelect();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement("span", null, ingredient.name)));
};

var ProductIngredient = function ProductIngredient(props) {
  var productIngredientProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductIngredientUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductIngredient, productIngredientProps);
};

exports.ProductIngredient = ProductIngredient;