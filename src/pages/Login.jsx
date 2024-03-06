import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  StyledFormDiv,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledShelterSection,
} from "../styles/general";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userUrl = `http://localhost:9000/users?email=${email}`;
    try {
      const response = await fetch(userUrl);
      const data = await response.json();
      const userData = data[0];
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
    setEmail("");
    setPassword("");
    //redirect to home
    window.location.pathname = "/";
  };

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
              <StyledButton onClick={handleCancelLogin} $primary>
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
