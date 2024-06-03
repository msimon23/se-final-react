import React from "react";
import "./SavedNewsHeader.css";

export default function SavedNewsHeader({ articles }) {
  // name = name from signedIn
  const keywords = articles.map((article) => article.keyword).join(", ");
  const number = articles.reduce(
    (accumulator, articleGroup) => accumulator + articleGroup.articles.length,
    0
  );

  return (
    <div className="saved-header">
      <p className="saved-header__title">Saved articles</p>
      <h2 className="saved-header__text">
        Catelyn, you have {number} saved articles
      </h2>
      <p className="keywords">
        By keywords: <b>{keywords}</b>
      </p>
    </div>
  );
}
