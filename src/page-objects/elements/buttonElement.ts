import { expect, Page, test } from '@playwright/test';
import { BaseElement } from './baseElement';

/**
 * Элемент кнопки
 */
export class ButtonElement extends BaseElement {
  constructor(signature: string, page: Page, { selector }: { selector: string }) {
    super({ signature, page, selector });
  }

  get typeOf(): string {
    return 'button';
  }

  async click(): Promise<void> {
    await super.click();
  }

  async shouldBeEnabled(): Promise<void> {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" не задизейблена`, async () => {
      await expect(this.element).toBeEnabled();
    });
  }

  async shouldBeDisabled(): Promise<void> {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" задизейблена`, async () => {
      await expect(this.element).toBeDisabled();
    });
  }
}
