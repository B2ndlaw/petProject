import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

export const StartPage = () => {
  const text = [
    "аромат хлеба и гул посетителей",
    "звуки музыки и запах жареного мяса",
    "оживленные разговоры и звон бокалов",
  ];

  return (
    <StartPageStyle>
      <Title>RONIN WARRIORS</Title>

      <StartDescription>
        {" "}
        <p>
          Ты стоишь перед каменным домом с деревянной крышей. Из окон доносятся{" "}
          {text[Math.floor(Math.random() * text.length)]}.
        </p>
        <p>
          На массивной входной двери из досок ты видишь табличку с надписью
          "Открыто"
        </p>
        
      </StartDescription>
      <a href="/firstfight">Войти</a>
    </StartPageStyle>
  );
};

const StartPageStyle = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


  a {
    text-decoration: none;
    color: white;
    opacity: 0.5;
    font-size: 20px;
    padding: 2px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    @keyframes glowing {
      0% {
        box-shadow: 0 0 5px #b0afaf;
      }
      50% {
        box-shadow: 0 0 20px #ffffff;
      }
      100% {
        box-shadow: 0 0 5px #b0afaf;
      }
    }

    animation: glowing 2900ms infinite;
  }
  a:hover {
    opacity: 1;
    border: 1px solid rgb(255, 255, 255);
  }
`;

const Title = styled.h1`
  color: red;
  font-weight: bold;
  font-size: 10vw;
`;

const StartDescription = styled.div`
  min-width: 300px;
  max-width: 450px;
 margin: 20px;
 
 
`;
