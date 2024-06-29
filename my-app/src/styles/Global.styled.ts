import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.primaryFont};
  line-height: 1.2;
  min-width:360px;

}

a {
    text-decoration: none;
    color: ${theme.colors.primaryFont};

}

ul {
    list-style: none;

}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.primaryFont};

}

section {
    padding: 50px 0;

    @media ${theme.media.tablet} {
        padding: 25px 0;   
    }
}

section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
}

p{
font-weight: 400;
font-size: 14px;
line-height: 1.4;
letter-spacing: 1px;
}

h3 {
 font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}


 h1{
    color: ${theme.colors.secondaryFont};
  font-weight: 400;
  font-size: 36px;
 }  

`