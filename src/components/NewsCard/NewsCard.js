import React, { useState } from "react";
import "./NewsCard.css";

export default function NewsCard({ img, date, title, text, src }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevBookmarked) => !prevBookmarked);
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
        <p className="newscard__date">{date}</p>
        <h3 className="newscard__title">{title}</h3>
        <p className="newscard__paragraph">{text}</p>
        <p className="newscard__src">{src}</p>
      </div>
    </div>
  );
}
