import React, { useState } from "react";

import { S } from "./HeaderMenu.Styles";
import styled from "styled-components";
import { Icon } from "../../../components/elements/icon/Icon";

export const HeaderMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const heroItemsData = [
    {
      iconID: "katana",
      viewBox: "0 0 600 600",
      info: "5-15",
      fill: "white",
    },

    {
      iconID: "shield",
      viewBox: "0 0 24 24",
      info: "0 0 0 0",
      fill: "none",
    },
    {
      iconID: "heart",
      viewBox: "0 0 24 24",
      info: "5hp",
      fill: "none",
    },
    {
      iconID: "coin",
      viewBox: "0 0 24 24",
      info: "0mon",
      fill: "white",
    },
  ];

  return (
    <S.MobileMenu>
      <HeroButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <Icon
          iconId={"hero"}
          viewBox="0 0 512 512"
          width="40px"
          height="40px"
          fill={2 == 2 ? "" : "red"}
        />
      </HeroButton>
      {/* <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton> */}
      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        {heroItemsData.map((i, index) => {
          return (
            <p key={index}>
              <Icon
                iconId={i.iconID}
                viewBox={i.viewBox}
                width="20px"
                fill={i.fill}
                height="20px"
              />
              {i.info}
            </p>
          );
        })}
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

const HeroButton = styled.button<{ isOpen: boolean }>``;
