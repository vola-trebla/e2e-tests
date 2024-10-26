import { test, expect } from '@playwright/test';
import { authorizeUser } from '../fixtures/authFixtures';
import { clearCart } from '../fixtures/cartFixtures';

test.beforeEach(async ({ page }) => {
  await authorizeUser(page);
  // Очищаем корзину перед каждым тестом
});

test('test', async ({ page }) => {});
