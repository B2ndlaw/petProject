import styled from "styled-components";

const Menu=styled.section`
position: absolute;
right: 0;
bottom: 0;

  width: 50%;
  height: 20%
`

const NavMenu = styled.nav`
display: flex;
flex-direction: column;

justify-content: space-around;

  height: 100%;
`;

const NavMenuItem = styled.a`

  display: block;
  width:100%;

  padding: 5px;
  text-decoration: none;
  text-align: right;

  color: white;
  font-size: 20px;

  opacity: 0.5;


  transition: all 0.1s ease-in-out;
  /* border: 2px solid white;
  border-radius: 10px; */
 



  &:active {

  }
  &:hover {
    opacity: 1;
  }
`;

export const S = {
  Menu,
  NavMenu,
  NavMenuItem


}
