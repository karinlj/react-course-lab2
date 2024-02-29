import styled from "styled-components";

const StyledFooter = styled.footer.attrs({
  className: "footer",
})`
  p {
    color: ${({ theme }) => theme.text_color};
    margin-top: 5rem;
    font-size: 0.9rem;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>@ {new Date().getFullYear()}- Karin Ljunggren</p>
    </StyledFooter>
  );
};

export default Footer;
