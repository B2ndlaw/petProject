import React from "react";
import { MainPage } from "./layout/MainPage";

import "./App.css";
import { StartPage } from "./layout/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const App = () => {
  let date = new Date();
  let hours = date.getHours();

  return (
    <section className="blackTheme"
    // className={hours < 8 || hours > 21 ? "blackTheme" : "whiteTheme"}
    >
  

      {/* <StartPage /> */}
      <MainPage />
    </section>
  );
};
