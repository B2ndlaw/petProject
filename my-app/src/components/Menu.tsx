import styled from "styled-components";
import { v1 } from "uuid";

type MenuType = {
  menuItems: Array<{id: string, href: string, name: string}>
 
};

export const Menu = (props: MenuType) => {
  return (

    <NavMenu>
      {props.menuItems.map((m) => {
        return (
          <NavMenuItem key={m.id} href={m.href}>
            {m.name}
          </NavMenuItem>
        );
      })}
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  display: flex;
 
  border: 3px dashed #a3957a;
  justify-content: space-around;
`;

const NavMenuItem = styled.a`
  display: block;
  width: 75px;
  height: 30px;
  padding: 5px;
  text-decoration: none;
  text-align: center;
  border: 2px solid #7b90a4;
  border-radius: 10px;
  color: #7b90a4;

  &:active {
    border: 2px solid white;
  }
  &:hover {
    border: 2px solid white;

    color: white;
  }
`;
