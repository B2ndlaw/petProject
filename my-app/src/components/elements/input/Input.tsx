import React, { ChangeEvent } from "react";
import {S} from "./Input.Styles"

type InputType = {
    title: string
    changeInput: (newTitle:string)=>void
}

export const Input = (props:InputType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
   props.changeInput(event.currentTarget.value);
  };
  return <S.Input value={props.title} onChange={onChangeInputHandler} />;
};
