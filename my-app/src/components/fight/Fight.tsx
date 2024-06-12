import styled from "styled-components";
import { Button } from "../Button";
import { ChangeEvent, useState } from "react";
import { v1 } from "uuid";

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
enum RulesAttackKeys {
  HEAD = "head",
  CHEST = "chest",
  GROIN = "groin",
  LEGS = "legs",
}

const rulesAttack = {
  [RulesAttackKeys.HEAD]: ["chest_groin", "groin_legs"],
  [RulesAttackKeys.CHEST]: ["head_legs", "groin_legs"],
  [RulesAttackKeys.GROIN]: ["head_legs", "head_chest"],
  [RulesAttackKeys.LEGS]: ["head_chest", "chest_groin"],
};

enum RulesBlockKeys {
  HEAD_LEGS = "head_legs",
  HEAD_CHEST = "head_chest",
  CHEST_GROIN = "chest_groin",
  GROIN_LEGS = "groin_legs",
}

const rulesBlock = {
  [RulesBlockKeys.HEAD_LEGS]: ["chest", "groin"],
  [RulesBlockKeys.HEAD_CHEST]: ["groin", "legs"],
  [RulesBlockKeys.CHEST_GROIN]: ["head", "legs"],
  [RulesBlockKeys.GROIN_LEGS]: ["head", "chest"],
};

export const FightWindow = () => {
  let [playerXp, setPlayerXp] = useState(40);
  let [computerXp, setComputerXp] = useState(40);
  // let [buttonAttackState, setButtonAttackState] = useState(false);
  // let [buttonBlockState, setButtonBlockState] = useState(false);
  let [buttonFightState, setButtonFightState] = useState(false);
  let [checkedAttackState, setCheckedAttackState] = useState(false);
  let [checkedBlockState, setCheckedBlockState] = useState(false);
  let [playerAttack, setPlayerAttack] = useState<RulesAttackKeys>(
    RulesAttackKeys.CHEST
  );
  let [playerBlock, setPlayerBlock] = useState<RulesBlockKeys>(
    RulesBlockKeys.CHEST_GROIN
  );

  const fightFunction = () => {
    attackFunction();
    blockFunction();
  };

  const attackFunction = () => {
    let computerBlock = blocks[Math.floor(Math.random() * blocks.length)].part;
    setButtonFightState(false);
    setCheckedAttackState(false);

    if (rulesAttack[playerAttack]?.includes(computerBlock)) {
      console.log("Hit");
      console.log(playerAttack);
      console.log(computerBlock);
      console.log(computerXp);
      return setComputerXp((computerXp -= 5));
    } else {
      console.log("Miss");
      console.log(playerAttack);
      console.log(computerBlock);
      console.log(computerXp);
      return computerXp;
    }
  };

  const blockFunction = () => {
    let computerAttack =
      attacks[Math.floor(Math.random() * attacks.length)].part;
    setButtonFightState(false);
    setCheckedBlockState(false);

    if (rulesBlock[playerBlock]?.includes(computerAttack)) {
      console.log("Hit");
      console.log(computerAttack);
      console.log(playerBlock);
      console.log(playerXp);
      return setPlayerXp((playerXp -= 5));
    } else {
      console.log("Miss");
      console.log(computerAttack);
      console.log(playerBlock);
      console.log(playerXp);
      return playerXp;
    }
  };

  let [numberButtonUnlock, setNumberButtonUnlock] = useState(0);


  return (
    <StylesFW>
      <p>бой</p>
      <div>
        <fieldset>
          <legend>Атака</legend>
          <ul>
            {attacks.map((a) => {
              const onChangeAttackHandler = (
                e: ChangeEvent<HTMLInputElement>
              ) => {
                setPlayerAttack(e.currentTarget.value as RulesAttackKeys);
                setCheckedAttackState(e.currentTarget.checked);
                setNumberButtonUnlock(numberButtonUnlock+=1);
                setButtonFightState(numberButtonUnlock===2);
              };
              return (
                <li key={a.id}>
                  <input
                    onChange={onChangeAttackHandler}
                    type="radio"
                    name="radioAttack"
                    value={a.part}
                    id={a.id}
                    checked={checkedAttackState}
                  />
                  <label htmlFor={a.id}>{a.part}</label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        {/* <Button
          name={"Выбрать атаку"}
          callBack={attackFunction}
          disabled={!buttonAttackState}
          
        /> */}
      </div>

      <div>
        <fieldset>
          <legend>Защита</legend>
          <ul>
            {blocks.map((b) => {
              const onChangeBlockHandler = (
                e: ChangeEvent<HTMLInputElement>
              ) => {
                setPlayerBlock(e.currentTarget.value as RulesBlockKeys);
                setNumberButtonUnlock(numberButtonUnlock+=1);
                setButtonFightState(numberButtonUnlock===2);
                setCheckedBlockState(e.currentTarget.checked);
                
              };
              return (
                <li key={b.id}>
                  <input
                    onChange={onChangeBlockHandler}
                    type="radio"
                    name="radioBlock"
                    value={b.part}
                    id={b.id}
                    checked={checkedBlockState}
                  />
                  <label htmlFor={b.id}>{b.part}</label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        {/* <Button
          name={"Выбрать защиту"}
          callBack={blockFunction}
          disabled={!buttonBlockState}
          
        /> */}
      </div>
      <Button
        name="В БОЙ"
        callBack={fightFunction}
        disabled={!buttonFightState}
      />
      <table>
        <thead>
          <tr>
            <th>Здоровье игрока</th>
            <th>Здоровье соперника</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{playerXp}</td>
            <td>{computerXp}</td>
          </tr>
        </tbody>
      </table>
    </StylesFW>
  );
};

const StylesFW = styled.div`
  border: 1px dashed red;
`;
