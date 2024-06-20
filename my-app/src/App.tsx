import React from "react";
// import { StartPage } from "./components/StartPage";
import { MainPage } from "./components/MainPage";
import { Header } from "./components/layers/Header";


export const App = () => {
  return (
    <>
      <Header />
      {/* <StartPage text="Добро пожаловать, дорогой друг!" /> */}
      <MainPage />
     
    </>
  );
};
