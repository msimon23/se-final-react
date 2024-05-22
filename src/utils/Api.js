import { baseUrl, processResponseServer } from "./constants";

async function getCards({ q, apiKey, from, to, pageSize }) {
  return fetch(
    `${baseUrl}/everything?q=${q}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: apiKey,
      },
    }
  ).then(processResponseServer);
  //fetch api request
  //method
  //headers
  //if res is good  ... convert
  //GET https://newsapi.org/v2/top-headlines?country=us&apiKey=[your_key]
}

export { getCards };
