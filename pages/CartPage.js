class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCheckout() {
    await this.page.click("#checkout");
  }

  async getCartTotal() {
    await this.page.waitForSelector(".summary_total_label");
    return await this.page.textContent(".summary_total_label");
  }
}

module.exports = { CartPage };
