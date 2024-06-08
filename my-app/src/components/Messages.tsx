import { useState } from "react";
// import { FullInput } from "./FullInput";
import { Input } from "./Input";
import { Button } from "./Button";
import styled from "styled-components";
import { v1 } from "uuid";

//Data
export const Messages = () => {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
  ]);

  //State new message
  let [titleNewMessage, setTitleNewMessage] = useState("");


  //Function add message
  const addMassage = (titleNewMessage: string) => {
    let newMessage = { message: titleNewMessage };
    setMessage([newMessage, ...message]);
  };

  const onClickHandlerAddMessage = () => {
    addMassage(titleNewMessage);
    setTitleNewMessage("");
  };

  return (
    <StylesMessages>
      <Input titleNewMessage={titleNewMessage} setTitleNewMessage={setTitleNewMessage} />
      <Button name="+" callBack={onClickHandlerAddMessage} />

      {/* <FullInput addMassage={addMassage}/>*/}

      {message.map((m) => {
        return <div key={v1()}>{m.message}</div>;
      })}
    </StylesMessages>
  );
};

const StylesMessages = styled.div`
  display: inline-block;
  background-color: #b8b8e4;
`;



