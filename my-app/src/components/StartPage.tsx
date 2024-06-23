



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

export const StartPage = () => {
  return (
    <div>
      <div>
        <img src="https://wp-s.ru/wallpapers/2/10/531339893849606/nochnaya-yaponiya-polna-lyudmi-i-ognyami.jpg" width={"500px"} alt="bg1" />
   
      </div>
  
      <StartPageDescription />
      <p>
        На массивной входной двери из досок ты видишь табличку с надписью
        "Открыто"
      </p>
      <button>Войти</button>
      <button>
        Поискать другой вход
      </button>

      <p>задания - в таверне</p>
      <p>бои - на арене</p>
      <p>вещи - в кузнице</p>
    </div>
  );
};
