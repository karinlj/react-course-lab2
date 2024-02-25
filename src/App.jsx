import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/general";
import {
  colors,
  themeSettings,
  blueTheme,
  pinkTheme,
} from "./styles/variables";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import AddItemForm from "./components/AddItemForm";

const StyledShelterSection = styled.ul.attrs({
  className: "styled-shelter-section ",
})`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .preamble {
    font-size: 1.2rem;
  }
`;

export const StyledToggleThemeBtn = styled.button.attrs({
  className: "toggle_btn",
})`
  background: ${({ theme }) => theme.btn_color};
  color: ${({ theme }) => theme.text_color};
  padding: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  line-height: 1;
  transition: all 0.3s ease-in;
  float: right;

  &:hover {
    filter: drop-shadow(0 0 3px white);
  }
  &:active {
    filter: none;
  }
  i {
    font-size: 1.1rem;
    position: relative;
  }
`;

function App() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [isBlueMode, setIsBlueMode] = useState(true);

  const themeToggler = () => {
    setIsBlueMode(!isBlueMode);
  };

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

  // const getCats2 = () => {
  //   fetch(catsUrl) //api for the get request
  //     .then((response) => response.json())
  //     .then((data) => setCats(data))
  //     .catch((error) => console.log("error", error));

  //   // .then((response) => {
  //   //   return response.json();
  //   // })
  //   // .then((data) => {
  //   //   setCats(data);

  //   //   return console.log("data", data);
  //   // })
  //   // .catch((error) => {
  //   //   return console.log("error", error);
  //   // });
  // };
  useEffect(() => {
    getCats();
  }, []);

  // const addItem = (addedItem) => {
  //   setCats([...cats, addedItem]);
  // };

  const toggleFoundHome = (id) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, foundHome: !cat.foundHome };
      } else return cat;
    });
    setCats(updatedCats);
  };

  return (
    <>
      <ThemeProvider theme={isBlueMode ? blueTheme : pinkTheme}>
        <GlobalStyle />
        <StyledToggleThemeBtn onClick={themeToggler} aria-label="Toggle theme">
          {isBlueMode ? (
            <i className="fas fa-sun" aria-hidden="true"></i>
          ) : (
            <i className="fas fa-moon" aria-hidden="true"></i>
          )}
        </StyledToggleThemeBtn>
        <Header />
        <StyledShelterSection>
          <h1>Cat shelter2.</h1>
          <p className="preamble">
            Current inhabitants at the Cat Shelter. <br />
            If the house icon is enabled, the cat has found a new home.
          </p>
          {error && <p className="error-message">{error}</p>}
          <ItemsList items={cats} toggleFoundHome={toggleFoundHome} />

          <AddItemForm />
        </StyledShelterSection>
      </ThemeProvider>
    </>
  );
}

export default App;
