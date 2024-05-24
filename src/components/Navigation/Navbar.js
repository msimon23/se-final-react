import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
// import LoginModal from "../LoginModal/LoginModal";

export default function Navbar({ onOpenLogin }) {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // const toggleSignIn = () => {
  // setSignedIn((prevSignedIn) => !prevSignedIn);
  // if (signedIn) {
  //   setSignedIn(false);
  // } else {
  //   handleOpenLoginModal();
  // }
  // setIsLoginModalOpen((prevState) => !prevState);
  // };

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
        <button
          onClick={() => {
            onOpenLogin();
            // toggleSignIn();
          }}
          className="navbar__signin-button"
        >
          {signedIn ? "Name" : "Sign In"}
        </button>
      </div>
    </nav>
  );
}
