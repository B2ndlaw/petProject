import styled from "styled-components";

type ItemType = {
  targetColor:boolean
}

const Select = styled.div`
span{border: 1px solid black;
  display: inline-block;
  min-height: 20px;
  min-width: 60px;
}
`;

const Items = styled.div`
position: absolute;
padding: 5px;
border: 1px solid red;
`

const Item = styled.div<ItemType>`

background-color: ${props=>props.targetColor ? "red" : "white"};


`

export const S = {
  Select,
  Items,
  Item
}


