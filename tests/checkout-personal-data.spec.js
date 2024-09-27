import { test, expect } from "@playwright/test";

test.describe("Dados Cliente", () => {
  test("Preencher dados para compra", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill("Vinicius");
    await page.locator('[data-test="lastName"]').fill("Oliveira");
    await page.locator('[data-test="postalCode"]').fill("12345");

    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();

    const successMessage = await page.locator(".complete-header").textContent();
    expect(successMessage).toContain("Thank you for your order!");
  });
});
