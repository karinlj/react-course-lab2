import { useState, useEffect, useContext, useMemo } from "react";
import AuthContext from "../context/AuthContext";
import { StyledShelterSection } from "../styles/general";
import styled from "styled-components";
import { colors } from "../styles/variables";
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
      const data = await response.json();
      setCats(data);

      setError(null);
    } catch (error) {
      console.log("error:", error);
      setError("Ooops!! Could not fetch data...");
    }
  };

  //upadate UI
  const addItemToUI = (newItem) => {
    setCats([...cats, newItem]);
  };
  //upadate UI
  const toggleFoundHometoUI = (id) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, foundHome: !cat.foundHome };
      } else return cat;
    });
    setCats(updatedCats);
  };

  const sortCats = (cats) => {
    // console.log("Sorting cats...");
    return cats.sort((a, b) => a.name.localeCompare(b.name));
  };

  //This will sort the cats unnecessarily on changing Theme for example
  //const sortedCats = sortCats(cats);
  //useMemo to cache the sorting
  const sortedCats = useMemo(() => sortCats(cats), [cats]);

  //upadate UI
  const handleMovedFromUI = (id) => {
    const updatedCats = cats.filter((cat) => {
      return cat.id !== id;
    });
    setCats(updatedCats);
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <main>
      <StyledShelterSection>
        <h1>The Cat Shelter.</h1>
        <p className="preamble">
          Current inhabitants at the Cat Shelter. <br />
          Some cats wants to go out, and some can stay indoors. <br />
          Toggle the lightgrey house icon to enable if the cat has found a new
          home. Press the dark pink house if the cat has moved to its new home
          to delete from list.
        </p>
        {error && <p className="error-message">{error}</p>}
        {cats.length > 1 && (
          <StyledHeading>
            There are{" "}
            <span
              style={{ color: `${colors.themecolorPink}`, fontSize: "1.3rem" }}
            >
              {cats.length}{" "}
            </span>
            cats at the shelter today.
          </StyledHeading>
        )}
        <ItemsList
          items={sortedCats}
          toggleFoundHometoUI={toggleFoundHometoUI}
          handleMovedFromUI={handleMovedFromUI}
        />
        {isLoggedIn && <AddItemForm addItemToUI={addItemToUI} />}
      </StyledShelterSection>
    </main>
  );
};

export default Home;

const StyledHeading = styled.h5.attrs({
  className: "styled-cats-heading",
})`
  color: ${({ theme }) => theme.text_color};
  margin-bottom: 0;
`;
