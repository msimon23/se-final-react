import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import data from "../../mockData/news-data.json";

export default function NewsCardList() {
  const [cardsToShow, setCardsToShow] = useState(3);

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
                img={datum.img}
                key={`card-${datum.id}`}
                date={datum.date}
                title={datum.title}
                text={datum.text}
                src={datum.src}
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
