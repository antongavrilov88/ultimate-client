import { UI_THEMES } from 'enums/uiEnums';
import { DefaultTheme } from 'styled-components';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

const mapThemes: Record<UI_THEMES, DefaultTheme> = {
  [UI_THEMES.DARK]: darkTheme,
  [UI_THEMES.LIGHT]: lightTheme,
};

export { mapThemes };
