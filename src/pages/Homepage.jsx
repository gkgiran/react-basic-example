import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Obj: render students from https://hp-assessment-api.herokuapp.com/hp/characters
// 1. import axios
// 2. define some useState to keep the data that we are going to fetch
// 3. define a useEffect to trigger this axios call
// 4. Save data (response) to state
// 5. render it.

// - The Homepage displays a list of characters
// - A separate component is used to display the characters
// - Characters should be sorted alphabetically by their first name
// - Each charcter is displayed with their name, birth, image, house (name or houseId) and "read more" button
// - Clicking on the "Read more" button takes you to a details page

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetCharacters = async () => {
      try {
        const response = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/characters"
        );
        setCharacters(response.data);
        // console.log("res: ",response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetCharacters();
  }, []); // empty => only runs when the page loads (once).

  // console.log("what is my state?", term);

  // obj: Filter the list by the term
  // Filter + sorting:
  const shorterList = characters.sort((a, b) => a.name.localeCompare(b.name)).filter((p) =>
    p.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div>
      <h1>Harry Potter</h1>
      <h2>Characters</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Link to="/about">Go to about page</Link>
      <br />
      {shorterList.map((p) => (
        <div className="character">
          
          <img src={p.imgUrl} alt="img" width="210" height="270"></img>
          <p>Name: {p.name}</p>
          <p>Birth Year: {p.born}</p>
          <p>House Id: {p.houseId}</p>
          <p>House Name: {p.house.name}</p>
          <button><Link to={`/details/${p.id}`}>Read More</Link></button>
          
        </div>
      ))}
    </div>
  );
};

export default Homepage;
