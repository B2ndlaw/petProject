import styled from "styled-components";
import { v1 } from "uuid";

const menuItems = [
  { name: "Главная", href: "/main", id: v1() },
  { name: "Самурай", href: "/hero", id: v1() },
  { name: "Додзё", href: "/fight", id: v1() },
  { name: "Сообщения", href: "/messages", id: v1() },
  { name: "Идзакая", href: "/tavern", id: v1() },
  { name: "Выход", href: "/exit", id: v1() },
];

type MenuType = {
  title: string;
  href: string;
};

export const Menu = (props: MenuType) => {
  return (
    <StylesMenu>
      <p>Меню</p>
      <ul>
        {menuItems.map((m) => {
          return (
            <li key={m.id}>
              <a href={m.href}> {m.name}</a>{" "}
            </li>
          );
        })}
      </ul>
    </StylesMenu>
  );
};

const StylesMenu = styled.nav`
  grid-area: n;
  border: 1px dashed green;
`;
