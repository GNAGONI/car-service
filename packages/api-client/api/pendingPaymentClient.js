export default class PendingPayment {
  constructor(client) {
    this.client = client;
    this.resourceCarListUrl = '/pending/payment';
  }

  getPendingPaymentsCarList = () => {};
}
