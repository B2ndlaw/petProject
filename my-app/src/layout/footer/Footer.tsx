import React from "react";

import { FlexWrapper } from "../../components/FlexWrapper";

import {S} from "./Footer.Styles"
import { Icon } from "../../components/elements/icon/Icon";



const socialItemsData = [
  {
    iconID: "telegram",
    viewBox: "0 0 32 32",
    href: "https://t.me/b2ndlaw",
  },

  {
    iconID: "github",
    viewBox: "0 0 438.549 438.549",
    href: "https://github.com/b2ndlaw",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>

        <FlexWrapper>
          <S.SocialList>
            {socialItemsData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink href={s.href} target="blank">
                    <Icon
                      width={"40px"}
        
                      height={"40px"}
                      viewBox={s.viewBox}
                      iconId={s.iconID}
                    />
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
          <S.Copyright>© 2024 Aleksey Basov, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
     
    </S.Footer>
  );
};
