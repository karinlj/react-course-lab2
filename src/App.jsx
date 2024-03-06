import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.js";
import { blueTheme, pinkTheme } from "./styles/variables";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  //Built my own routing since only 2 pages and wanted to understand routing better.
  let pagecomponent;
  switch (window.location.pathname) {
    case "/":
      pagecomponent = <Home />;
      break;
    case "/login":
      pagecomponent = <Login />;
      break;
  }

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
