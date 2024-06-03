import React, { useContext } from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SavedNewsCardList.css";
import { articleContext } from "../../contexts/ArticleProvider";

export default function SavedNewsCardList({ cards, keyword }) {
  const { savedArticles, setSavedArticles } = useContext(articleContext);

  const handleDeleteCard = (url) => {
    setSavedArticles((prevSavedArticles) => {
      return prevSavedArticles.filter((articleGroup) => {
        articleGroup.articles = articleGroup.articles.filter(
          (article) => article.url !== url
        );
        if (articleGroup.articles.length === 0) {
          return false;
        } else {
          return true;
        }
      });
    });
  };

  return (
    <div className="savedlist">
      <div className="savedlist__cards-display">
        {savedArticles.map((articleGroup) =>
          articleGroup.articles.map((article) => {
            return (
              <SavedNewsCard
                img={article.img}
                key={`card-${article.url}`}
                keyword={articleGroup.keyword}
                date={article.date}
                title={article.title}
                text={article.text}
                src={article.src}
                url={article.url}
                onDelete={handleDeleteCard}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
