import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
  }

  function handleTripletenClick() {
    navigate("https://tripleten.com/");
  }

  function handleGithubClick() {
    navigate("https://github.com/");
  }

  function handleFacebookClick() {
    navigate("https://www.facebook.com/tripleten.tech/");
  }

  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <button className="footer__button" onClick={handleHomeClick}>
          Home
        </button>
        <button className="footer__button" onClick={handleTripletenClick}>
          Tripleten
        </button>
        <img
          className="footer__social"
          src="../../../images/github.svg"
          alt="Github logo"
          onClick={handleGithubClick}
        />
        <img
          className="footer__social"
          src="../../../images/fb.svg"
          alt="Facebook logo"
          onClick={handleFacebookClick}
        />
      </nav>
    </footer>
  );
}
