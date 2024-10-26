import { expect, Page, test } from '@playwright/test';
import { BaseElement } from './baseElement';

/**
 * Элемент чекбокса
 */
export class CheckBoxElement extends BaseElement {
  constructor(signature: string, page: Page, { selector }: { selector: string }) {
    super({ signature, page, selector });
  }

  get typeOf(): string {
    return 'checkbox';
  }

  async check(): Promise<void> {
    await test.step(`Отметка чекбокса "${this.elementSignature}"`, async () => {
      if (!(await this.isChecked())) {
        await this.element.check();
        await this.page.waitForTimeout(4000);
      }
    });
  }

  async uncheck(): Promise<void> {
    await test.step(`Снятие отметки с чекбокса "${this.elementSignature}"`, async () => {
      if (await this.isChecked()) {
        await this.element.uncheck();
        await this.page.waitForTimeout(4000);
      }
    });
  }

  async isChecked(): Promise<boolean> {
    return await this.element.isChecked();
  }

  async shouldBeChecked(): Promise<void> {
    await test.step(`Чекбокс "${this.elementSignature}" должен быть отмечен`, async () => {
      await expect(this.element).toBeChecked();
    });
  }

  async shouldBeUnchecked(): Promise<void> {
    await test.step(`Чекбокс "${this.elementSignature}" должен быть снят`, async () => {
      await expect(this.element).not.toBeChecked();
    });
  }
}
