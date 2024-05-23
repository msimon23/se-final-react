import "./Homepage.css";
import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import { getCards } from "../../utils/Api";
// import RegisterModal from "../RegisterModal/RegisterModal";
// import LoginModal from "../LoginModal/LoginModal";
// import ModalWithJustText from "../ModalWithJustText/ModalWithJustText";

export default function Homepage() {
  const [cards, setCards] = useState([]);

  const handleSearchResponse = ({ q, apiKey, from, to, pageSize }) => {
    getCards({ q, apiKey, from, to, pageSize })
      .then((res) => {
        console.log(res);
        setCards(res.articles);
      })
      .catch((err) => {
        console.error(err.message, "api not working");
      });
  };

  return (
    <div className="Homepage">
      <div className="background-image">
        <Navbar />
        <Header />
        <SearchForm onSearch={handleSearchResponse} />
      </div>
      <NewsCardList cards={cards} />
      <About />
      <Footer />
      {/* <LoginModal /> */}
      {/* <RegisterModal /> */}
      {/* <ModalWithJustText /> */}
    </div>
  );
}
