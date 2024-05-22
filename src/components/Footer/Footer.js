import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <Link to={"/"} className="footer__button">
          Home
        </Link>
        <a href="https://tripleten.com/" className="footer__button">
          Tripleten
        </a>
        <a href="https://github.com/">
          <img
            className="footer__social"
            src="../../../images/github.svg"
            alt="Github logo"
          />
        </a>
        <a href="https://www.facebook.com/tripleten.tech/">
          <img
            className="footer__social"
            src="../../../images/fb.svg"
            alt="Facebook logo"
          />
        </a>
      </nav>
    </footer>
  );
}
