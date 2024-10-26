import { Locator, Page } from '@playwright/test';
import { BaseElement } from './baseElement';
import { test, expect } from '@playwright/test';

/**
 * Класс для работы с текстовыми элементами
 */
export class TextElement extends BaseElement {
  constructor(
    signature: string,
    page: Page,
    { selector, parent }: { selector: string; parent?: Locator },
  ) {
    super({ signature, page, selector, parent });
  }

  get typeOf(): string {
    return 'text element';
  }

  async getText(): Promise<string> {
    return await test.step(`Получение текста из ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      return (await this.element.textContent()) || '';
    });
  }

  async shouldContainText(expectedText: string): Promise<void> {
    await test.step(`Проверка, что ${this.typeOf} с именем "${this.elementSignature}" содержит текст "${expectedText}"`, async () => {
      await expect(this.element).toContainText(expectedText);
    });
  }
}
