const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");

test("Ordenação de produtos por nome (A-Z)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.sortByNameAToZ();

  const firstProductName = await page.textContent(".inventory_item_name");

  expect(firstProductName).toBe("Sauce Labs Backpack");
});
