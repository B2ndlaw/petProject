import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Menu = styled.section`
`;

const NavMenu = styled.nav``;

const NavMenuItem = styled.a`

  margin: 30px;
  display: block;
width: 200px;
  padding: 5px;
  text-decoration: none;
  text-align: center;


  color: ${theme.colors.primaryFont};
  font-size: 30px;

  transition: ${theme.animations.transition};
  border: 2px solid ${theme.colors.primaryFont};
  border-radius: 10px;



  &:active {
  }
  &:hover {
    color: ${theme.colors.primaryFont};
    border: 2px solid ${theme.colors.primaryFont};
  }
`;

export const S = {
  Menu,
  NavMenu,
  NavMenuItem,
};
