import React, { useContext } from "react";
import SavedNewsNav from "../SavedNewsNav/SavedNewsNav";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import { articleContext } from "../../contexts/ArticleProvider";
import Footer from "../Footer/Footer";
import "../SavedNewsCardList/SavedNewsCardList.css";

export default function SavedArticles() {
  const { savedArticles } = useContext(articleContext);
  const hasSavedArticles = savedArticles.some(
    (articleGroup) => articleGroup.articles.length > 0
  );

  return (
    <>
      <SavedNewsNav />
      <SavedNewsHeader articles={savedArticles} />
      <div
        className={hasSavedArticles ? "savedlist" : "savedlist__empty"}
      ></div>
      {hasSavedArticles && <SavedNewsCardList cards={savedArticles} />}
      <Footer />
    </>
  );
}

// need a <ProtectedRoute path="/profile" loggedIn={loggedIn}></ProtectedRoute> around this component??
