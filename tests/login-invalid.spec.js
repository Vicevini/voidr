const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("Login com credenciais inválidas", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("invalid_user", "invalid_password");

  await loginPage.assertErrorMessageVisible();
});
