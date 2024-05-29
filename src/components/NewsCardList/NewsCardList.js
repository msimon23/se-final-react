import React, { useState, useEffect } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList({ cards, keyword }) {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    setCardsToShow(3);
  }, [cards]);

  function handleShowMoreCards() {
    setCardsToShow(cardsToShow + 3);
  }

  return (
    <div className="results">
      <div className="results__cards-display">
        <h4 className="results__title">Search Results</h4>
        <div className="results__cards-inner">
          {cards.slice(0, cardsToShow).map((datum) => {
            return (
              <NewsCard
                img={datum.urlToImage}
                key={`card-${datum.url}`}
                date={datum.publishedAt}
                title={datum.title}
                text={datum.description}
                src={datum.source.name}
                url={datum.url}
                keyword={keyword}
              />
            );
          })}
        </div>
      </div>
      {cards.length > cardsToShow && (
        <button className="results__more-button" onClick={handleShowMoreCards}>
          Show more
        </button>
      )}
    </div>
  );
}
