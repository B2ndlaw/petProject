import styled from "styled-components";
import { v1 } from "uuid";
import { Menu } from "../../components/Menu";

const menuItems = [

  { name: "Арена", href: "/arena", id: v1() },
  { name: "Таверна", href: "/tavern", id: v1() },
  { name: "Кузница", href: "/forge", id: v1() },
];

export const Palace = () => {
  return (
    <PalaceStyle>
      <div>
        <h2>Деревня Сай Дзе</h2>
        <p>
          Ты на главной площади деревни. Жители оживленно обсуждают последние новости. Слева
          находится кузница, мастера которой славятся на всю округу. Там можно починить или купить снаряжение. Справа уже
          знакомая тебе Идзакая, где можно пообщаться за кружечкой саке, найти работу или сыграть партию-другую в Гомоку. А самое большое сооружение напротив - это Додзе, где проводятся бои. Куда направишься?{" "}
        </p>
      </div>
      <Menu menuItems={menuItems} />
    </PalaceStyle>
  );
};

const PalaceStyle = styled.section`
  background-color: #734343;
  width: 100%;
`;
