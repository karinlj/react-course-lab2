import { useContext } from "react";

import styled from "styled-components";
import { colors } from "../../styles/variables";
import { StyledLink, StyledButton } from "../../styles/general";
import AuthContext from "../../context/AuthContext";

const Header = ({ themeToggler, isDarkMode }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  let path = window.location.pathname;

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <div className="upper">
        <p>
          React course - Lab 2
          <br />
          Karin Ljunggren
        </p>
        <StyledToggleThemeBtn onClick={themeToggler} aria-label="Toggle theme">
          {isDarkMode ? (
            <i className="fas fa-sun" aria-hidden="true"></i>
          ) : (
            <i className="fas fa-moon" aria-hidden="true"></i>
          )}
        </StyledToggleThemeBtn>
      </div>
      {/* changing buttons depending on isLoggedIn state */}
      <div className="lower">
        {!isLoggedIn && path !== "/login" && (
          <StyledLink href="/login">Login</StyledLink>
        )}

        {isLoggedIn && path !== "/login" && (
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        )}

        {path === "/login" && <StyledLink href="/">Back to Home</StyledLink>}
      </div>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header.attrs({
  className: "header",
})`
  .upper {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.text_color};
  }
  .lower {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.8rem;
  }
  p {
    color: ${({ theme }) => theme.text_color};
    margin-bottom: 0.8rem;
  }
`;
export const StyledToggleThemeBtn = styled.button.attrs({
  className: "toggle_btn",
})`
  background: ${({ theme }) => theme.btn_color};
  color: ${({ theme }) => theme.text_color};
  padding: 0.3rem;
  margin-bottom: 0.8rem;
  border-radius: 8px;
  line-height: 1;
  transition: all 0.3s ease-in;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${colors.themecolorBlueSuperLight};
  }
  &:active {
  }
  i {
    font-size: 1.1rem;
    position: relative;
  }
`;
