export default class Enquiry {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/contact-us';
  }

  sendEnquiry = data => this.client.post(`${this.resourceUrl}`, data);
}
