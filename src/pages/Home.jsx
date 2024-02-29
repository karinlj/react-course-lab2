import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { StyledShelterSection } from "../styles/general";
import ItemsList from "../components/ItemsList";
import AddItemForm from "../components/AddItemForm";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  const catsUrl = "http://localhost:9000/cats";

  const getCats = async () => {
    try {
      const response = await fetch(catsUrl);
      // console.log("response:", response);
      const data = await response.json();
      // console.log("data:", data);
      setCats(data);
      setError(null);
    } catch (error) {
      console.log("error:", error);
      setError("Ooops!! Could not fetch data...");
    }
  };

  const addItemToUI = (newItem) => {
    setCats([...cats, newItem]);
  };

  const toggleFoundHometoUI = (id) => {
    console.log("toggleFoundHome:");

    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, foundHome: !cat.foundHome };
      } else return cat;
    });
    setCats(updatedCats);
  };

  const handleMovedFromUI = (id) => {
    console.log("handleMovedFromUI:");
    const updatedCats = cats.filter((cat) => {
      return cat.id !== id;
    });
    setCats(updatedCats);
  };

  useEffect(() => {
    getCats();
    console.log("Home- cats", cats);
  }, []);

  return (
    <main>
      <StyledShelterSection>
        <h1>The Cat Shelter.</h1>
        <p className="preamble">
          Current inhabitants at the Cat Shelter. <br />
          Some cats wants to go out, and some can stay indoors. <br />
          If the lightgrey house icon is enabled, the cat has found a new home.
          Press the dark pink house if the cat has moved to its new home to
          delete from list.
        </p>
        {error && <p className="error-message">{error}</p>}
        <ItemsList
          items={cats}
          toggleFoundHometoUI={toggleFoundHometoUI}
          handleMovedFromUI={handleMovedFromUI}
        />

        {isLoggedIn && <AddItemForm addItemToUI={addItemToUI} />}
      </StyledShelterSection>
    </main>
  );
};

export default Home;
