import React from "react";
import SavedNewsNav from "../SavedNewsNav/SavedNewsNav";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import Footer from "../Footer/Footer";

export default function SavedArticles() {
  return (
    <>
      <SavedNewsNav />
      <SavedNewsHeader />
      <SavedNewsCardList />
      <Footer />
    </>
  );
}

// need a <ProtectedRoute path="/profile" loggedIn={loggedIn}></ProtectedRoute> around this component?
