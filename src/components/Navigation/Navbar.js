import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  const toggleSignIn = () => {
    setSignedIn((prevSignedIn) => !prevSignedIn);
  };

  const goToSavedArticles = () => {
    navigate("saved-articles");
  };

  return (
    <nav className="navbar">
      <p className="navbar__sitename">NewsExplorer</p>
      <div className="navbar__right-tabs">
        <p className="navbar__home-tab">Home</p>
        <div className="navbar__home-tab-border-selected"></div>
        {signedIn && (
          <button onClick={goToSavedArticles} className="navbar__saved-tab">
            Saved Articles
          </button>
        )}
        <button onClick={toggleSignIn} className="navbar__signin-button">
          {signedIn ? "Name" : "Sign In"}
        </button>
      </div>
    </nav>
  );
}
