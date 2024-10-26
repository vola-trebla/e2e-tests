import { Page } from 'playwright';
import { homePageSelectors } from '../../selectors/homePageSelectors';
import { ButtonElement } from '../elements';

export class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get loginButton(): ButtonElement {
    return new ButtonElement('Login Button', this.page, {
      selector: homePageSelectors.navLinks.login,
    });
  }

  get registrationButton(): ButtonElement {
    return new ButtonElement('Registration Button', this.page, {
      selector: homePageSelectors.navLinks.registration,
    });
  }

  get logoButton(): ButtonElement {
    return new ButtonElement('Logo', this.page, {
      selector: homePageSelectors.logo,
    });
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async clickRegistration(): Promise<void> {
    await this.registrationButton.click();
  }

  async clickLogo(): Promise<void> {
    await this.logoButton.click();
  }
}
