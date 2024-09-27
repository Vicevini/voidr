const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { ProductPage } = require("../pages/ProductPage");

test("Acessar página do produto clicando em seu nome", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  const productName = "Sauce Labs Backpack";
  await inventoryPage.clickOnProductName(productName);

  const productPageName = await productPage.getProductName();
  expect(productPageName).toBe(productName);
});
