import 'styled-components';
import { COLORS } from 'style/labels';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<COLORS, string>;
  }
}
