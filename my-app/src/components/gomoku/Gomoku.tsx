import styled from "styled-components";
import { Menu } from "../menu/Menu";
import { v1 } from "uuid";

const menuItems = [
  {id: v1(), name: "Игра", href: ""},
  { name: "Ставка", href: "", id: v1() },

  { name: "Таверна", href: "/tavern", id: v1() },

]


export function Gomoku() {
  return (
    <GomokuStyle>
      <BoardStyle>
        {" "}
        <LineStyle>
          <CellStyle>1</CellStyle>
          <CellStyle>2</CellStyle>
          <CellStyle>3</CellStyle>
        </LineStyle>
       
      </BoardStyle>
      <Menu menuItems={menuItems}/>
    </GomokuStyle>
  );
}

const GomokuStyle = styled.section`
  
  background-color: #734343;
  width: 100%;
`;

const BoardStyle = styled.div``;

const CellStyle = styled.button`
  
`

const LineStyle = styled.div`
  display: inline-block;
`;
