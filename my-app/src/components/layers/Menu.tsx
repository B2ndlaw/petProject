import styled from "styled-components";

const menuItems = [
  {name: "Главная", href: "/main"},
  {name: "Персонаж", href: "/hero"},
  {name: "Бой", href: "/fight"},
  {name: "Сообщения", href: "/messages"},
  {name: "Таверна", href: "/tavern"},
  {name: "Выход", href: "/exit"},
]

type MenuType = {
  title: string,
  href: string
}

export const Menu = (props: MenuType) => {
  return (
    <StylesMenu>
      <p>Меню</p>
      <ul>
        {menuItems.map((m)=>{return <li><a href={m.href}> {m.name}</a> </li>})}
  
   
      </ul>
    </StylesMenu>
  );
};

const StylesMenu = styled.nav`
  grid-area: n;
  border: 1px dashed green;
`;
