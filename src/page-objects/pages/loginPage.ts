import { Page } from 'playwright';
import { loginPageSelectors } from '../../selectors/loginPageSelectors';
import { ButtonElement } from '../elements/buttonElement';
import { InputElement } from '../elements/inputElement';

export class LoginPage {
  usernameInput: InputElement;
  passwordInput: InputElement;
  loginButton: ButtonElement;

  constructor(page: Page) {
    this.usernameInput = new InputElement('Username InputElement', page, {
      selector: loginPageSelectors.usernameInput,
    });
    this.passwordInput = new InputElement('Password InputElement', page, {
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
