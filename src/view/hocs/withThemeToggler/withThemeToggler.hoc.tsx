import { mainAction } from 'ducks/Main/actions';
import { getTheme } from 'ducks/Main/selectors';
import { SIZEABLE, UI_THEMES } from 'enums/uiEnums';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'view/components/Button';
import { MainWrapper } from './withThemeToggler.styled';

function withThemeToggler<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const currentThemeLabel = useSelector(getTheme);

    const dispatch = useDispatch();

    const themeToggler = useCallback(() => {
      dispatch(
        mainAction.setTheme(currentThemeLabel === UI_THEMES.DARK ? UI_THEMES.LIGHT : UI_THEMES.DARK)
      );
    }, [currentThemeLabel]);

    return (
      <>
        <MainWrapper>
          <Button onClick={themeToggler} size={SIZEABLE.LARGE}>
            Сменить тему
          </Button>
          <Component {...props} />
        </MainWrapper>
      </>
    );
  };

  return WrappedComponent;
}

export { withThemeToggler };
