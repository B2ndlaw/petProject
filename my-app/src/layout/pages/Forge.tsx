import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";

const menuItems = [
  { name: "Площадь", href: "/palace", id: v1() },

  { name: "Купить", href: "", id: v1() },
  { name: "Продать", href: "", id: v1() },
  { name: "Починка", href: "", id: v1() },
];

export const Forge = () => {
  return (
    <ForgeStyle>
      <h2>Кузница Kajiya?</h2>
      <div>
        <Menu menuItems={menuItems} />
      </div>
    </ForgeStyle>
  );
};

const ForgeStyle = styled.section`
  background-color: #734343;
  width: 100%;
`;
