import { Page } from '@playwright/test';
import { LoginPage } from '../page-objects/pages/loginPage';
import { HomePage } from '../page-objects/pages/homePage';
import { getEnvVar } from '../utils/env';

export async function authorizeUser(page: Page) {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await page.goto(getEnvVar('BASE_URL'));
  await homePage.clickLogin();
  await loginPage.loginButton.shouldBeDisabled();
  await loginPage.login(getEnvVar('USERNAME'), getEnvVar('PASSWORD'));
}
