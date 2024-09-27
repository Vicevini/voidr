class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
  }

  async getConfirmationMessage() {
    return await this.page.textContent(".complete-header");
  }
}

module.exports = { CheckoutCompletePage };
