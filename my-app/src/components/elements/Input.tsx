import React, { ChangeEvent } from "react";

type InputType = {
    titleNewMessage: string
    setTitleNewMessage: (title:string)=>void
}

export const Input = (props:InputType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
   props.setTitleNewMessage(event.currentTarget.value);
  };
  return <input value={props.titleNewMessage} onChange={onChangeInputHandler} />;
};
