class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async clickFinish() {
    await this.page.click("#finish");
  }
}

module.exports = { CheckoutOverviewPage };
