import cacheData from 'memory-cache';

export const callAPI = async (url) => {
  const value = cacheData.get(url);
  if (value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  } else {
    return fetch(url).then((res) => {
      const hours = 24;
      const data = res.json();
      cacheData.put(url, data, hours * 1000 * 60 * 60);
      return data;
    });
  }
}
