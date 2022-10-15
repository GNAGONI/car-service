export default class {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/customer';
  }

  editProfile = data => this.client.post(`${this.resourceUrl}/profile`, data);
}
