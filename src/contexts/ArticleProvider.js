import { createContext, useState } from "react";

const articleContext = createContext([]);

const ArticleProvider = (props) => {
  const [savedArticles, setSavedArticles] = useState([]);
  const { children } = props;

  return (
    <articleContext.Provider value={{ savedArticles, setSavedArticles }}>
      {children}
    </articleContext.Provider>
  );
};

export { articleContext, ArticleProvider };
