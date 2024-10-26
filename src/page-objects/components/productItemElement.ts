import { Page } from '@playwright/test';
import {BaseElement, ButtonElement, InputElement, TextElement} from '../elements';
import { productsPageSelectors } from '../../selectors/productsPageSelectors';

/**
 * Элемент товара
 */
export class ProductItemElement extends BaseElement {
  buyButton: ButtonElement;
  stockCount: TextElement;
  countInput: InputElement;

  constructor( signature: string, page: Page) {
    super({ signature, page, selector: productsPageSelectors.productItems.itemContainer });
    this.buyButton = new ButtonElement('Кнопка "Купить"', page, {
      selector: productsPageSelectors.productItems.itemBuyButton,
    });
    this.stockCount = new TextElement('Кол-во на Складе', page, {
      selector: productsPageSelectors.productItems.itemStock,
    });
    this.countInput = new InputElement('Кол-во для покупки', page, {
      selector: productsPageSelectors.productItems.itemCountInput,
    });
  }

  get typeOf(): string {
    return 'item';
  }

  async setCount(count: number): Promise<void> {
    const firstInput = await this.countInput.first();
    await firstInput.fill(count.toString());
  }

  async buy(): Promise<void> {
    const firstBuyButton = await this.buyButton.first();
    await this.page.waitForTimeout(4000);
    await firstBuyButton.click();
  }

  async getStockCount(): Promise<number> {
    const stockText = await this.stockCount.getText();
    return stockText ? parseInt(stockText, 10) : 0;
  }
}