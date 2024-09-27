const { expect } = require("@playwright/test");

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = ".shopping_cart_badge";
    this.addToCartButton = "#add-to-cart-sauce-labs-backpack";
    this.removeFromCartButton = "#remove-sauce-labs-backpack";
    this.productSortDropdown = ".product_sort_container";
    this.logoutButton = "#logout_sidebar_link";
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }

  async removeFromCart() {
    await this.page.click(this.removeFromCartButton);
  }

  async assertCartHasItems(count) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(
      count.toString()
    );
  }

  async sortByPriceLowToHigh() {
    await this.page.selectOption(this.productSortDropdown, "lohi");
  }

  async sortByNameAToZ() {
    await this.page.selectOption(this.productSortDropdown, "az");
  }

  async clickOnProductName(productName) {
    await this.page.click(`text=${productName}`);
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }

  async logout() {
    await this.page.click("#react-burger-menu-btn");
    await this.page.click(this.logoutButton);
  }

  async addProductToCart(productName) {
    const productLocator = `//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button`;
    await this.page.click(productLocator);
  }
}

module.exports = { InventoryPage };
