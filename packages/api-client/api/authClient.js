export default class {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/auth';
  }

  login = data => this.client.post(`${this.resourceUrl}/login`, data);

  logout = () => this.client.post(`${this.resourceUrl}/logout`);

  refreshToken = () => this.client.post(`${this.resourceUrl}/refresh-token`);

  changePassword = data => this.client.post(`${this.resourceUrl}/change-password`, data);

  customerSignUp = data => this.client.post(`${this.resourceUrl}/sign-up/customer`, data);

  forgotPassword = data => this.client.post(`${this.resourceUrl}/reset-password/send-token`, data);

  resetPassword = data => this.client.post(`${this.resourceUrl}/reset-password`, data);
}
