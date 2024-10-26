import { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { ElementHandle } from 'playwright';

/**
 * Базовый класс для работы с элементами
 */
export class BaseElement {
  private readonly _page: Page;
  private readonly _signature: string;
  private readonly _selector: string;

  constructor({
    signature,
    page,
    selector,
  }: {
    signature: string;
    page: Page;
    selector: string;
  }) {
    this._page = page;
    this._signature = signature;
    this._selector = selector;
  }

  get page(): Page {
    return this._page;
  }

  get selector(): string {
    return this._selector;
  }

  private getElement(selector: string): Locator {
    return this.page.locator(selector);
  }

  get element(): Locator {
    return this.getElement(this.selector);
  }

  async getElementHandle(): Promise<ElementHandle<
    SVGElement | HTMLElement
  > | null> {
    return await this.element.elementHandle();
  }

  get typeOf(): string {
    return 'element';
  }

  get elementSignature(): string {
    if (!this._signature) {
      throw new Error('Укажите свойство "signature"');
    }
    return this._signature;
  }

  async hover(): Promise<void> {
    await test.step(`Ховер на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.hover({ force: true });
    });
  }

  async click(): Promise<void> {
    await test.step(`Клик на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.click({ force: true });
    });
  }

  async doubleClick(): Promise<void> {
    await test.step(`Двойной клик на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.click({ clickCount: 2 });
    });
  }

  async type(text: string): Promise<void> {
    await test.step(`Ввод текста "${text}" в ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.fill(text); // Или используем type(), если нужно
    });
  }

  async selectOption(value: string): Promise<void> {
    await test.step(`Выбрать option`, async () => {
      await this.element.selectOption(value);
    });
  }

  async shouldBeVisible(): Promise<void> {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" должен быть виден`, async () => {
      await expect(this.element).toBeVisible();
    });
  }

  async shouldContainText(text: string): Promise<void> {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" содержит текст`, async () => {
      await expect(this.element).toContainText(text);
    });
  }

  async waitForVisible(timeout: number = 5000): Promise<void> {
    await test.step(`Ожидание видимости ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.waitFor({ state: 'visible', timeout });
    });
  }

  async waitForHidden(timeout: number = 5000): Promise<void> {
    await test.step(`Ожидание скрытия ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.waitFor({ state: 'hidden', timeout });
    });
  }
}
