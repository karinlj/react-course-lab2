import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.js";
import { blueTheme, pinkTheme } from "./styles/variables";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // console.log("window.location", window.location);

  const [isDarkMode, setIsDarkMode] = useState(true);
  // const { isLoggedIn } = useContext(AuthContext);

  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const handleFoundHome = (id) => {
  //   let project = projects.value.find((item) => {
  //     return item.id === id;
  //   });
  // };
  // const toggleFoundHome = (id) => {
  //   console.log("toggleFoundHome:", id);
  //   const updatedCats = cats.map((cat) => {
  //     if (cat.id === id) {
  //       return { ...cat, foundHome: !cat.foundHome };
  //     } else return cat;
  //   });
  //   setCats(updatedCats);
  // };

  let pagecomponent;
  switch (window.location.pathname) {
    case "/":
      pagecomponent = <Home />;
      break;
    case "/login":
      pagecomponent = <Login />;
      break;
  }

  useEffect(() => {
    // console.log("App-isLoggedIn: ", isLoggedIn);
  }, []);

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={isDarkMode ? blueTheme : pinkTheme}>
          <GlobalStyle />
          <Header themeToggler={themeToggler} isDarkMode={isDarkMode} />
          {pagecomponent}
          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

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

// const addItem = (addedItem) => {
//   setCats([...cats, addedItem]);
// };
