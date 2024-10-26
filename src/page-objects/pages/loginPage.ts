import { Page } from 'playwright';
import { loginPageSelectors } from '../../selectors/loginPageSelectors';
import { ButtonElement } from '../elements';
import { InputElement } from '../elements';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get usernameInput(): InputElement {
    return new InputElement('Username Input', this.page, {
      selector: loginPageSelectors.usernameInput,
    });
  }

  get passwordInput(): InputElement {
    return new InputElement('Password Input', this.page, {
      selector: loginPageSelectors.passwordInput,
    });
  }

  get loginButton(): ButtonElement {
    return new ButtonElement('Login Button', this.page, {
      selector: loginPageSelectors.loginButton,
    });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.loginButton.shouldBeEnabled();
    await this.loginButton.click();
  }
}
