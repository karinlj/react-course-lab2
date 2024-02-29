import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import {
  StyledFormDiv,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledShelterSection,
} from "../styles/general";
import { colors } from "../styles/variables";

function Login() {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("handleLogin:", login);
    const userUrl = `http://localhost:9000/users?email=${email}`;
    try {
      const response = await fetch(userUrl);
      // console.log("response:", response);

      const data = await response.json();
      // console.log("data:", data);

      const userData = data[0];
      // console.log("userData:", userData);

      if (userData && userData.password === password) {
        login(userData);
      } else {
        console.log("Invalid username or password:");
      }
    } catch (error) {
      console.log("error loggin in:", error);
    }
    //redirect to home
    window.location.pathname = "/";
  };

  const handleCancelLogin = () => {
    // console.log("handleCancelLogin");
    setEmail("");
    setPassword("");
    //redirect to home
    // window.location.pathname = "/";
  };

  useEffect(() => {
    console.log("isLoggedIn-Login:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <main>
      <StyledShelterSection>
        <h1 style={{ fontSize: "2rem" }}>Log In</h1>
        <form style={{ width: "100%" }} onSubmit={handleLogin}>
          <StyledFormDiv>
            <StyledLabel>
              Email:
              <StyledInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledLabel>
            <StyledLabel>
              Password:
              <StyledInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </StyledLabel>
            <section style={{ width: "100%", textAlign: "right" }}>
              <StyledButton>Login</StyledButton>
              <StyledButton onClick={handleCancelLogin} background="gray">
                Cancel
              </StyledButton>
            </section>
          </StyledFormDiv>
        </form>
      </StyledShelterSection>
    </main>
  );
}

export default Login;
