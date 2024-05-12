// same things as newscardlist just have added buttons and badges on cards
// keyword badge on upper left and delete badge/button on upper right
// when hover over delete, remove from saved badge pops up next to it

// <Navbar background image behind nav and header=white text is black with users name showing(loggedIn={true}
import React from "react";
import "./SavedNewsNav.css";
import { useNavigate } from "react-router-dom";

export default function SavedNewsNav() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="saved">
      <p className="saved__sitename">NewsExplorer</p>
      <div className="saved__right-tabs">
        <p className="saved__home-tab" onClick={goToHome}>
          Home
        </p>
        <p className="saved__saved-articles-tab">Saved Articles</p>
        <div className="saved__saved-articles-tab-border"></div>
        <button className="saved__signin-button">
          NAME
          <div>
            <img
              className="img__signout"
              src="../../../images/signout.svg"
              alt="signout"
            />
          </div>
        </button>
      </div>
    </nav>
  );
}
