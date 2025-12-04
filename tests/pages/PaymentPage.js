class PaymentPage {
  constructor(page) {
    this.page = page;

    this.inputName = 'input[data-qa="name-on-card"]';
    this.inputCard = 'input[data-qa="card-number"]';
    this.inputCVC = 'input[data-qa="cvc"]';
    this.inputMonth = 'input[data-qa="expiry-month"]';
    this.inputYear = 'input[data-qa="expiry-year"]';

    this.payBtn = 'button[data-qa="pay-button"]';
  }

  async fillPaymentForm(name, number, cvc, month, year) {
    await this.page.locator(this.inputName).fill(name);
    await this.page.locator(this.inputCard).fill(number);
    await this.page.locator(this.inputCVC).fill(cvc);
    await this.page.locator(this.inputMonth).fill(month);
    await this.page.locator(this.inputYear).fill(year);
  }

  async submitPayment() {
    await this.page.locator(this.payBtn).click();
  }
}

module.exports = PaymentPage;
