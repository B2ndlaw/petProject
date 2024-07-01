import { useState } from "react";
import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";

const menuItems = [

  { name: "Навыки", href: "", id: v1() },
  { name: "Снаряжение", href: "", id: v1() },
  { name: "Статы", href: "", id: v1() },
];

type UserType = {
  //Authorization
  email: string;
  login: string;
  password: string;
  role: string;
  //Game data
  nickName: string;
  isLogin: boolean;
  class: "samurai" | "ronin" | "ony";
  gender: string;
  level: number;
  experience: number;
  coin: number;
};

export const UserPage = () => {
  let [userHp, setUserHp] = useState(5);
  let [userXp, setUserXp] = useState(0);
  let [userLvl, setUserLvl] = useState(1);
  //Weapon
  const dayse = {
    dayto: "catana",
    seto: "vakidzasi",
  };

  return (
    <UserPageStyle>
      <h2>Samurai</h2>
      <img
        src="https://e7.pngegg.com/pngimages/912/93/png-clipart-samurai-japan-illustration-katana-ninja-lesson-samurai-photography-eps.png"
        alt="warrior"
        height={"350px"}
      />
<h3>Имя: Саганоши Мавара</h3>
      <div>
        <p>класс-ронин</p>
        <p>клан</p>
        <p>уровень-{userLvl}</p>
        <p>опыт-{userXp}</p>
      </div>

      <h4>Инвентарь-кнопка</h4>
      <div>
        <p>дайсе:</p>
        <p>дайто-{dayse.dayto}</p>
        <p>сето-{dayse.seto}</p>
      </div>

      <h4>Навыки-кнопка</h4>
      <p>крит-5%</p>
      <p>уворот-1%</p>
      <p>
        Сила: 3 +1 +10 +100 (3+0) Ловкость: 4 +1 +10 +100 (4+0) Выносливость:
        137 +1 +10 +100 (137+0)
      </p>

      {/* <h4>Статы</h4>
      <p>атака-5-12</p>
      <p>защита-0 0 0 0</p>
    
      <p>здоровье-{userHp}</p>
   
      <h4>Статистика</h4>
      <p>
        Побед: 0 Поражений: 0 (0 по таймауту) Ничьих: 0 Всего боев: 0 Убил
        монстров: 0
      </p>
      <p>кошелек-40мон</p> */}

      <Menu menuItems={menuItems}/>
    </UserPageStyle>
  );
};


const UserPageStyle = styled.section`
  background-color: #734343;
  width: 100%;
`;
