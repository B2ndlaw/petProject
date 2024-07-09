import React from "react";
import { MainPage } from "./layout/MainPage";

import "./App.css";
import styled from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global.styled";

export const App = () => {
  let date = new Date();
  let hours = date.getHours();

  return (
    <>
      {" "}
      <GlobalStyle />
      <AppWrapper>
        <MainPage />
      </AppWrapper>
    </>
  );
};

const AppWrapper = styled.section`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.primaryFont};
  justify-content: center;
  text-align: center;
`;
