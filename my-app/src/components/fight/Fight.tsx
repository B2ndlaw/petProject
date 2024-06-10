import styled from "styled-components";
import { Button } from "../Button";
import { ChangeEvent, useState } from "react";
import { v1 } from "uuid";

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
      <Button name={"+"} callBack={setDataFunction}/>
    </>
  );
}

//Lists attack & block
const attacks = [
  { part: "head", id: v1() },
  { part: "chest", id: v1() },
  { part: "groin", id: v1() },
  { part: "legs", id: v1() },
];
const blocks = [
  { part: "head_legs", id: v1() },
  { part: "head_chest", id: v1() },
  { part: "chest_groin", id: v1() },
  { part: "groin_legs", id: v1() },
];
enum RulesKeys {
  HEAD = "head",
  CHEST = "chest",
  GROIN = "groin",
  LEGS = "legs",
}

const rules = {
  [RulesKeys.HEAD]: ["chest_groin", "groin_legs"],
  [RulesKeys.CHEST]: ["head_legs", "groin_legs"],
  [RulesKeys.GROIN]: ["head_legs", "head_chest"],
  [RulesKeys.LEGS]: ["head_chest", "chest_groin"],
};

//CPU move
const computerAttackFunction = () => {
  
};

export const FightWindow = () => {
  // let [playerXp, setPlayerXp] = useState(40);
  let [computerXp, setComputerXp] = useState(40);
  const ButtonBlock = () => {};

  const Fight = () => {};

  let [playerAttack, setPlayerAttack] = useState<RulesKeys>(RulesKeys.CHEST);
  // let [playerBlock, setPlayerBlock] = useState<RulesKeys>(RulesKeys.CHEST);

  const attackFunction =()=> {
    let computerBlock = blocks[Math.floor(Math.random() * blocks.length)].part;
    // let computerAttack = attacks[Math.floor(Math.random() * attacks.length)].part;
    if (rules[playerAttack]?.includes(computerBlock)) {
      console.log("Hit");
      console.log(playerAttack);
      console.log(computerBlock);
      console.log(computerXp);
      return setComputerXp(computerXp-=5);
     
    } else {
      console.log("Miss");
      console.log(playerAttack);
      console.log(computerBlock);
      console.log(computerXp);
      return computerXp;
    }

    //   if (rules[computerAttack]?.includes(playerBlock)) {
    //     console.log("Hit");
    //     console.log(computerAttack);
    //     console.log(playerBlock);
    //     console.log(playerXp);
    //     return setPlayerXp(playerXp-=5);
       
    //   } else {
    //     console.log("Miss");
    //     console.log(computerAttack);
    //     console.log(playerBlock);
    //     console.log(playerXp);
    //     return playerXp;
  
    // }
  };

  return (
    <StylesFW>
      <p>бой</p>
      <div>
        <p>Атака</p>
        <ul>
          {attacks.map((a) => {
            const onChangeAttackHandler = (
              e: ChangeEvent<HTMLInputElement>
            ) => {
              setPlayerAttack(e.currentTarget.value as RulesKeys);
            };
            return (
              <li key={a.id}>
                <input
                  onChange={onChangeAttackHandler}
                  type="radio"
                  name="radioAttack"
                  value={a.part}
                />
                {a.part}
              </li>
            );
          })}
        </ul>
        <Button name={"Атаковать"} callBack={attackFunction} />
      </div>
      {/* <div>
        <p>Защита</p>
        <ul>
          {blocks.map((b, i) => (
            <li key={i}>
              <input type="radio" name="radioBlock" />
              {b.part}
            </li>
          ))}
        </ul>
        <Button name={"Выбрать защиту"} callBack={() => ButtonBlock()} />
      </div> */}

      {/* <Counter /> */}
      <table>
        <thead>
          <tr>
            <th>Здоровье игрока</th>
            <th>Здоровье соперника</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>40</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </StylesFW>
   
  );
};

const StylesFW = styled.div`
  border: 1px dashed red;
`;
