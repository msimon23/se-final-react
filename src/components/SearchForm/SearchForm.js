import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import { apiKey } from "../../utils/constants";

export default function SearchForm({ onSearch, onChange }) {
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    // onChange(e.target.value);
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
    onSearch({
      q: keyword,
      apiKey,
      from: startDate,
      to: endDate,
      pageSize: 100,
    });
  };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        onChange={handleKeywordChange}
        value={keyword}
      />
      <button className="search-form__button" onClick={handleSearchButtonClick}>
        Search
      </button>
    </form>
  );
}
