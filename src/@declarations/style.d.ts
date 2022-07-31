import 'styled-components';
import { COLORS, FONT_COLORS } from 'style/labels';
import { PADDINGS } from '../style/labels/paddings';
import { SIZES } from '../style/labels/sizes';
import { BORDER_RADIUSES } from '../style/labels/borderRadiuses';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../style/labels/typography';
import { SPACES } from '../style/labels';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<COLORS, string>;
    fontColors: Record<FONT_COLORS, string>;
    paddings: Record<PADDINGS, string>;
    sizes: Record<SIZES, string>;
    borderRadiuses: Record<BORDER_RADIUSES, string>;
    fonts: Record<FONTS, string>;
    fontSizes: Record<FONT_SIZES, string>;
    lineHeights: Record<LINE_HEIGHTS, number>;
    fontWeights: Record<FONT_WEIGHTS, number>;
    spaces: Record<SPACES, string | number>;
  }
}
