import styled from "styled-components";

export const TextArea = () => {
  return (
    <StylesTextArea>
      <p>Текст</p>
    </StylesTextArea>
  );
};

const StylesTextArea = styled.div`
  grid-area: t;
  border: 1px solid blue;
`;
