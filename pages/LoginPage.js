const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
    this.errorMessage = ".error-message-container";
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async assertErrorMessageVisible() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}

module.exports = { LoginPage };
