import styled from "styled-components";

import { Arena } from "./pages/Arena";
import { Messages } from "../components/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Tavern } from "./pages/Tavern";
import { Forge } from "./pages/Forge";
import { Palace } from "./pages/Palace";
import { Logo } from "../components/logo/Logo";
import { Gomoku } from "../components/gomoku/Gomoku";

export const MainPage = () => {
  return (
    <>
    <Logo/>

      <BrowserRouter>
        <MainPageWrapper>
          <Hero href="/hero"><img src="https://pngset.com/images/clip-art-skeleton-samurai-samurai-head-poster-advertisement-armor-batman-transparent-png-1368627.png" width={"100px"}/></Hero>
          <Messages />{" "}
          <Routes>
            {" "}
            <Route path="/palace" element={<Palace />} />
            <Route path="/hero" element={<UserPage />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/forge" element={<Forge />} />
            <Route path="/tavern" element={<Tavern />} />
            <Route path="/gomoku" element={<Gomoku />} />
          </Routes>
      
        
        </MainPageWrapper>
      
      </BrowserRouter>
    </>
  );
};

const Hero = styled.a`
  position: absolute;
  right: 0;
  top: 0;
background-color: white;
`

const MainPageWrapper = styled.div`
height:100vh;
max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 12px solid #a3957a;
  
`;
