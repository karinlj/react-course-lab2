import styled from "styled-components";
import { colors, themeSettings } from "../styles/variables";

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.3rem 1.1rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  background: ${({ $primary }) =>
    $primary ? "gray" : `${colors.themecolorGreen}`};
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  color: #fff;
  &:hover {
    border: 2px solid ${colors.themecolorGreen};
  }
`;

export const StyledLink = styled.a`
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.3rem 1.1rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  background: ${colors.themecolorPink};
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  color: #fff;
  text-decoration: none;
  &:hover {
    border: 2px solid ${colors.themecolorPinkLight};
  }
`;

export const StyledShelterSection = styled.section.attrs({
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
export const StyledFormDiv = styled.div.attrs({
  className: "styled-form-div",
})`
  background-color: #fff;
  border-radius: ${themeSettings.themeBorderRadius};
  box-shadow: ${themeSettings.themeBoxShadow};
  line-height: 1.5rem;
  padding: 0.9rem 1.4rem;
  margin: 0;
  border-bottom: 1px solid ${colors.themeBorderColor};
  margin: 1rem 0;
`;

export const StyledLabel = styled.label.attrs({
  className: "styled-label",
})`
  display: block;
  width: 100%;
  color: ${colors.themecolor};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

export const StyledInput = styled.input.attrs({
  className: "styled-input",
})`
  width: 100%;
  padding-right: 0.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
  border-bottom: 1px solid ${colors.themeBorderColor};
  font-size: 1rem;
`;
