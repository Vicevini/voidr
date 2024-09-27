class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.page.fill("#first-name", firstName);
    await this.page.fill("#last-name", lastName);
    await this.page.fill("#postal-code", postalCode);
    await this.page.click("#continue");
  }

  async getFirstName() {
    await this.page.waitForSelector("#first-name");
    return await this.page.inputValue("#first-name");
  }

  async getPostalCode() {
    await this.page.waitForSelector("#postal-code");
    return await this.page.inputValue("#postal-code");
  }
}

module.exports = { CheckoutPage };
