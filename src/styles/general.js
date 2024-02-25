import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyle = createGlobalStyle`

//reset
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
:root {
  font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: ${({ theme }) => theme.background_color};
  font-size: 1.1rem;
}
#root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  width: 100%;
  font-size: 3.2em;
  line-height: 1.1;
  color: ${({ theme }) => theme.heading_color};
  margin: 1rem 0;
}
p {
    color: ${({ theme }) => theme.text_color};

}

button {
  border: 1px solid transparent;
  border-radius: 8px;
  &:focus {
    outline: 2px dotted -webkit-focus-ring-color;
    outline-color: ${colors.themecolorBlue};
  }
}

.error-message{
    color: ${colors.themecolorRed};
  font-weight: 600;
}


 `;
export default GlobalStyle;
