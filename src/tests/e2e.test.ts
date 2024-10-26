import { test, expect } from '@playwright/test';
import { authorizeUser } from '../fixtures/authFixtures';
import { clearCartIfNotEmpty } from '../fixtures/cartFixtures';
import { ProductsPage } from '../page-objects/pages/productsPage';

test.beforeEach(async ({ page }) => {
  await authorizeUser(page);
  await clearCartIfNotEmpty(page);
});

test('test', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.filterDiscountedProducts(true);

  await productsPage.productItem.setCount(9);
  await productsPage.productItem.buy();
  await page.reload();
  await productsPage.verifyBasketCount(19);
});
