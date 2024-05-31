

type StartPageTypeProps = {
  text: string;
};

const StartPageDescription = () => {
  const text = [
    "аромат хлеба и гул посетителей",
    "звуки музыки и запах жареного мяса",
    "оживленные разговоры и звон бокалов",
  ];
  return (
    <p>
      Ты стоишь перед каменным домом с деревянной крышей. Из окон доносятся{" "}
      {text[Math.floor(Math.random() * text.length)]}.
    </p>
  );
};

export const StartPage = (props: StartPageTypeProps) => {
  return (
    <div>
      <div>
        <img alt="bg1" />
        <img alt="bg2" />
      </div>
      <span>{props.text}</span>
      <StartPageDescription />
      <p>
        На массивной входной двери из досок ты видишь табличку с надписью
        "Открыто"
      </p>
      <button>Войти</button>
      <button>
        Поискать другой вход
      </button>
    </div>
  );
};
