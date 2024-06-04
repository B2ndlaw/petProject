import { useState } from "react";
// import { FullInput } from "./FullInput";
import { Input } from "./Input";
import { Button } from "./Button";
import styled from "styled-components";
import { v1 } from "uuid";

export const Messages = () => {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
  ]);

  let [title, setTitle] = useState("");

  const addMassage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const onClickHandlerAddMessage = () => {
    addMassage(title);
    setTitle("");
  };

  return (
    <StylesMessages>
      <Input title={title} setTitle={setTitle} />
      <Button name="+" callBack={onClickHandlerAddMessage} />

      {/* <FullInput addMassage={addMassage}/>*/}

      {message.map((m) => {
        return <div key={v1()}>{m.message}</div>;
      })}
    </StylesMessages>
  );
};

const StylesMessages = styled.div`
  display: flex;
`;
