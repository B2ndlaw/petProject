//Rules Attack
//   head: {
//     head_legs: "miss",
//     head_chest: "miss",
//     chest_groin: "hit",
//     groin_legs: "hit",
//   },
//   chest: {
//     head_legs: "hit",
//     head_chest: "miss",
//     chest_groin: "miss",
//     groin_legs: "hit",
//   },
//   groin: {
//     head_legs: "hit",
//     head_chest: "hit",
//     chest_groin: "miss",
//     groin_legs: "miss",
//   },
//   legs: {
//     head_legs: "miss",
//     head_chest: "hit",
//     chest_groin: "hit",
//     groin_legs: "miss",
//   },

import styled from "styled-components";
import { Button } from "../Button";
import { useState } from "react";

//Data warriors




//Lists attack & block
const attacks = ["head", "chest", "groin", "legs"];
const blocks = ["head_legs", "head_chest", "chest_groin", "groin_legs"];



//CPU Attack
const computerAttackRandomChoice = () => {
  let computerAttackChoice =
    attacks[Math.floor(Math.random() * attacks.length)];
  return computerAttackChoice;
};

const rules = {
  head: ["chest_groin", "groin_legs"],
  chest: ["head_legs", "groin_legs"],
  groin: ["head_legs", "head_chest"],
  legs: ["head_chest", "chest_groin"],
};

// const computerAttack = (cpuAttack: string, playerBlock: string) => {
//   if (rules[cpuAttack].includes(playerBlock)) {
//     return "Hit";
//   } else {
//     return "Miss";
//   }
// };

//PlayerAttack
const playerAttackChoice = () => {

}

const computerBlockRandomChoice = () => {
  return blocks[Math.floor(Math.random() * blocks.length)];
};

// const PlayerAttack = (playerAttack: string, cpuBlock: string) => {
//   if (rules[playerAttackChoice].includes(cpuBlock)) {
//     return "Hit";
//   } else {
//     return "Miss";
//   }
// };

export const Fight = () => {};

export const FightWindow = () => {
const ButtonBlock =()=>{

}

  return (
    <StylesFW>
      <p>бой</p>
      <div>
        <p>Атака</p>
        <ul>
          {attacks.map((a,i)=><li key={i}>{a}</li>
          )}
        </ul>
        <button
          onClick={(e) => {
            alert("атака");
          }}
        >
          Выбрать атаку
        </button>
      </div>
      <div>
        <p>Защита</p>
        <ul>
        {blocks.map((b,i)=><li key={i}>{b}</li>
          )}
        </ul>
        <Button name={"Выбрать защиту"} callBack={()=>ButtonBlock()}/>
      </div>
      <div>Здоровье</div>
      <div>Здоровье противника</div>
    </StylesFW>
  );
};

const StylesFW = styled.div`
  grid-area: c;
  border: 1px solid red;
`;
