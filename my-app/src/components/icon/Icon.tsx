import React from "react";
import styled from "styled-components";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import { theme } from "../../styles/Theme";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <StyledIcon
      fill={props.fill || "pink"}
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  &:hover {
    transform: translateY(-5px);
    transition: ${theme.animations.transition};
    //transform: scale(1.1);
  }
`;
