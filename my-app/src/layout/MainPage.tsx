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
import { StartPage } from "./pages/StartPage";
import { FirstFight } from "./pages/FirstFight";

export const MainPage = () => {
  return (
    <>
    

      <BrowserRouter>
        <MainPageWrapper>
          <Logo/>
          <Hero href="/hero"><Icon iconId={"hero"} viewBox="0 0 512 512" width="160px" height="160px" fill={2==2?"":"red"}/></Hero>
          <Messages />{" "}
          <Routes>
            {" "}
            <Route path="" element={<StartPage/>}/>
            <Route path="/firstfight" element={<FirstFight/>}/>
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
max-width: 1024px;
margin: 0 auto;
display: flex;

z-index: 1;

  
`;

const Hero = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;


z-index:2;
`
