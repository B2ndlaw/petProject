//Imports & library

import styled from "styled-components";
import { Fight } from "../../components/fight/Fight";
import { Menu } from "../../components/menu/Menu";
import { v1 } from "uuid";
import { Button } from "../../components/elements/button/Button";
import { FlexWrapper } from "../../components/FlexWrapper";

const menuItems = [
  { name: "Назад", href: "/homePage", id: v1() },
  { name: "Создать заявку на бой", href: "", id: v1() },
  { name: "Принять заявку на бой", href: "", id: v1() },
];

const Fights = [{
  name: "Warrior",
  style: "without weapon"
}];

export function Arena() {
  return (
  
      <FlexWrapper background={"url(https://img.freepik.com/free-photo/full-shot-ninjas-fighting_23-2150961068.jpg?t=st=1720946830~exp=1720950430~hmac=4e0ca5028a32f4ed4490df91d8edf837203ac04e9cf56671dab095a81dda866f&w=2000)"}>
      <h2>Додзе</h2>
      <div>
        <p>Текущие заявки на бой</p>
        <p>Фильтровать по уровню, с оружием или кулачный</p>
        {Fights[0].name} {Fights[0].style}
      </div>
      <Menu menuItems={menuItems}/>
      </FlexWrapper>
   
  

    
   

  );
}

//Styles
const StylesArena = styled.section`


/* position: relative; */
`;