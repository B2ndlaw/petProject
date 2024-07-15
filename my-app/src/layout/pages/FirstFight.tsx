//Imports & library

import styled from "styled-components";


import { v1 } from "uuid";
import { ArmorDemo, ArmorType } from "../../state/Armor";
import { Enemy } from "../../components/enemy/Enemy";
import { Attack } from "../../components/fight/Attack";
import { Block } from "../../components/fight/Block";
import { Button } from "../../components/elements/button/Button";
import { useState } from "react";





// export type EnemyStatsType = {
//   enemyAttack: number,
//   enemyArmor: ArmorType[]
// }

export type EnemyType = {
  enemyName: string;
  enemyImage: string; 
  enemyClass: string;
  enemyHp: number,
  enemyArmor?: ArmorType
};

const FirstEnemy: EnemyType = {
  enemyName: "Drunk Samurai",
  enemyImage: "https://avatars.dzeninfra.ru/get-zen_doc/4419441/pub_64182a89693716000934bddc_6418ae5374aa556b95f7c28f/scale_1200",
  enemyClass: "Samurai",
  enemyArmor: ArmorDemo,
  enemyHp: 5,
 
}

export function FirstFight() {
  let [resultFight, setResultFight] = useState("");
  let [fightButtonState, setFightButtonState] = useState(false);

//   const unlockFightButton = () => {
// if (attackValue === "голова" || "грудь" && blockValue === "голова-ноги" || ) {
//   setFightButtonState(true);
// }
//   }


const demoFight = () => {
  setResultFight("Ты увернулся от сильного, но неточного удара противника и повалил его с одного точного попадания!")
}
  return (
    <StylesArena>
      <h2>Идзакая</h2>
      <Enemy enemyName={FirstEnemy.enemyName} enemyImage={FirstEnemy.enemyImage} enemyClass={FirstEnemy.enemyClass} enemyHp={FirstEnemy.enemyHp}/>
      <p>Дверь в таверну отркылась и шатаясь из нее вышел огромный воин без шлема. Он двигается на тебя и явно агрессивен.</p>
  <p>Отрази его удар, выбрав блок:</p>
  <Block/> 
  <p>Нанеси ему ответный удар, выбрав атаку:</p>
   <Attack/>

   <p>Начать бой</p>
   <Button name={"В бой"} callBack={demoFight} disabled={fightButtonState} />

   <p>{resultFight}</p>
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