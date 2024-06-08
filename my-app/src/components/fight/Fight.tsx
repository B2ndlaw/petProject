import styled from "styled-components";
import { Button } from "../Button";
import { useState } from "react";

//Fight







export function Counter() {
  let [data, setData] = useState(40);

  const setDataFunction = () => {
    if (data > 0) {
      setData(data - 5);
    } else {
      alert("the end");
    }
  };
  return (
    <>
      <div>{data}</div>
      <button onClick={setDataFunction}>+</button>
    </>
  );
}



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

//PlayerAttack
const playerAttackChoice = () => {};

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



export const FightWindow = () => {
let [xpPlayer, setXpPlayer] = useState(40);
let [xpCpu,setXpCpu] = useState(40);
  const ButtonBlock = () => {};


  const Fight = () => {
    let [attackPlayer, setAttackPlayer] = useState("");
  
    
  }
  

  return (
    <StylesFW>
      <p>бой</p>
      <div>
        <p>Атака</p>
        <ul>
          {attacks.map((a, i) => (
            <li key={i}><input type="radio" name="radioAttack"/>{a}</li>
          ))}
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
          {blocks.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <Button name={"Выбрать защиту"} callBack={() => ButtonBlock()} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Здоровье игрока</th>
            <th>Здоровье соперника</th>
          </tr>
          
        </thead>
        <tbody>
       
          <td>40</td>
          <td>40</td>
        </tbody>
      </table>
      <div>
        <button onClick={() => {}}>удар игрока</button>
        <button>удар противника</button>
      </div>
      <Counter />
    </StylesFW>
  );
};

const StylesFW = styled.div`
  border: 1px dashed red;
`;
