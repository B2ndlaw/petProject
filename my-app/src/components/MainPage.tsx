import styled from "styled-components";
import { Menu } from "./Menu";
import { Arena } from "./layers/Arena";
import { Messages } from "./layers/Messages";
import { Adventure} from "./layers/Adventure";
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
              <Route path="/adventure" element={<Adventure />} />
              <Route path="/fight" element={<Arena />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/startPage" element={<StartPage />} />
            </Routes>
          </div>
      
          <Menu href={""} />
        

         
          
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


