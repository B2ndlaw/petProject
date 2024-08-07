import styled from "styled-components";
import { theme } from "../../../styles/Theme";


const Button = styled.button`

  width: 135px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid ${theme.colors.secondaryFont};
  transition: ${theme.animations.transition};

  color: ${theme.colors.secondaryFont};
  cursor: pointer;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  
  &:hover{
    border: 2px solid ${theme.colors.primaryFont};
    color: ${theme.colors.primaryFont};
  }

`;

export const S = {
  Button
}



// <button>Button</button>
// <button style="--c: #373B44;--b: 5px;--s:12px">Button</button>

// button {
//   --b: 3px;   /* border thickness */
//   --s: .15em; /* size of the corner */
//   --c: #BD5532;
  
//   padding: calc(.05em + var(--s)) calc(.3em + var(--s));
//   color: var(--c);
//   --_p: var(--s);
//   background:
//     conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--c) 0)
//     var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
//   transition: .3s linear, color 0s, background-color 0s;
//   outline: var(--b) solid #0000;
//   outline-offset: .2em;
// }
// button:hover,
// button:focus-visible{
//   --_p: 0px;
//   outline-color: var(--c);
//   outline-offset: .05em;
// }
// button:active {
//   background: var(--c);
//   color: #fff;
// }

// body {
//   height: 100vh;
//   margin: 0;
//   display: grid;
//   grid-template-columns: auto auto;
//   gap: 20px;
//   place-content: center;
//   background: #DAEDFB;
// }
// button {
//   font-family: system-ui, sans-serif;
//   font-weight: bold;
//   font-size: 4rem;
//   cursor: pointer;
//   border: none;
//   margin: .1em;
// }
