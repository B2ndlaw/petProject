//Imports & library

import styled from "styled-components";
import { Fight } from "../../components/fight/Fight";

import { v1 } from "uuid";


export function FirstFight() {
  return (
    <StylesArena>
      <h2>Идзакая</h2>
      <p>Дверь в таверну отркылась и шатаясь из нее вышел огромный воин без шлема. Он двигается на тебя и явно агрессивен.</p>
      <Fight />
   
    </StylesArena>
  );
}

//Styles
const StylesArena = styled.section`
/* background-color: #734343; */
width: 100%;
height: 100%;
position: relative;
`;