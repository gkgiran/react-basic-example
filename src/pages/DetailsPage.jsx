import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// APIURL: ------------------
// Obj: Show the details (full ) (or not full u just add in your div)
// define a useState to keep the data
// a useEffect to trigger the request
// render.

const DetailsPage = () => {
  const params = useParams();
  const [characters, setCharacters] = useState(null); // { ... }

  useEffect(() => {
    const fetchByName = async () => {
      // console.log("params: ", params.characterName);
      const charactersName = params.characterName;
      try {
        const response = await axios.get(
          `https://hp-assessment-api.herokuapp.com/hp/character/${charactersName}`
        );
        // console.log("am I getting a response", response);
        setCharacters(response.data);
        // console.log(characters);
      } catch (e) {
        // console.log(e.message);
      }
    };
    fetchByName();
  }, []);

  return (
    <div>
      <h1>Students  Details</h1>
      {characters ? (
        <div>
          <h3>{characters.name}</h3>
          <img src={characters.imgUrl} alt="img" width="500px"></img>
          <h1>Birth Year: {characters.born}</h1>
          <h1>House: {characters.house.name}</h1>
        </div>
      ) : (
        <h3>Class 59</h3>
      )}
    </div>
  );
};

export default DetailsPage;
