import { expect, Page, test } from '@playwright/test';
import { productsPageSelectors } from '../../selectors/productsPageSelectors';
import { ButtonElement, TextElement, CheckBoxElement } from '../elements';
import { ProductItemElement } from '../components/productItemElement';

export class ProductsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get basketDropdown(): ButtonElement {
    return new ButtonElement('Basket Dropdown', this.page, {
      selector: productsPageSelectors.header.basketDropdown,
    });
  }

  get basketCount(): TextElement {
    return new TextElement('Basket Count', this.page, {
      selector: productsPageSelectors.header.basketCount,
    });
  }

  get clearBasketButton(): ButtonElement {
    return new ButtonElement('Clear Basket Button', this.page, {
      selector: productsPageSelectors.header.clearBasketButton,
    });
  }

  get goToBasketButton(): ButtonElement {
    return new ButtonElement('Go To Basket Button', this.page, {
      selector: productsPageSelectors.header.goToBasketButton,
    });
  }

  get discountCheckbox(): CheckBoxElement {
    return new CheckBoxElement('Discount Checkbox', this.page, {
      selector: productsPageSelectors.searchForm.discountCheckbox,
    });
  }

  get productItem(): ProductItemElement {
    return new ProductItemElement('item', this.page);
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
