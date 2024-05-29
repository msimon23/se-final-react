import "./Homepage.css";
import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import { getCards } from "../../utils/Api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Preloader from "../Preloader/Preloader";
// import ModalWithJustText from "../ModalWithJustText/ModalWithJustText"; I think this may get rendered in the login modal

export default function Homepage() {
  const [cards, setCards] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleSearchResponse = async ({ q, apiKey, from, to, pageSize }) => {
    setIsLoading(true);
    try {
      const cards = await getCards({ q, apiKey, from, to, pageSize });
      setKeyword(q);
      setCards(cards.articles);
      setHasSearched(true);
    } catch (err) {
      console.error(err.message, "api not working");
    }
    setIsLoading(false);
  };

  return (
    <div className="Homepage">
      <div className="background-image">
        <Navbar onOpenLogin={handleOpenLoginModal} />
        <Header />
        <SearchForm onSearch={handleSearchResponse} />
      </div>
      {hasSearched && !isLoading && (
        <NewsCardList cards={cards} keyword={keyword} />
      )}
      {isLoading && <Preloader />}
      <About />
      <Footer />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onOpenRegister={handleOpenRegisterModal}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseRegisterModal}
        onSignInClick={handleOpenLoginModal}
      />
    </div>
  );
}
