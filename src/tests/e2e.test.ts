import { test, expect } from '@playwright/test';
import { authorizeUser } from '../fixtures/authFixtures';
import { clearCart } from '../fixtures/cartFixtures';

test.beforeEach(async ({ page }) => {
  // Авторизуем пользователя
  await authorizeUser(page);

  // Очищаем корзину перед каждым тестом
  await clearCart(page);
});

test('Добавить товары в корзину', async ({ page }) => {
  // Шаг 1: Добавить 9 товаров в корзину
  for (let i = 0; i < 9; i++) {
    await page.click('button.add-to-cart');
  }

  // Ожидаемый результат: рядом с иконкой корзины отображается цифра 9
  const cartCount = await page.locator('.cart-icon .count').innerText();
  expect(cartCount).toBe('9');

  // Остальная часть теста...
});
