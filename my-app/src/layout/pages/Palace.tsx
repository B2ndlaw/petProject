import styled from "styled-components";
import { v1 } from "uuid";
import { Menu } from "../../components/menu/Menu";

const menuItems = [
  { name: "Арена 道場", href: "/arena", id: v1() },
  { name: "Таверна 居酒屋", href: "/tavern", id: v1() },
  { name: "Кузница 鍛冶屋", href: "/forge", id: v1() },
];

export const Palace = () => {
  return (
    <PalaceStyle>
      <div>
        <h2>Деревня Сай Дзё</h2>
        <p>
          Ты на главной площади деревни. Жители оживленно обсуждают последние
          новости. Слева находится кузница, мастера которой славятся на всю
          округу. Там можно починить или купить снаряжение. Справа уже знакомая
          тебе Идзакая, где можно пообщаться за кружечкой саке, найти работу или
          сыграть партию-другую в Гомоку. А самое большое сооружение напротив -
          это Додзе, где проводятся бои. Куда направишься?{" "}
        </p>
      </div>
      <Menu menuItems={menuItems} />
    </PalaceStyle>
  );
};

const PalaceStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #734343;
  
  
  

  h2 {
    display: block;
    height: 15vh;
    font-size: 40px;
  }

  p {
    display: block;
    height: 45vh;
  }
`;
