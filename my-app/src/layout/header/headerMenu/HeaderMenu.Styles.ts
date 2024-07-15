import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

//Menu

const MenuItem = styled.li`
  position: relative;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  transition: ${theme.animations.transition};
  //outline: 1px solid red;
  color: ${theme.colors.primaryFont};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  //font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  color: transparent;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover {
    opacity: 0.6;
  }

  &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(15deg) translateX(5px);
      //color: ${theme.colors.secondaryFont};

      & + ${Mask} {
        transform: skewX(15deg) translateX(-5px);
      }
    }
  }
`;

// MobileMenu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 5px 15px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: end;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.8s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);

      & ul {
        gap: 40px;
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 200px;
  height: 200px;
  top: -117px;
  right: -90px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    left: 45px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);
      left: 0px;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);
      left: 0px;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
//DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

export const S = {
  NavLink,
  MenuItem,
  Mask,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
};
