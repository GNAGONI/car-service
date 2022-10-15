import fetch from 'cross-fetch';

export default class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getConfig(method, data) {
    const config = {
      method: method.toUpperCase(),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (this.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };
    }

    if (data) {
      config.body = JSON.stringify(data);
    }

    return config;
  }

  postFormDataConfig(formData) {
    return {
      method: 'post',
      body: formData,
      headers: {
        Authorization: this.accessToken ? `Bearer ${this.accessToken}` : '',
      },
    };
  }

  request(endpoint, config) {
    return fetch(endpoint, config).then(response => {
      const { status } = response;

      if (status === 204) {
        return { status: response.status };
      }

      if (status >= 200 && status < 300) {
        return response
          .json()
          .then(({ data: res, result }) => res || result)
          .catch(error => {
            throw error;
          });
      }

      return response.json().then(err => {
        const error = err;
        error.status = response.status;
        throw error;
      });
    });
  }

  get(endpoint, params) {
    const query = params ? `?${params}` : '';
    return this.request(`${this.baseUrl}${endpoint}${query}`, this.getConfig('get', null));
  }

  patch(endpoint, data) {
    return this.request(`${this.baseUrl}${endpoint}`, this.getConfig('patch', data));
  }

  post(endpoint, data) {
    return this.request(`${this.baseUrl}${endpoint}`, this.getConfig('post', data));
  }

  postFormData(endpoint, data) {
    return this.request(`${this.baseUrl}${endpoint}`, this.postFormDataConfig(data));
  }

  put(endpoint, data) {
    return this.request(`${this.baseUrl}${endpoint}`, this.getConfig('put', data));
  }

  delete(endpoint, data) {
    return this.request(`${this.baseUrl}${endpoint}`, this.getConfig('delete', data));
  }

  set token(token) {
    this.accessToken = token;
  }
}
