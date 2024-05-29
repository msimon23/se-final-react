import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import reportWebVitals from "./reportWebVitals";
import SavedArticles from "./components/SavedArticles/SavedArticles";
import { ArticleProvider } from "./contexts/ArticleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<SavedArticles />} path="/saved-articles" />
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
