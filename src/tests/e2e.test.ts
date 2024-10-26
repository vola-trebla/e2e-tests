import { test, expect } from '@playwright/test';
import { authorizeUser } from '../fixtures/authFixtures';
import { clearCartIfNotEmpty } from '../fixtures/cartFixtures';
import { ProductsPage } from '../page-objects/pages/productsPage';
import { API_URLS } from '../config/apiConfig';

test.beforeEach(async ({ page }) => {
  await authorizeUser(page);
  await clearCartIfNotEmpty(page);
});

test('test', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.filterDiscountedProducts(true);

  await productsPage.productItem.setCountIfStockAllows(9);
  await productsPage.productItem.buy();
  await page.waitForResponse(
    response => response.url() === API_URLS.GET_BASKET && response.status() === 200,
  );
  await productsPage.verifyBasketCount(9);
});
