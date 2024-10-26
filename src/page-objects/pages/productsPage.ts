import { expect, Page, test } from '@playwright/test';
import { productsPageSelectors } from '../../selectors/productsPageSelectors';
import { ButtonElement, TextElement, CheckBoxElement } from '../elements';
import {ProductItemElement} from "../components/productItemElement";

export class ProductsPage {
  basketDropdown: ButtonElement;
  basketCount: TextElement;
  clearBasketButton: ButtonElement;
  goToBasketButton: ButtonElement;
  discountCheckbox: CheckBoxElement;
  productItem: ProductItemElement;

  constructor(page: Page) {
    this.basketDropdown = new ButtonElement('Basket Dropdown', page, {
      selector: productsPageSelectors.header.basketDropdown,
    });
    this.basketCount = new TextElement('Basket Count', page, {
      selector: productsPageSelectors.header.basketCount,
    });
    this.clearBasketButton = new ButtonElement('Clear Basket Button', page, {
      selector: productsPageSelectors.header.clearBasketButton,
    });
    this.goToBasketButton = new ButtonElement('Go To Basket Button', page, {
      selector: productsPageSelectors.header.goToBasketButton,
    });

    this.discountCheckbox = new CheckBoxElement('Discount Checkbox', page, {
      selector: productsPageSelectors.searchForm.discountCheckbox,
    });
    this.productItem = new ProductItemElement('item', page);
  }

  async getBasketCount(): Promise<number> {
    const countText = await this.basketCount.getText();
    return countText ? parseInt(countText, 10) : 0;
  }

  async clearBasketIfNotEmpty(): Promise<void> {
    const itemCount = await this.getBasketCount();
    if (itemCount > 0) {
      await this.basketDropdown.click();
      await this.clearBasketButton.click();
    }
  }

  async goToBasket(): Promise<void> {
    await this.basketDropdown.click();
    await this.goToBasketButton.click();
  }

  async filterDiscountedProducts(shouldShowDiscounted: boolean): Promise<void> {
    if (shouldShowDiscounted) {
      await this.discountCheckbox.check();
    } else {
      await this.discountCheckbox.uncheck();
    }
  }

  async verifyBasketCount(expectedCount: number): Promise<void> {
    await test.step(`Проверка количества товаров в корзине. Ожидается: ${expectedCount}`, async () => {
      const actualCount = await this.getBasketCount();
      expect(actualCount).toBe(expectedCount);
    });
  }

}
