import { Page } from '@playwright/test';

export async function clearCart(page: Page) {
  await page.goto('https://enotes.pointschool.ru/cart'); // Переход на страницу корзины
  await page.click('button#clear-cart'); // Предполагаем, что есть кнопка для очистки корзины
}
