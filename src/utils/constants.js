export const baseUrl = "https://newsapi.org";
export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
