import styled from "styled-components";

type SuperButtonPropsType = {
  name: string;
  callBack: () => void;
  disabled?: boolean;
};

export const SuperButton = (props: SuperButtonPropsType) => {
  const handleClick = () => {
    props.callBack();
  };
  return (
    <SuperButtonStyle onClick={handleClick} disabled={props.disabled}>
      {props.name}{" "}
    </SuperButtonStyle>
  );
};

const SuperButtonStyle = styled.button`
  display: inline-block;
  height: 80px;
  width: 80px;
  border: 2px solid #a3957a;
  border-radius: 50px;
  color: #a3957a;
  background-color: #1d2028;
  cursor: pointer;

  font-size: 15px;

  &:hover {
    color: #b0403c;
    border: 2px solid #b0403c;
  }
`;
