import { BaseElement } from './base-element';
import { Page } from '@playwright/test';
import { test } from '@playwright/test';

/**
 * Элемент поля ввода
 */
export class Input extends BaseElement {
  constructor(
    signature: string,
    page: Page,
    { selector }: { selector: string },
  ) {
    super({ signature, page, selector });
  }

  async type(value: string): Promise<void> {
    await test.step(`Ввод значения "${value}" в поле "${this.elementSignature}"`, async () => {
      await this.element.fill('');
      await this.element.type(value, { delay: 100 });
    });
  }
}