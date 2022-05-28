import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const params = useParams();
  const [characters, setCharacters] = useState(null); // { ... }

  useEffect(() => {
    const fetchByName = async () => {
      const charactersName = params.characterName;
      try {
        const response = await axios.get(
          `https://hp-assessment-api.herokuapp.com/hp/character/${charactersName}`
        );
        setCharacters(response.data);
      } catch (e) {
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
