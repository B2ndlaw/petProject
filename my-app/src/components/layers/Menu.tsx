import styled from "styled-components";

// type MenuType = {
//     title: string
//     href: string
// }

export const Menu = () => {
  return (
    <StylesMenu>
      <p>Меню</p>
      <ul>
        <li>
          <a href="">Домой</a>
        </li>
        <li>
          <a href="">Арена</a>
        </li>
        <li>
          <a href="">Сообщения</a>
        </li>
        <li>
          <a href="">Персонаж</a>
        </li>
        <li>
          <a href="">Настройки</a>
        </li>
        <li>
          <a href="">Выход</a>
        </li>
      </ul>
    </StylesMenu>
  );
};

const StylesMenu = styled.nav`
  grid-area: n;
  border: 1px solid green;
`;
