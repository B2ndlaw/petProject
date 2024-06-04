import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";


type FullInputTypes = {
    addMassage: (title: string)=>void
}

export const FullInput = (props:FullInputTypes) => {
  let [title, setTitle] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onClickHandler = () => {
    props.addMassage(title)
    setTitle("")
  };

  return (
    <StylesFullInput>
      <input value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickHandler}>+</button>
    </StylesFullInput>
  );
};

const StylesFullInput = styled.div`
  display: flex;
`;
