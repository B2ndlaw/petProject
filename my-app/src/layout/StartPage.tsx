import styled from "styled-components";
import { Logo } from "../components/elements/logo/Logo";
import { Button } from "../components/elements/button/Button";

const StartPageDescription = () => {
  const text = [
    "аромат хлеба и гул посетителей",
    "звуки музыки и запах жареного мяса",
    "оживленные разговоры и звон бокалов",
  ];
  return (
    <div>
      <div>
        <h2>Добро пожаловать в игру Ronin Warrioirs!</h2>
        <h3>Мир средневековой Японии, самураев и демонов</h3>
      </div>
      <div>
        {" "}
        <p>
          Ты стоишь перед каменным домом с деревянной крышей. Из окон доносятся{" "}
          {text[Math.floor(Math.random() * text.length)]}.
        </p>
        <p>
          На массивной входной двери из досок ты видишь табличку с надписью
          "Открыто"
        </p>
      </div>
    </div>
  );
};

export const StartPage = () => {
  return (
    <StartPageStyle>
      <DisplayStyle>
        <StartPageDescription />

        <Button name={"Войти"} callBack={() => {}} />
        <Button name={"Поискать другой вход"} callBack={() => {}} />
      </DisplayStyle>

      <Logo />
    </StartPageStyle>
  );
};

const StartPageStyle = styled.section`
  display: flex;
  height: 100vh;
  margin: 0 auto;
`;

const DisplayStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  max-width: 600px;
  min-width: 360px;
  background-color: #633434;
`;
