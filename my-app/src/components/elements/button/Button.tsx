import { useRef } from "react";
import styled from "styled-components";

type ButtonPropsType = {
  name: string;
  callBack: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonPropsType) {
  const handleClick = () => {
    props.callBack();
  };
  return (
    <ButtonStyle onClick={handleClick} disabled={props.disabled}>
      {props.name}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`

  width: 115px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid #a3957a;;
  background-color:#1d2028;
  color: #a3957a;;
  cursor: pointer;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-weight: 600;
  &:hover{
    border: 2px solid #b0403c;
    color: #b0403c;
  }

`;
