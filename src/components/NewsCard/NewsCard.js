import React, { useState, useContext } from "react";
import { articleContext } from "../../contexts/ArticleProvider";
import "./NewsCard.css";

export default function NewsCard({
  img,
  date,
  title,
  text,
  src,
  url,
  keyword,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const { savedArticles, setSavedArticles } = useContext(articleContext);
  const isBookmarked = savedArticles.some((articleGroup) =>
    articleGroup.articles.some((article) => article === url)
  );

  const toggleBookmark = () => {
    if (isBookmarked) {
      setSavedArticles((prevSavedArticles) => {
        return prevSavedArticles.map((articleGroup) => {
          return {
            ...articleGroup,
            articles: articleGroup.articles.filter(
              (article) => article !== url
            ),
          };
        });
      });
    } else {
      setSavedArticles((prevSavedArticles) => {
        const articleCopy = [...prevSavedArticles];
        const articleGroup = articleCopy.find((ag) => ag.keyword === keyword);
        if (articleGroup) {
          articleGroup.articles.push(url);
        } else {
          articleCopy.push({ keyword, articles: [url] });
        }
        return articleCopy;
      });
    }
  };

  const getSrc = () => {
    if (isBookmarked) {
      return "/images/bookmark-marked.svg";
    } else if (isHovering) {
      return "/images/bookmark-hover.svg";
    } else {
      return "/images/bookmark-normal.svg";
    }
  };

  let adjustedTitle = title;
  if (title.length > 50) {
    adjustedTitle = adjustedTitle.slice(0, 50).trim() + "...";
  }

  return (
    <div className="newscard">
      <img className="newscard__image" src={img} alt="newscard" />
      <div
        style={{
          visibility: isHovering ? "visible" : "hidden",
        }}
        className="newscard__save-tag"
      >
        Sign in to save articles
      </div>
      <img
        className="newscard__bookmark-button"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        src={getSrc()}
        alt="bookmark"
        onClick={toggleBookmark}
      />
      <div className="newscard__text">
        <p className="newscard__date">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="newscard__title">{adjustedTitle}</h3>
        <p className="newscard__paragraph">{text}</p>
        <p className="newscard__src">{src}</p>
      </div>
    </div>
  );
}
