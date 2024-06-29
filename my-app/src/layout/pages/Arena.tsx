//Imports & library

import styled from "styled-components";
import { Fight } from "../../components/Fight";
import { Menu } from "../../components/Menu";
import { v1 } from "uuid";

const menuItems = [
  { name: "Площадь", href: "/palace", id: v1() },

 
  { name: "Создать бой", href: "", id: v1() },
  { name: "Вступить в бой", href: "", id: v1() },
];

export function Arena() {
  return (
    <StylesArena>
      <h2>Додзе</h2>
      <Fight />
      <Menu menuItems={menuItems}/>
    </StylesArena>
  );
}

//Styles
const StylesArena = styled.section`
background-color: #734343;
width: 100%;
`;