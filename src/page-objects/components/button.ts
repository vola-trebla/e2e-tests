import { Page } from '@playwright/test';

export class Button {
  constructor(
    private page: Page,
    private selector: string,
  ) {}

  async click() {
    await this.page.click(this.selector);
  }

  async isVisible() {
    return await this.page.isVisible(this.selector);
  }
}
