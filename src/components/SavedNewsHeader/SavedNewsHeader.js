import React from "react";
import "./SavedNewsHeader.css";

export default function SavedNewsHeader({ name, number, keywords }) {
  // name = name from signedIn
  // number = number of times bookmark button is clicked - the times the delete button is clicked

  return (
    <div className="saved-header">
      <p className="saved-header__title">Saved articles</p>
      <h2 className="saved-header__text">
        `${name}, you have ${number} saved articles`
      </h2>
      <p className="keywords">
        By keywords: <b>`${keywords}`</b>
      </p>
    </div>
  );
}
