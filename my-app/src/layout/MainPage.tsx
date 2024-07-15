import styled from "styled-components";

import { Arena } from "./pages/Arena";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Tavern } from "./pages/Tavern";
import { Forge } from "./pages/Forge";
import { Palace } from "./pages/Palace";

import { Gomoku } from "../components/gomoku/Gomoku";

import { StartPage } from "./pages/StartPage";
import { FirstFight } from "./pages/FirstFight";
import { HomePage } from "./pages/HomePage";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const MainPage = () => {
  return (
    <>
    

      <BrowserRouter>
        <MainPageWrapper>
<Header/>
          <Routes>
            {" "}
            <Route path="" element={<StartPage/>}/>
            <Route path="/homePage" element={<HomePage/>}/>
            <Route path="/firstfight" element={<FirstFight/>}/>
            <Route path="/palace" element={<Palace />} />
            <Route path="/hero" element={<UserPage />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/forge" element={<Forge />} />
            <Route path="/tavern" element={<Tavern />} />
            <Route path="/gomoku" element={<Gomoku />} />
          </Routes>
          <Footer/>

      
      
        
        </MainPageWrapper>
      
      </BrowserRouter>
    </>
  );
};



const MainPageWrapper = styled.section`
position: relative;
height:100vh;
max-width: 360px;
margin: 0 auto;
display: flex;

z-index: 1;

  
`;


