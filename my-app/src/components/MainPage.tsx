import styled from "styled-components";
// import { Content } from "./layers/Content";
import { Menu } from "./layers/Menu";
import { TextArea } from "./layers/Text";
import { FightWindow } from "./fight/Fight";
import { Messages } from "./Messages";

export const MainPage = () => {
  return (
    <><MainPageWrapper>
      <Menu />
      {/* <Content /> */}
      <FightWindow />
      <TextArea />

    </MainPageWrapper><Messages /></>
    
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
`;

