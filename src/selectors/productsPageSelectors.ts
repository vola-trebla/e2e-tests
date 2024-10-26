export const productsPageSelectors = {
  header: {
    logo: 'a.navbar-brand[href="/"]',
    userDropdown: '#dropdownUser',
    userAvatar: '.user-avatar',
    userName: '.text-uppercase',
    logoutButton: '.dropdown-menu .logout',
    basketDropdown: '#dropdownBasket',
    basketCount: '.basket-count-items',
    basketItem: '.basket-item',
    basketPrice: '.basket_price',
    goToBasketButton: 'a.btn[href="/basket"]',
    clearBasketButton: '.actionClearBasket a.btn-danger',
  },

  searchForm: {
    searchInput: '#filterSearch',
    searchButton: 'button[data-filter-action="search"]',
    typeSelect: '#filterType',
    brandSelect: '#filterBrand',
    priceFromInput: 'input[name="price-from"]',
    priceToInput: 'input[name="price-to"]',
    priceSearchButton: 'button[data-filter-action="price"]',
    discountCheckbox: 'input[name="is-discount"]',
  },

  productItems: {
    itemContainer: '.note-list',
    item: '.note-item',
    itemDataProduct: (index: number) => `.note-item[data-product="${index}"]`,
    itemPoster: (index: number) =>
      `.note-item[data-product="${index}"] .product_poster`,
    itemType: (index: number) =>
      `.note-item[data-product="${index}"] .product_type`,
    itemName: (index: number) =>
      `.note-item[data-product="${index}"] .product_name`,
    itemPrice: (index: number) =>
      `.note-item[data-product="${index}"] .product_price`,
    itemCountInput: (index: number) =>
      `.note-item[data-product="${index}"] input[name="product-enter-count"]`,
    itemStock: (index: number) =>
      `.note-item[data-product="${index}"] .product_count`,
    itemBuyButton: (index: number) =>
      `.note-item[data-product="${index}"] .actionBuyProduct`,
    itemDiscount: (index: number) =>
      `.note-item[data-product="${index}"] .product_discount`,
    emptyMessage: '#noteListEmptyTitle',
  },

  pagination: {
    container: 'nav[aria-label="Page navigation"]',
    pageItems: '.pagination .page-item',
    pageLink: (pageNumber: number) =>
      `.pagination .page-item a[data-page-number="${pageNumber}"]`,
    activePage: '.pagination .page-item.active a',
  },

  supportForm: {
    container: '.support-form',
    nameInput: '#inputName',
    emailInput: '#inputEmail',
    messageInput: '#inputMessage',
    submitButton: '.btn-primary',
    nameFeedback: '.invalid-feedback:nth-of-type(1)',
    emailFeedback: '.invalid-feedback:nth-of-type(2)',
    messageFeedback: '.invalid-feedback:nth-of-type(3)',
  },
};
