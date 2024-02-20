// import "./Button.scss";
import styled from "styled-components";
import { colors } from "../../styles/variables";

const Button = styled.button.attrs({
  className: "submit-btn",
})`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  background: ${colors.themecolorGreen};

  transition: all 0.3s ease;
  color: #fff;
  &:hover {
    filter: brightness(70%);
  }
`;

const SubmitButton = ({ handleClick }) => {
  return <Button onClick={handleClick}>Add cat</Button>;
};

export default SubmitButton;
