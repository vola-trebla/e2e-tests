import { ProductsPage } from './pages/productsPage';

declare global {
  namespace PlaywrightTest {
    interface TestInfo {
      productsPage?: ProductsPage;
    }
  }
}
