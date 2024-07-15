import React from "react";
import styled from "styled-components";
import iconsSprite from "./../../../assets/images/icons-sprite.svg"
import { theme } from "../../../styles/Theme";

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
      fill={props.fill || `${theme.colors.primaryFont}`}
      width={props.width || "65"}
      height={props.height || "65"}
      viewBox={props.viewBox || "0 0 35 35"}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  &:hover {
    cursor: pointer;
   
    transition: ${theme.animations.transition};
  
  }
`;
