import styled from "styled-components";
// import { Content } from "./layers/Content";
import { Menu } from "./layers/Menu";
import { TextArea } from "./layers/Text";
import { FightWindow } from "./fight/Fight";
import { Messages } from "./Messages";
import { Content } from "./layers/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export const MainPage = () => {
  return (
    <>
      <BrowserRouter>
        <MainPageWrapper>
          <Menu title={""} href={""} />
          <div>
            {" "}
            <Routes>
             
                {" "}
                <Route path="/main" element={<Content />} />
                <Route path="/fight" element={<FightWindow />} />
                <Route path="/messages" element={<Messages />} />
           
            </Routes>
          </div>

          <TextArea />
        </MainPageWrapper>
      </BrowserRouter>
    </>
  );
};

const MainPageWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "n c"
    "n t";
  grid-template-rows: 1fr 50px;
  grid-template-columns: 1fr 11fr;
  grid-gap: 10px;
  border: 2px solid black;
  padding: 10px;
`;
