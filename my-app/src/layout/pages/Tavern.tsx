import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";

const menuItems = [
  { name: "Площадь", href: "/palace", id: v1() },

  { name: "Беседы", href: "", id: v1() },
  { name: "Гомоку", href: "/gomoku", id: v1() },
];

export const Tavern = () => {
  return (
    <TavernStyle>
      <h2>Идзакая</h2>
      <Menu menuItems={menuItems} />
    </TavernStyle>
  );
};

const TavernStyle = styled.section`
  background-color: #734343;
  width: 100%;
`;
