const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");

test("Ordenação de produtos por preço (menor para maior)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.sortByPriceLowToHigh();

  const firstProductPrice = await page.textContent(".inventory_item_price");
  expect(firstProductPrice).toBe("$7.99");
});
