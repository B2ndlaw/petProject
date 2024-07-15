import React from "react";

import { S } from "./Header.Styles";
import styled from "styled-components";
import { Icon } from "../../components/elements/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/elements/logo/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Logo />
      <HeaderMenu />
    </S.Header>
  );
};
