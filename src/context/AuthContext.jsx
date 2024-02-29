import { createContext, useState, useEffect } from "react";

const initValues = {
  isLoggedIn: false,
  user: null,
};

//check in sessionStorage if userIsLoggedIn is set
const getInitialLoggedIn = () => {
  const userIsLoggedIn = sessionStorage.getItem("userIsLoggedIn");
  return userIsLoggedIn ? JSON.parse(userIsLoggedIn) : initValues.isLoggedIn;
};

// Skapa contexten
const AuthContext = createContext();

// Skapa en Provider för contexten
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getInitialLoggedIn);
  const [user, setUser] = useState(initValues.user);

  const login = (username, password) => {
    // Simulera inloggning
    setIsLoggedIn(true);
    setUser({ username, password });
  };

  const logout = () => {
    // Simulera utloggning
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    sessionStorage.setItem("userIsLoggedIn", JSON.stringify(isLoggedIn));

    // console.log("AuthProvider-isLoggedIn: ", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
