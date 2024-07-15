import { useState } from "react";
import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/elements/icon/Icon";

const menuItems = [

  { name: "Назад", href: "/homePage", id: v1() },

];

type UserType = {
  // //Authorization
  // email: string;
  // login: string;
  // password: string;
  // role: string;
  // //Game data
  name: string;
  // isLogin: boolean;
  class: "Ронин" | "Самурай" | "Демон";
  // gender: string;
  // level: number;
  // experience: number;
  // coin: number;
  Hp: number
};



const User: UserType = {
  name: "Хадзиро",
  class: "Ронин",
  Hp: 5,
}

export let {Hp} = User;
  

 


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
    <FlexWrapper background={"url(https://img.freepik.com/premium-photo/samurai-art_551707-29679.jpg?w=2000)"}>
  
<h3>Имя: {User.name}</h3>
      <div>
        <p>Класс: {User.class}</p>

        <p>Уровень: {userLvl}</p>
        <p>Опыт: {userXp}</p>
      </div>
      <p>
      Всего боев: 0 Побед: 0 Поражений: 0 (0 по таймауту) Ничьих: 0 
      </p>



      <p> <Icon iconId="katana" viewBox="0 0 600 600" width="20px" height="20px"/>5-12</p>
      <p><Icon iconId="shield" viewBox="0 0 24 24" width="20px" height="20px" fill="none"/>0 0 0 0</p>
    
      <p><Icon iconId="heart" viewBox="0 0 24 24" width="20px" height="20px" fill="none"/>{userHp}</p>

      <p><Icon iconId="coin" viewBox="0 0 24 24" width="20px" height="20px"/>0мон</p>
   
  
      
    

      <Menu menuItems={menuItems}/>
    </FlexWrapper>
  );
};



