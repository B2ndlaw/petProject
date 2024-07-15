import styled from "styled-components";
import { EnemyType } from "../../layout/pages/FirstFight";





export function Enemy(props: EnemyType) {
  return (
    <StyledEnemy>
      <EnemyName>Имя: {props.enemyName}</EnemyName>
      <EnemyImg src={props.enemyImage}  alt="warrior" />

      <EnemyClass>Класс: {props.enemyClass}</EnemyClass>
      <EnemyHp>Здоровье: {props.enemyHp}</EnemyHp>
    </StyledEnemy>
  );
}

const StyledEnemy = styled.section`
  background-color: red;
`;

const EnemyName = styled.h4`
  
`
const EnemyImg = styled.img`
  width: 150px;
`

const EnemyClass = styled.p`
  
`

const EnemyHp = styled.p`
  
`