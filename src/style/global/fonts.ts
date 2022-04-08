import { css } from 'styled-components';
import semiBold from '../../static/fonts/Nunito-SemiBold.ttf';
import bold from '../../static/fonts/Nunito-Bold.ttf';
import black from '../../static/fonts/Nunito-Black.ttf';
import regular from '../../static/fonts/Nunito-Regular.ttf';

// noinspection CssUnknownTarget
const fonts = css`
  @font-face {
    font-family: 'Nunito';
    src: url(${regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${semiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${black}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;

export { fonts };
