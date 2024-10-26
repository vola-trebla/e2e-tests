import { Page } from 'playwright';
import { ProductsPage } from '../page-objects/pages/productsPage';

export async function clearCartIfNotEmpty(page: Page): Promise<void> {
  const productsPage = new ProductsPage(page);
  const itemCount = await productsPage.getBasketCount();
  if (itemCount > 0) {
    await productsPage.clearBasketIfNotEmpty();
  }
}
