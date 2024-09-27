const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { CheckoutOverviewPage } = require("../pages/CheckoutOverviewPage");
const { CheckoutCompletePage } = require("../pages/CheckoutCompletePage");

test("Realizar uma compra até o final", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addProductToCart("Sauce Labs Backpack");

  await inventoryPage.goToCart();
  await cartPage.clickCheckout();

  await checkoutPage.fillCheckoutInfo("John", "Doe", "12345");

  await checkoutOverviewPage.clickFinish();

  const confirmationMessage =
    await checkoutCompletePage.getConfirmationMessage();
  expect(confirmationMessage).toBe("Thank you for your order!");
});
