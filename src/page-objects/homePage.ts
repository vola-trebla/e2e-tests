import { Page } from 'playwright';
import { homePageSelectors } from '../selectors/homePageSelectors';
import { ButtonElement } from './elements/button';

export class HomePage {
  loginButton: ButtonElement;
  registrationButton: ButtonElement;
  logoButton: ButtonElement;

  constructor(page: Page) {
    this.loginButton = new ButtonElement('Login Button', page, {
      selector: homePageSelectors.navLinks.login,
    });
    this.registrationButton = new ButtonElement('Registration Button', page, {
      selector: homePageSelectors.navLinks.registration,
    });
    this.logoButton = new ButtonElement('Logo', page, {
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
