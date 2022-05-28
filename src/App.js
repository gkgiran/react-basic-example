import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";

const NavBar = () => {
  return (
    <div>
      <Link style={{ marginRight: 30 }} to="/">
        Homepage{" "}
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:characterName" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
