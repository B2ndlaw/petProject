import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { v1 } from "uuid";
import { Button } from "./elements/button/Button";
import { SuperButton } from "./elements/SuperButton";

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

//Object.keys(), Object.values(), Object.entries()

//Rules fight
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
  let [fightCounter, setFightCounter]=useState(0);

  const levelUp = () => {
    if (userXp > 5) {
      setUserLvl((userLvl += 1));
    }
  };

  let [resultFight, setResultFight] = useState("start");

  const winFight = () => {
    setUserXp((userXp += 5));
    levelUp();
    setFightCounter(fightCounter++)
    setResultFight((resultFight = "You win"));
  };

  const loseFight = () => {
    setResultFight((resultFight = "You lose"));
    setFightCounter(fightCounter++)
  };

  const drawFight = () => {
    setResultFight((resultFight = "Draw"));
    setFightCounter(fightCounter++)
  };

  const fight = () => {
    attack();
    block();
    setUserAttack(null);
    setUserBlock(null);
    if (userHp <= 0 && computerHp > 0) loseFight();
    if (computerHp <= 0 && userHp > 0) winFight();
    if (userHp <= 0 && computerHp <= 0) drawFight();
    setAttackButtonName("Атака");
    setBlockButtonName("Защита");
  };

  const attack = () => {
    let computerBlock = blocks[Math.floor(Math.random() * blocks.length)].part;
    setButtonFightState(false);
    setCheckedAttackState(false);
    setNumberButtonUnlock(0);
    if (userAttack && rulesAttack?.[userAttack]?.includes(computerBlock)) {
      setResultUserAttack(
        "User hit! userAttack: " +
          userAttack +
          " computerBlock: " +
          computerBlock
      );
      return setComputerHp((computerHp -= 5));
    } else {
      setResultUserAttack(
        "User miss! userAttack: " +
          userAttack +
          " computerBlock: " +
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
        "Cpu hit! computerAttack: " +
          computerAttack +
          " playerBlock: " +
          userBlock
      );
      return setUserHp((userHp -= 5));
    } else {
      setResultComputerAttack(
        "Cpu miss! computerAttack: " +
          computerAttack +
          " playerBlock: " +
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

  let [attackButtonName, setAttackButtonName] = useState("Атака");

  let [blockButtonName, setBlockButtonName] = useState("Защита");

  return (
    <FightStyle>
      <div>
        <img
          src="https://e7.pngegg.com/pngimages/912/93/png-clipart-samurai-japan-illustration-katana-ninja-lesson-samurai-photography-eps.png"
          alt="warrior"
          height={"350px"}
        />

        <p>Противник</p>
        <p>Класс проитвника</p>
        <p>Статы проитвника</p>
      </div>
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
        <p>{userLvl}</p>
        <p>{fightCounter}</p>
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
<SuperButton name={"Fight"} callBack={fight} disabled={!buttonFightState}/>
     
      </FightState>
    </FightStyle>
  );
}

const FightStyle = styled.div``;

const FightInformation = styled.div`


`;

const FightState = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
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
    &:hover{
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
    &:hover{
      color: #b0403c;
      border: 2px solid #b0403c;
    }
  }
  input {
    display: none;
  }
`;
