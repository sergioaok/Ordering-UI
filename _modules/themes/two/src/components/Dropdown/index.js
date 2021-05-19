"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = exports.DropDownMenu = exports.DropdownToggle = exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("./style");

var _reactPopper = require("react-popper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dropdown = function Dropdown(props) {
  var open = props.open;
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)(); // const [open, setOpen] = useState(false)

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      menu = _useState4[0],
      setMenu = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      children = _useState6[0],
      setChildren = _useState6[1];

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  }),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  (0, _react.useEffect)(function () {
    var _children = [];

    _react.default.Children.forEach(props.children, function (child) {
      var _child$type, _child$type2;

      if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'DropdownToggle') {
        setToggle(child);
      } else if ((child === null || child === void 0 ? void 0 : (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'DropDownMenu') {
        setMenu(child);
      } else {
        _children.push(child);
      }
    });

    setChildren(_children);
  }, [props.children]); // const hanldeOpenMenu = () => {
  //   setOpen(!open)
  // }
  // const closeMenu = (e) => {
  //   if (open) {
  //     if (
  //       !e.target.classList.contains(DropdownToggleStyled.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemLink.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemStyled.styledComponentId)
  //     ) {
  //       // setOpen(false)
  //     }
  //   }
  // }

  (0, _react.useEffect)(function () {
    update && update(); // document.addEventListener('mousedown', closeMenu)
    // return () => document.removeEventListener('mousedown', closeMenu)
  }, [open]);
  return (
    /*#__PURE__*/
    // <DropdownStyled style={props.style} ref={referenceElement} onClick={hanldeOpenMenu}>
    _react.default.createElement(_style.DropdownStyled, {
      style: props.style,
      ref: referenceElement
    }, toggle, menu && /*#__PURE__*/_react.default.cloneElement(menu, _objectSpread({
      ref: popperElement,
      style: _objectSpread(_objectSpread(_objectSpread({}, menu.props.style), styles.popper), {}, {
        visibility: open ? 'visible' : 'hidden'
      })
    }, attributes.popper), [].concat(_toConsumableArray(Array.isArray(menu.props.children) ? menu.props.children : [menu.props.children]), [/*#__PURE__*/_react.default.createElement(_style.Arrow, {
      key: "arrow",
      ref: arrowElement,
      style: styles.arrow
    })])), open && children.map(function (child) {
      return child;
    }))
  );
};

exports.Dropdown = Dropdown;

var DropdownToggle = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownToggleStyled, _extends({}, props, {
    ref: ref
  }), props.children);
});

exports.DropdownToggle = DropdownToggle;
DropdownToggle.displayName = 'DropdownToggle';

var DropDownMenu = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownMenuStyled, _extends({}, props, {
    ref: ref
  }), props.children);
});

exports.DropDownMenu = DropDownMenu;
DropDownMenu.displayName = 'DropDownMenu';

var DropdownItem = function DropdownItem(props) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownItemStyled, props, props.children);
};

exports.DropdownItem = DropdownItem;
DropDownMenu.DropdownItem = 'DropdownItem';