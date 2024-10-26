import { Page } from '@playwright/test';
import { InputField } from './components/inputField';
import { Button } from './components/button';

export class LoginPage {
  private usernameInput: InputField;
  private passwordInput: InputField;
  private submitButton: Button;

  constructor(private page: Page) {
    this.usernameInput = new InputField(page, 'input[name="username"]');
    this.passwordInput = new InputField(page, 'input[name="password"]');
    this.submitButton = new Button(page, 'button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://enotes.pointschool.ru');
  }

  async login(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.submitButton.click();
  }
}
