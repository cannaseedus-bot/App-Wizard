export class APIClient {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  }
}
