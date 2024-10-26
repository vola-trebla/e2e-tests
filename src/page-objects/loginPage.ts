import { Page } from 'playwright';
import { loginPageSelectors } from '../selectors/loginPageSelectors';
import { ButtonElement } from './elements/button';
import { Input } from './elements/input';

export class LoginPage {
  usernameInput: Input;
  passwordInput: Input;
  loginButton: ButtonElement;

  constructor(page: Page) {
    this.usernameInput = new Input('Username Input', page, {
      selector: loginPageSelectors.usernameInput,
    });
    this.passwordInput = new Input('Password Input', page, {
      selector: loginPageSelectors.passwordInput,
    });
    this.loginButton = new ButtonElement('Login Button', page, {
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
