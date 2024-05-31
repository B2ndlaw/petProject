//Lists attack & block
const attackChoice = ["head", "chest", "groin", "legs"];
const blockChoice = ["head_legs", "head_chest", "chest_groin", "groin_legs"];

//Rules
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

//CPU Attack
const computerAttackRandomChoice = () => {
  let computerAttackChoice =
    attackChoice[Math.floor(Math.random() * attackChoice.length)];
  return computerAttackChoice;
};

const rules = {
  head: ["chest_groin", "groin_legs"],
  chest: ["head_legs", "groin_legs"],
  groin: ["head_legs", "head_chest"],
  legs: ["head_chest", "chest_groin"],
};

const computerAttack = (cpuAttack: string, playerBlock: string) => {
  if (rules[cpuAttack].includes(playerBlock)) {
    return "Hit";
  } else {
    return "Miss";
  }
};

//PlayerAttack
const computerBlockRandomChoice = () => {
  return blockChoice[Math.floor(Math.random() * blockChoice.length)];
};

const PlayerAttack = (playerAttack: string, cpuBlock: string) => {
  if (rules[playerAttack].includes(cpuBlock)) {
    return "Hit";
  } else {
    return "Miss";
  }
};

export const Fight = () => {};

export const FightWindow = () => {
  return (
    <>
      <p>бой</p>
      <div>
        <p>Атака</p>
        <ul>
          <li>head</li>
          <li>chest</li>
          <li>groin</li>
          <li>legs</li>
        </ul>
      </div>
      <div>
        <p>Защита</p>
        <ul>
          <li>"head_legs"</li>
          <li>"head_chest"</li>
          <li>"chest_groin"</li>
          <li>"groin_legs"</li>
        </ul>
      </div>
      <div>Здоровье</div>
      <div>Здоровье противника</div>

      </>
  );
};
