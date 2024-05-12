import React from "react";
// import { useState } from "react";
// import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SavedNewsCardList.css";

export default function SavedNewsCardList() {
  // const savedCards = [isBookmarked, setIsBookmarked] = useState(true)    ???

  return (
    <div className="savedlist">
      <div className="savedlist__cards-display">
        {/* {isBookmarked &&
          data.map((datum) => {
            return (
              <SavedNewsCard
                img={datum.img}
                key={`card-${datum.id}`}
                keyword={datum.keyword}
                date={datum.date}
                title={datum.title}
                text={datum.text}
                src={datum.src}
              />
            );
          })} */}
      </div>
    </div>
  );
}
