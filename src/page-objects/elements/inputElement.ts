import { BaseElement } from './baseElement';
import { Page } from '@playwright/test';
import { test } from '@playwright/test';

/**
 * Элемент поля ввода
 */
export class InputElement extends BaseElement {
  constructor(signature: string, page: Page, { selector }: { selector: string }) {
    super({ signature, page, selector });
  }

  async type(value: string): Promise<void> {
    await test.step(`Ввод значения "${value}" в поле "${this.elementSignature}"`, async () => {
      console.log('Element:', this.element); // Добавьте отладочное сообщение

      await this.element.click();
      await this.element.fill('');
      await this.element.type(value, { delay: 100 });
    });
  }
}
