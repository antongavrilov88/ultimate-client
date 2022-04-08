import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { fonts } from './fonts';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${fonts};
  

  * {
    font-family: "Nunito", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export { GlobalStyle };
