import styled from "styled-components";
import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/elements/button/Button";
import { Logo } from "../../components/elements/logo/Logo";
import { Messages } from "./Messages";
import { Icon } from "../../components/elements/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

const menuItems = [
  { name: "Герой", href: "/hero", id: v1() },
  { name: "Бои", href: "/arena", id: v1() },
  { name: "Таверна", href: "/tavern", id: v1() },
  { name: "Кузница", href: "/forge", id: v1() },
];

export const HomePage = () => {
  return (
    <FlexWrapper background = {"url(https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150960971.jpg?t=st=1720950882~exp=1720954482~hmac=1f81dae00cb7b9c018870381300b34c5b9883c55aaff215528e0d8a57684042c&w=2000)"}>

      <Menu menuItems={menuItems} />
      
    </FlexWrapper>
  );
};






