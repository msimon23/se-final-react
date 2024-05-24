import React, { useState, useEffect } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { getCards } from "../../utils/Api";
import { apiKey } from "../../utils/constants";

export default function NewsCardList() {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [data, setData] = useState([]);

  /* Run an action when the component mounts */
  useEffect(() => {
    async function fetchData() {
      try {
        const cards = await getCards({
          q: "dogs",
          apiKey,
          from: new Date("05/16/2024"),
          to: new Date(),
          pageSize: 100,
        });
        console.log(cards);
        setData(cards.articles);
      } catch (error) {
        // deal with the error
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  function handleShowMoreCards() {
    setCardsToShow(cardsToShow + 3);
  }

  return (
    <div className="results">
      <div className="results__cards-display">
        <h4 className="results__title">Search Results</h4>
        <div className="results__cards-inner">
          {data.slice(0, cardsToShow).map((datum) => {
            return (
              <NewsCard
                img={datum.urlToImage}
                key={`card-${datum.url}`}
                date={datum.publishedAt}
                title={datum.title}
                text={datum.description}
                src={datum.source.name}
              />
            );
          })}
        </div>
      </div>
      <button className="results__more-button" onClick={handleShowMoreCards}>
        Show more
      </button>
    </div>
  );
}
