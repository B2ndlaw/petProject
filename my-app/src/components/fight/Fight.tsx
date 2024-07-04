import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { v1 } from "uuid";
import { Button } from "../elements/button/Button";
import { Enemy } from "../enemy/Enemy";

//Lists attack & block
const attacks = [
  { part: "голова", id: v1() },
  { part: "грудь", id: v1() },
  { part: "пах", id: v1() },
  { part: "ноги", id: v1() },
];
const blocks = [
  { part: "голова-ноги", id: v1() },
  { part: "голова-грудь", id: v1() },
  { part: "грудь-пах", id: v1() },
  { part: "пах-ноги", id: v1() },
];

//Rules fight
enum RulesAttackKeys {
  HEAD = "голова",
  CHEST = "грудь",
  GROIN = "пах",
  LEGS = "ноги",
}

const rulesAttack = {
  [RulesAttackKeys.HEAD]: ["грудь-пах", "пах-ноги"],
  [RulesAttackKeys.CHEST]: ["голова-ноги", "пах-ноги"],
  [RulesAttackKeys.GROIN]: ["голова-ноги", "голова-грудь"],
  [RulesAttackKeys.LEGS]: ["голова-грудь", "грудь-пах"],
};

enum RulesBlockKeys {
  HEAD_LEGS = "голова-ноги",
  HEAD_CHEST = "голова-грудь",
  CHEST_GROIN = "грудь-пах",
  GROIN_LEGS = "пах-ноги",
}

const rulesBlock = {
  [RulesBlockKeys.HEAD_LEGS]: ["грудь", "пах"],
  [RulesBlockKeys.HEAD_CHEST]: ["пах", "ноги"],
  [RulesBlockKeys.CHEST_GROIN]: ["голова", "ноги"],
  [RulesBlockKeys.GROIN_LEGS]: ["голова", "грудь"],
};

export function Fight() {
  let [userHp, setUserHp] = useState(5);
  let [computerHp, setComputerHp] = useState(5);
  let [userXp, setUserXp] = useState(0);
  let [buttonFightState, setButtonFightState] = useState(false);
  let [checkedAttackState, setCheckedAttackState] = useState(false);
  let [checkedBlockState, setCheckedBlockState] = useState(false);
  let [userAttack, setUserAttack] = useState<RulesAttackKeys | null>(null);
  let [userBlock, setUserBlock] = useState<RulesBlockKeys | null>(null);
  let [resultComputerAttack, setResultComputerAttack] = useState("");
  let [resultUserAttack, setResultUserAttack] = useState("");
  let [numberButtonUnlock, setNumberButtonUnlock] = useState(0);
  let [userLvl, setUserLvl] = useState(1);
  let [fightCounter, setFightCounter] = useState(0);

  const levelUp = () => {
    if (userXp > 5) {
      setUserLvl((userLvl += 1));
    }
  };

  let [resultFight, setResultFight] = useState("результат поединка");

  const winFight = () => {
    setUserXp(userXp+5)
    levelUp();
    setFightCounter(fightCounter++);
    setResultFight("Ты победил");
  };

  const loseFight = () => {
    setResultFight("Ты проиграл");
    setFightCounter(fightCounter++);
  };

  const drawFight = () => {
    setResultFight("Ничья");
    setFightCounter(fightCounter++);
  };

  const fight = () => {
    attack();
    block();
    setUserAttack(null);
    setUserBlock(null);
    if (userHp <= 0 && computerHp > 0) loseFight();
    if (computerHp <= 0 && userHp > 0) winFight();
    if (userHp <= 0 && computerHp <= 0) drawFight();
    setAttackButtonName("Выбери атаку");
    setBlockButtonName("Выбери блок");
  };

  const attack = () => {
    let computerBlock = blocks[Math.floor(Math.random() * blocks.length)].part;
    setButtonFightState(false);
    setCheckedAttackState(false);
    setNumberButtonUnlock(0);
    if (userAttack && rulesAttack?.[userAttack]?.includes(computerBlock)) {
      setResultUserAttack(
        "Ты попал! Твоя атака: " +
          userAttack +
          " Блок противника: " +
          computerBlock
      );
      return setComputerHp((computerHp -= 5));
    } else {
      setResultUserAttack(
        "Ты промахнулся! Твоя атака: " +
          userAttack +
          " Блок противника: " +
          computerBlock
      );
      return computerHp;
    }
  };

  const block = () => {
    let computerAttack =
      attacks[Math.floor(Math.random() * attacks.length)].part;

    setButtonFightState(false);
    setCheckedBlockState(false);

    if (userBlock && rulesBlock[userBlock]?.includes(computerAttack)) {
      setResultComputerAttack(
        "Противник попал! Атака противника: " +
          computerAttack +
          " Твой блок: " +
          userBlock
      );
      return setUserHp((userHp -= 5));
    } else {
      setResultComputerAttack(
        "Противник промахнулся! Атака противника: " +
          computerAttack +
          " Твой блок: " +
          userBlock
      );

      return userHp;
    }
  };

  const onChangeAttackHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAttack(e.currentTarget.value as RulesAttackKeys);
    setCheckedAttackState(true);
    setNumberButtonUnlock((numberButtonUnlock += 1));
    setButtonFightState(checkedBlockState);
    setOpenAttackMenu(!openAttackMenu);
    setAttackButtonName(e.currentTarget.value);
  };

  const onChangeBlockHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserBlock(e.currentTarget.value as RulesBlockKeys);
    setNumberButtonUnlock((numberButtonUnlock += 1));
    setButtonFightState(checkedAttackState);
    setCheckedBlockState(true);
    setOpenBlockMenu(!openBlockMenu);
    setBlockButtonName(e.currentTarget.value);
  };
  let [openAttackMenu, setOpenAttackMenu] = useState(false);

  const openAttack = () => {
    setOpenAttackMenu(!openAttackMenu);
  };

  let [openBlockMenu, setOpenBlockMenu] = useState(false);
  const openBlock = () => {
    setOpenBlockMenu(!openBlockMenu);
  };

  let [attackButtonName, setAttackButtonName] = useState("Выбери атаку");

  let [blockButtonName, setBlockButtonName] = useState("Выбери блок");

  return (
    <FightStyle>
      <Enemy enemyImage={"https://e7.pngegg.com/pngimages/912/93/png-clipart-samurai-japan-illustration-katana-ninja-lesson-samurai-photography-eps.png"} enemyName={"Имя противника - Санджин"} enemyClass={"Класс противника - Ёкай"} enemyStats={"1 1 0 0"}/>
     
      <FightInformation>
        <table>
          <thead>
            <tr>
              <th>Здоровье игрока</th>
              <th>Здоровье противника</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userHp}</td>
              <td>{computerHp}</td>
            </tr>
          </tbody>
        </table> 
       <div>{resultUserAttack}</div>
        <div>{resultComputerAttack}</div>
        <div>{resultFight}</div>
  
      </FightInformation>

      <FightState>
        <Attacks>
          {openAttackMenu &&
            attacks.map((a) => {
              return (
                <li key={a.id}>
                  <input
                    onChange={onChangeAttackHandler}
                    type="radio"
                    name="radioAttack"
                    checked={userAttack === a.part}
                    value={a.part}
                    id={a.id}
                    onClick={openAttack}
                  />
                  <label htmlFor={a.id}>{a.part}</label>
                </li>
              );
            })}
          <Button name={attackButtonName} callBack={openAttack} />
        </Attacks>
        <Blocks>
          {openBlockMenu &&
            blocks.map((b) => {
              return (
                <li key={b.id}>
                  <input
                    onChange={onChangeBlockHandler}
                    type="radio"
                    name="radioBlock"
                    value={b.part}
                    id={b.id}
                    checked={userBlock === b.part}
                    onClick={openBlock}
                  />
                  <label htmlFor={b.id}>{b.part}</label>
                </li>
              );
            })}
          <Button name={blockButtonName} callBack={openBlock} />
        </Blocks>

      </FightState>
      <Button name={"В бой"} callBack={fight} disabled={!buttonFightState} />
    
    </FightStyle>
  );
}

const FightStyle = styled.div``;



const FightInformation = styled.div`
width:auto;
height: 20vh;
background-color: #966c6c;
`;



const FightState = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
background-color: #e1bdbd;

height: 50px;
`;

const Attacks = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  list-style-type: none;

  label {
    text-align: center;
    margin: 5px;
    display: inline-block;
    line-height: 34px;
    width: 95px;

    border-radius: 10px;
    cursor: pointer;
    color: #a3957a;
    border: 2px solid #a3957a;
    &:hover {
      color: #b0403c;
      border: 2px solid #b0403c;
    }
  }
  input {
    display: none;
  }
`;

const Blocks = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  list-style-type: none;

  label {
    text-align: center;
    margin: 5px;
    display: inline-block;
    line-height: 34px;
    width: 95px;

    border-radius: 10px;
    cursor: pointer;
    color: #a3957a;
    border: 2px solid #a3957a;
    &:hover {
      color: #b0403c;
      border: 2px solid #b0403c;
    }
  }
  input {
    display: none;
  }
`;
