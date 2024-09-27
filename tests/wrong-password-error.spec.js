const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("Erro de senha incorreta", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "wrong_password");

  await loginPage.assertErrorMessageVisible();
});
