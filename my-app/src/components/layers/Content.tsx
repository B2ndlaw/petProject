import styled from "styled-components";

export const Content = () => {
  return (
    <StylesContent>
      <p>Контент</p>
    </StylesContent>
  );
};

const StylesContent = styled.div`
  grid-area: c;
  border: 1px solid red;
`;
