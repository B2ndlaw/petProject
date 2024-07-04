import styled from "styled-components";

type EnemyType = {
  enemyImage: string;
  enemyName: string;
  enemyClass: string;
  enemyStats: string
};

export function Enemy(props: EnemyType) {
  return (
    <StyledEnemy>
      <EnemyName>{props.enemyName}</EnemyName>
      <EnemyImg src={props.enemyImage}  alt="warrior" />

      <EnemyClass>{props.enemyClass}</EnemyClass>
      <EnemyStats>{props.enemyStats}</EnemyStats>
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

const EnemyStats = styled.p`
  
`