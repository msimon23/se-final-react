import React, { useState } from "react";
import "./SavedNewsCard.css";

export default function SavedNewsCard({
  img,
  keyword,
  date,
  title,
  text,
  src,
  url,
  onDelete,
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="newscard">
      <img className="newscard__image" src={img} alt="newscard" />
      <div className="newscard__keyword-tag">{keyword}</div>
      <div
        style={{
          visibility: isHovering ? "visible" : "hidden",
        }}
        className="newscard__delete-hover-tag"
      >
        Remove from saved
      </div>
      <img
        className="newscard__delete-button"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        src="../../../images/delete-icon.svg"
        alt="delete"
        onClick={() => onDelete(url)}
      />
      <div className="newscard__text">
        <p className="newscard__date">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="newscard__title">{title}</h3>
        <p className="newscard__paragraph">{text}</p>
        <p className="newscard__src">{src}</p>
      </div>
    </div>
  );
}
