import { baseUrl } from "./constants";

export async function getCards({ q, apiKey, from, to, pageSize }) {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    const rawData = await fetch(
      `${baseUrl}/everything?q=${q}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          authorization: apiKey,
        },
      }
    );
    const jsonData = await rawData.json();
    return jsonData;
  } catch (err) {
    // fix me
  }
}
