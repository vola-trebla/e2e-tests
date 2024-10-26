import { Page } from '@playwright/test';

export class InputField {
  constructor(
    private page: Page,
    private selector: string,
  ) {}

  async type(text: string) {
    await this.page.fill(this.selector, text);
  }

  async clear() {
    await this.page.fill(this.selector, '');
  }
}
