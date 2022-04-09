import 'styled-components';
import { COLORS, FONT_COLORS } from 'style/labels';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<COLORS, string>;
    fontColors: Record<FONT_COLORS, string>;
  }
}
