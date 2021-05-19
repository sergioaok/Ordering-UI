"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapPromoCodeApply = exports.CouponContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CouponContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  padding: 0 20px;\n  \n  > a {\n    color: ", ";\n    font-weight: 500;\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.CouponContainer = CouponContainer;

var WrapPromoCodeApply = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  button {\n    width: 100%;\n    &:disabled {\n      opacity: 0.5;\n    }\n    height: 50px;\n  }\n\n  input {\n    width: 100%;\n    padding: 10px 15px;\n    background-color: #F6F6F6;\n    border: none;\n    border-bottom: 1px solid #DBDCDB;\n    box-sizing: border-box;\n    margin-bottom: 20px;\n  }\n"])));

exports.WrapPromoCodeApply = WrapPromoCodeApply;