import { useState } from "react";
import styled from "styled-components";
import { v1 } from "uuid";
import { Icon } from "../../components/elements/icon/Icon";

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
      {/* <Input titleNewMessage={titleNewMessage} setTitleNewMessage={setTitleNewMessage} />
      <Button name="+" callBack={onClickHandlerAddMessage} /> */}
<a><Icon iconId="envelope" viewBox="0 0 512 512" fill={2==2?"":"red"}/></a>



      {/* {message.map((m) => {
        return <div key={v1()}>{m.message}</div>;
      })} */}
    </StylesMessages>
  );
};

const StylesMessages = styled.div`
position: absolute;
top:0;
right: 0;
z-index: 2;


  display: inline-block;
button{

}
`;



