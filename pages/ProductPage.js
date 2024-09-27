const { expect } = require("@playwright/test");

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async getProductName() {
    return await this.page.textContent(".inventory_details_name");
  }
}

module.exports = { ProductPage };
