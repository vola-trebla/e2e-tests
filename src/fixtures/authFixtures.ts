import { Page } from '@playwright/test';

export async function authorizeUser(page: Page) {
  await page.goto('https://enotes.pointschool.ru');
  await page.fill('input[name="username"]', 'test');
  await page.fill('input[name="password"]', 'test');
  await page.click('button[type="submit"]');
}
