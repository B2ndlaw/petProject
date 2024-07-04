import styled from "styled-components";

import { Arena } from "./pages/Arena";
import { Messages } from "./pages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Tavern } from "./pages/Tavern";
import { Forge } from "./pages/Forge";
import { Palace } from "./pages/Palace";
import { Logo } from "../components/elements/logo/Logo";
import { Gomoku } from "../components/gomoku/Gomoku";
import { Icon } from "../components/elements/icon/Icon";

export const MainPage = () => {
  return (
    <>
    

      <BrowserRouter>
        <MainPageWrapper>
          <Logo/>
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



const MainPageWrapper = styled.section`
position: relative;
height:100vh;
max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 12px solid #b0a1a1;
  z-index: 1;
  
`;

const Hero = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;

background-color: white;
z-index:2;
`
