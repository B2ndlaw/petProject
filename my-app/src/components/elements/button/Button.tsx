import {S} from "./Button.Styles"


type ButtonPropsType = {
  name: string;
  callBack: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonPropsType) {
  const handleClick = () => {
    props.callBack();
  };
  return (
    <S.Button onClick={handleClick} disabled={props.disabled}>
      {props.name}
    </S.Button>
  );
}

