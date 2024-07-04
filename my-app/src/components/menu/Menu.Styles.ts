import styled from "styled-components";

const Menu=styled.section`
position: absolute;
right: 0;
bottom: 0;
  background-color: grey;
  width: 80%;
  height: 20%
`

const NavMenu = styled.nav`
display: flex;
flex-direction: column;
align-items: end;
justify-content: space-around;
  border: 3px dashed #a3957a;
  height: 100%;
`;

const NavMenuItem = styled.a`

  display: block;
  width:50%;

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

export const S = {
  Menu,
  NavMenu,
  NavMenuItem


}
