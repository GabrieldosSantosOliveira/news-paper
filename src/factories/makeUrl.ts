export const makeUrl = (baseUrl: string, url: string) => {
  return new URL(url, baseUrl).toString();
};
