import 'styled-components';
import { COLORS, FONT_COLORS } from 'style/labels';
import { PADDINGS } from '../style/labels/paddings';
import { SIZES } from '../style/labels/sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<COLORS, string>;
    fontColors: Record<FONT_COLORS, string>;
    paddings: Record<PADDINGS, string>;
    sizes: Record<SIZES, string>;
  }
}
