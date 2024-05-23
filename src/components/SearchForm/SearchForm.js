import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import { apiKey } from "../../utils/constants";

export default function SearchForm({ onSearch }) {
  // constant for search value using useState (searchValue, setsearchValue)
  // create arrow function for when user searches for news and changes
  // user types in search box "space"
  //s sp spa spac space
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const currentDate = new Date();

    const priorDate = new Date(currentDate);
    priorDate.setDate(currentDate.getDate() - 7);
    console.log({ currentDate, priorDate });

    setStartDate(priorDate.toISOString().split("T")[0]);
    setEndDate(currentDate.toISOString().split("T")[0]);
  }, []);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    // q = user input ; apiKey = apiKey ; from and to are going to need another function determining the date ; pageSize = 100
    onSearch({
      q: keyword,
      apiKey: apiKey,
      pageSize: 100,
      from: startDate,
      to: endDate,
    });
  };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        onChange={handleChange}
      />
      <button className="search-form__button" onClick={handleSearchButtonClick}>
        Search
      </button>
    </form>
  );
}
