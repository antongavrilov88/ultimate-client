import { mainAction } from 'ducks/Main/actions';
import { getTheme } from 'ducks/Main/selectors';
import { UI_THEMES } from 'enums/uiEnums';
import { getLocalStorageTheme } from 'helpers/localStorage';
import { configureLocalStorageTheme } from 'helpers/localStorage/configureLocalStorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseTheme } from './types';

const useTheme: UseTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<UI_THEMES>(UI_THEMES.DARK);

  const reduxTheme = useSelector(getTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentTheme(reduxTheme);
  }, [reduxTheme]);

  const setTheme = (theme: UI_THEMES) => {
    configureLocalStorageTheme(theme);
    dispatch(mainAction.setTheme(theme));
  };

  useEffect(() => {
    const localStorageTheme = getLocalStorageTheme() as UI_THEMES;
    if (!localStorageTheme) {
      configureLocalStorageTheme(reduxTheme);
    } else if (localStorageTheme !== reduxTheme) dispatch(mainAction.setTheme(localStorageTheme));
  }, [reduxTheme]);

  return [currentTheme, setTheme];
};

export { useTheme };
