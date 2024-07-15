import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
display: flex;
  justify-content: space-between;
  align-items: center;

position: absolute;
padding: 5px 15px;
bottom: 0;
  width: 100%;
`;

const SocialList = styled.ul`
display: flex;
gap: 30px;
list-style-type: none;
margin: 15px 0;

`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small`
  //font-size: 15px;
`;

export const S = {
Footer, SocialList, SocialItem,  SocialLink, Copyright


}
