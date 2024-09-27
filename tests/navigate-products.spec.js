const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("Navegação entre páginas de produtos", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await page.click(".inventory_item_name");
  await expect(page).toHaveURL(/inventory-item\.html/);

  await page.goBack();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
