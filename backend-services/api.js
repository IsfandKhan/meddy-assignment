import cacheData from 'memory-cache';

class API {
  constructor(time = 24) {
    this.cacheTime = time;
    this.API_URL = process.env.NEXT_PUBLIC_API_URL;
  }

  async get(url) {
    const value = cacheData.get(url);
    if (value) {
      return new Promise((resolve) => {
        resolve(value);
      });
    } else {
      return fetch(this.API_URL + url).then((res) => {
        const data = res.json();
        cacheData.put(url, data, this.cacheTime * 1000 * 60 * 60);
        return data;
      });
    }
  }

  async post(url, body) {
    await fetch(this.API_URL + url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }
}

export const request = new API();
