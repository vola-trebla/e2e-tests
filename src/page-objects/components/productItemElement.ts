import { Page } from '@playwright/test';
import { BaseElement, ButtonElement, InputElement, TextElement } from '../elements';
import { productsPageSelectors } from '../../selectors/productsPageSelectors';

/**
 * Элемент товара
 */
export class ProductItemElement extends BaseElement {
  constructor(signature: string, page: Page) {
    super({ signature, page, selector: productsPageSelectors.productItems.itemContainer });
  }

  get buyButton(): ButtonElement {
    return new ButtonElement('Кнопка "Купить"', this.page, {
      selector: productsPageSelectors.productItems.itemBuyButton,
    });
  }

  get stockCount(): TextElement {
    return new TextElement('Кол-во на Складе', this.page, {
      selector: productsPageSelectors.productItems.itemStock,
    });
  }

  get countInput(): InputElement {
    return new InputElement('Кол-во для покупки', this.page, {
      selector: productsPageSelectors.productItems.itemCountInput,
    });
  }

  get typeOf(): string {
    return 'item';
  }

  async setCount(count: number): Promise<void> {
    await this.countInput.first().then(input => input.fill(count.toString()));
  }

  async setCountIfStockAllows(count: number): Promise<void> {
    const countInputs = await this.countInput.all();
    const stockCounts = await this.stockCount.all();
    for (let i = 0; i < stockCounts.length; i++) {
      const stockText = await stockCounts[i].textContent();
      const stockValue = stockText ? parseInt(stockText, 10) : 0;
      if (stockValue >= count) {
        await countInputs[i].fill(count.toString());
        break; // Останавливаемся после первой удовлетворяющей записи
      }
    }
  }

  async buy(): Promise<void> {
    await this.buyButton.first().then(async button => {
      await this.page.waitForTimeout(4000);
      await button.click();
    });
  }

  async getStockCount(): Promise<number> {
    const stockText = await this.stockCount.getText();
    return stockText ? parseInt(stockText, 10) : 0;
  }
}
