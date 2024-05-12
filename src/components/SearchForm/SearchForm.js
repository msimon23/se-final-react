import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  function getSearchResults() {
    console.log("clicked");
  }

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search-form__button" onClick={getSearchResults}>
        Search
      </button>
    </form>
  );
}
