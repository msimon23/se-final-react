import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader/Preloader";
import NewsCardList from "../components/NewsCardList/NewsCardList";

export default function ThirdPartyApi() {
  // endpoint - https://newsapi.org
  /*
    {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}

  */
  const [keyword, setKeyword] = useState(null);
  //   const [number, setNumber] = useState(1);

  /* Run an action when the component mounts */
  useEffect(() => {
    async function fetchData() {
      setKeyword(null);
      try {
        const rawData = await fetch(`https://swapi.dev/api/people/${number}`);
        const jsonData = await rawData.json();

        setKeyword(jsonData);
      } catch (error) {
        // deal with the error
        alert(error.message);
      }
    }
    fetchData();
  }, [number]);

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  if (keyword === null) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  // i believe the code below should happen in the SearchForm component??
  return (
    <>
      <input type="text" min="1" onChange={handleChange} value={text} />
      <NewsCardList />
    </>
  );
}
