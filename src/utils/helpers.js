export function formatUrl(url, data) {
  return url.replace(/<([^>]+)>/g, (match, key) => {
    if (key in data) {
      return data[key];
    } else {
      throw new Error(`Missing value for placeholder: ${key}`);
    }
  });
}
