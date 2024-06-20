import styled from "styled-components";
import { Menu } from "./Menu";
import { FightWindow } from "./layers/Fight";
import { Messages } from "./layers/Messages";
import { Content } from "./layers/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./user/UserPage";
import { StartPage } from "./StartPage";

export const MainPage = () => {
  return (
    <>
      <BrowserRouter>
        <MainPageWrapper>
          <div>
            
            {" "}
            <Routes>
              {" "}
              <Route path="/hero" element={<UserPage />} />
              <Route path="/main" element={<Content />} />
              <Route path="/fight" element={<FightWindow />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/startPage" element={<StartPage />} />
            </Routes>
          </div>
          <Menu title={""} href={""} />
          
        </MainPageWrapper>
      </BrowserRouter>
    </>
  );
};

const MainPageWrapper = styled.div`


  width: 100%;
  height: 100%;
  display: flex;
  border: 2px solid black;
`;
