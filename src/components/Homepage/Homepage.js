import "./Homepage.css";
import React from "react";
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
  const handleSearchResponse = ({ q, apiKey, from, to, pageSize }) => {
    getCards({ q, apiKey, from, to, pageSize });
  };

  return (
    <div className="Homepage">
      <div className="background-image">
        <Navbar />
        <Header />
        <SearchForm onSearch={handleSearchResponse} />
      </div>
      <NewsCardList />
      <About />
      <Footer />
      {/* <LoginModal /> */}
      {/* <RegisterModal /> */}
      {/* <ModalWithJustText /> */}
    </div>
  );
}
