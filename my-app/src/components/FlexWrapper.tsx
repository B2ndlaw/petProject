import styled from "styled-components";


type FlexWrapperPropsType = {
  background?: string
}


export const FlexWrapper = styled.section<FlexWrapperPropsType>`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #734343;
  background: ${props=>props.background} center/cover no-repeat;

  width: 100%;
 


`;


