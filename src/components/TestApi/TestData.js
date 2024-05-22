import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function TestData() {
  // endpoint - https://swapi.dev/people/1
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
  const [person, setPerson] = useState(null);
  const [number, setNumber] = useState(1);

  /* Run an action when the component mounts */
  useEffect(() => {
    async function fetchData() {
      setPerson(null);
      try {
        const rawData = await fetch(`https://swapi.dev/api/people/${number}`);
        const jsonData = await rawData.json();

        setPerson(jsonData);
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

  if (person === null) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  return (
    <>
      <input type="number" min="1" onChange={handleChange} value={number} />
      <p>{number}</p>
      <ul>
        <li>Name: {person.name}</li>
        <li>Hair Color: {person.hair_color}</li>
        <li>Skin Color: {person.skin_color}</li>
      </ul>
    </>
  );
}
