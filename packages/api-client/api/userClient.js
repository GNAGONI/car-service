import { addCacheResistanceToParams } from '../lib/cache';

export default class User {
  constructor(client) {
    this.client = client;
    this.userProfile = '/profile';
  }

  getUserProfile = () => this.client.get(this.userProfile, addCacheResistanceToParams());

  deleteAccount = () => this.client.delete(this.userProfile);

  requestPersonalData = () => this.client.get(`${this.userProfile}/data-request`);
}
