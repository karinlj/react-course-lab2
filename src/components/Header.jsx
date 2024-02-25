import styled from "styled-components";
import { colors } from "../styles/variables";

const StyledHeader = styled.header.attrs({
  className: "header",
})`
  text-align: right;
  clear: both;
  border-top: 1px solid ${({ theme }) => theme.text_color};
  p {
    color: ${({ theme }) => theme.heading_color};
    margin-top: 1rem;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <p>
        React course - Lab 2
        <br />
        Karin Ljunggren
      </p>
    </StyledHeader>
  );
};

export default Header;
