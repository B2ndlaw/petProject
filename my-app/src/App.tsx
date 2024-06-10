import React from "react";
import { StartPage } from "./components/StartPage";
import { MainPage } from "./components/MainPage";


export const App = () => {
  return (
    <>
      <StartPage text="Добро пожаловать, дорогой друг!" />
      <MainPage />
    
    </>
  );
};
