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
font-family: "Trebuchet MS", Helvetica, sans-serif;
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
p{

font-weight: 400;
font-size: 16px;
line-height: 1.4;
letter-spacing: 1.5;
}

h3 {
  /* font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px; */
}

 h1{
color: ${theme.colors.primaryFont};
font-weight: 400;
font-size: 36px;
 }  

`