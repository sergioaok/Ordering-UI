"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _NotFoundSource = require("../NotFoundSource");

var _BusinessBasicInformation = require("../BusinessBasicInformation");

var _BusinessProductsCategories = require("../BusinessProductsCategories");

var _BusinessProductsList = require("../BusinessProductsList");

var _PageNotFound = require("../PageNotFound");

var _ProductForm = require("../ProductForm");

var _Modal = require("../Modal");

var _BusinessCartContent = require("../BusinessCartContent");

var _GroupOrderForm = require("../GroupOrderForm");

var _AllDayPopover = require("../AllDayPopover");

var _FloatingButton = require("../FloatingButton");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var PIXELS_TO_SCROLL = 300;

var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _Object$values$find, _business$categories, _productModal$error$, _error$, _options$address, _currentCart$products, _currentCart$products2;

  var errors = props.errors,
      isInitialRender = props.isInitialRender,
      businessState = props.businessState,
      categorySelected = props.categorySelected,
      searchValue = props.searchValue,
      categoryState = props.categoryState,
      categoryId = props.categoryId,
      productId = props.productId,
      productModal = props.productModal,
      getNextProducts = props.getNextProducts,
      handleChangeCategory = props.handleChangeCategory,
      handleUpdateInitialRender = props.handleUpdateInitialRender,
      updateProductModal = props.updateProductModal,
      onProductRedirect = props.onProductRedirect,
      onCheckoutRedirect = props.onCheckoutRedirect,
      handleChangeSearch = props.handleChangeSearch,
      handleSearchRedirect = props.handleSearchRedirect,
      featuredProducts = props.featuredProducts,
      filterByMenus = props.filterByMenus,
      handleChangeFilterByMenus = props.handleChangeFilterByMenus;
  var business = businessState.business,
      menus = businessState.menus,
      loading = businessState.loading,
      error = businessState.error;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      _useOrder2$ = _useOrder2[0],
      carts = _useOrder2$.carts,
      options = _useOrder2$.options;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openProduct = _useState2[0],
      setModalIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openGroupOrder = _useState4[0],
      setOpenGroupOrder = _useState4[1];

  var _useState5 = (0, _react.useState)(props.product),
      _useState6 = _slicedToArray(_useState5, 2),
      curProduct = _useState6[0],
      setCurProduct = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openBusinessInformation = _useState8[0],
      setOpenBusinessInformation = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      openPopover = _useState10[0],
      setOpenPopover = _useState10[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var location = (0, _reactRouterDom.useLocation)();
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;

    return (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};

  var handler = function handler() {
    setOpenBusinessInformation(true);
  };

  var OnGroupOrderClick = function OnGroupOrderClick() {
    setOpenGroupOrder(true);
  };

  var onProductClick = function onProductClick(product) {
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug,
      product: product.id,
      category: product.category_id
    });
    setCurProduct(product);
    setModalIsOpen(true);
    events.emit('product_clicked', product);
  };

  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      setModalIsOpen(false);
      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug
      });
    }
  };

  var closeModalProductForm = function closeModalProductForm() {
    setModalIsOpen(false);
    handleUpdateInitialRender(false);
    updateProductModal(null);
    setCurProduct(null);
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug
    });
  };

  var closeModalGroupOrderForm = function closeModalGroupOrderForm() {
    setOpenGroupOrder(false);
  };

  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage);
    if (badScrollPosition || categoryState.loading || !hasMore) return;
    getNextProducts();
  }, [categoryState]);

  var handleChangePage = function handleChangePage(data) {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false);
    }
  };

  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };

  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };

  (0, _react.useEffect)(function () {
    if (categoryId && productId && isInitialRender) {
      var _productModal$product;

      if (productModal !== null && productModal !== void 0 && (_productModal$product = productModal.product) !== null && _productModal$product !== void 0 && _productModal$product.id) {
        setCurProduct(productModal.product);
      }

      setModalIsOpen(true);
    }
  }, [productModal]);
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);

    if (categoryId && productId) {
      handleUpdateInitialRender(true);
    }

    events.emit('get_current_view');
  }, []);
  (0, _react.useEffect)(function () {
    events.on('change_view', handleChangePage);
    return function () {
      events.off('change_view', handleChangePage);
    };
  }, [openProduct]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !loading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation,
    OnGroupOrderClick: OnGroupOrderClick
  }), /*#__PURE__*/_react.default.createElement(_AllDayPopover.AllDayPopover, {
    menus: menus,
    filterByMenus: filterByMenus,
    handleChangeFilterByMenus: handleChangeFilterByMenus,
    allTime: business === null || business === void 0 ? void 0 : business.today,
    open: openPopover.allDay,
    onClick: function onClick() {
      return handleTogglePopover('allDay');
    },
    onClose: function onClose() {
      return handleClosePopover('allDay');
    }
  }), !((business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [{
      id: null,
      name: t('ALL', 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: categorySelected,
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    allTime: business === null || business === void 0 ? void 0 : business.today,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [{
      id: null,
      name: t('ALL', 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    category: categorySelected,
    categoryState: categoryState,
    businessId: business.id,
    errors: errors,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    featured: featuredProducts,
    searchValue: searchValue,
    handleClearSearch: handleChangeSearch
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapBottomSection, null, /*#__PURE__*/_react.default.createElement("p", null, t('PRICES_ON_THIS_MENU_ARE_SET_DIRECTLY_BY_THE_MERCHANT', 'Prices on this menu are set directly by the Merchant.')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "55%",
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true
  }, productModal.loading && !productModal.error && /*#__PURE__*/_react.default.createElement(_styles.ProductLoading, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 250
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45,
    count: 8
  }))), productModal.error && productModal.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_productModal$error$ = productModal.error[0]) === null || _productModal$error$ === void 0 ? void 0 : _productModal$error$.message) || productModal.error[0]
  }), isInitialRender && !productModal.loading && !productModal.error && !productModal.product && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_GET_PRODUCT', 'Sorry, we couldn\'t find the requested product.')
  }), (productModal.product || curProduct) && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openGroupOrder,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalGroupOrderForm();
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_GroupOrderForm.GroupOrderForm, null)), loading && !error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: {
      business: {},
      loading: true
    },
    isSkeleton: true,
    handler: handler,
    openBusinessInformation: openBusinessInformation,
    OnGroupOrderClick: OnGroupOrderClick
  }), /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [],
    isSkeleton: true,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: loading
  }))), !loading && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), !loading && business !== null && business !== void 0 && business.id ? /*#__PURE__*/_react.default.createElement(_BusinessCartContent.BusinessCartContent, {
    cart: currentCart,
    orderType: (options === null || options === void 0 ? void 0 : options.type) || 1,
    business: business,
    userLocation: options === null || options === void 0 ? void 0 : (_options$address = options.address) === null || _options$address === void 0 ? void 0 : _options$address.location,
    categoryState: categoryState
  }) : /*#__PURE__*/_react.default.createElement(_BusinessCartContent.BusinessCartContent, {
    isSkeleton: true
  }), (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0 && auth && windowSize.width < 768 && /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
    btnText: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.maximum)) : !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)) : t('VIEW_ORDER', 'View Order'),
    isSecondaryBtn: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum),
    btnValue: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length,
    handleClick: function handleClick() {
      return onCheckoutRedirect(currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid);
    },
    disabled: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum)
  }));
};

var BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isInitialRender = _useState12[0],
      setIsInitialRender = _useState12[1];

  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessAndProductList, businessProductslistingProps);
};

exports.BusinessProductsListing = BusinessProductsListing;