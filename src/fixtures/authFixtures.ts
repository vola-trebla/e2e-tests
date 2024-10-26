import { Page } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { HomePage } from '../page-objects/homePage';

export async function authorizeUser(page: Page) {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await page.goto('https://enotes.pointschool.ru'); // Переход на главную страницу
  await homePage.clickLogin();
  await loginPage.loginButton.shouldBeDisabled();
  await loginPage.login('test', 'test'); // Логин с тестовыми данными
}
