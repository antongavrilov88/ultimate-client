import { UI_THEMES } from 'enums/uiEnums';

export interface UseTheme {
  (): [theme: UI_THEMES, setTheme: () => void];
}
