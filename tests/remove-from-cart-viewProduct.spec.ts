import { test, expect } from "@playwright/test";

test.describe("Gerenciar Carrinho - Remover Produtos", () => {
  test("Remover produtos do carrinho", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    const cartItems = await page.locator(".cart_item").count();
    expect(cartItems).toBe(1);
  });
});
