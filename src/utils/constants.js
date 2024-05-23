export const baseUrl = "https://newsapi.org/v2";
export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
export const apiKey = "cb67ae75613040339813c15d377d39b2";
