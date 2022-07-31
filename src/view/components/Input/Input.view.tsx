import React, { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
import { ReactComponent as EyeOpenedIcon } from 'assets/icons/eye-opened.svg';
import { ReactComponent as EyeClosedIcon } from 'assets/icons/eye-closed.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';
import { InputProps } from './types';
import { INPUT_TYPES } from '../../../enums/uiEnums';
import { ErrorWrapper, IconWrapper, LabelWrapper, MainWrapper, StyledInput } from './Input.styled';

const InputView: React.FC<InputProps> = ({
  placeholder,
  onChangeHandler,
  hasIcon,
  isPassword,
  customRef,
  error,
  controlledValue,
  label,
  isDisabled,
  onIconClickHandler,
  withTypeToggle,
  ...restProps
}) => {
  const [currentType, setCurrentType] = useState<INPUT_TYPES>();

  const setPasswordType = () => setCurrentType(INPUT_TYPES.PASSWORD);
  const setTextType = () => setCurrentType(INPUT_TYPES.TEXT);

  useEffect(() => {
    if (isPassword) {
      setPasswordType();
    } else {
      setTextType();
    }
  }, [isPassword]);

  const onChangeFn: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const newValue = target.value;
    if (onChangeHandler !== undefined) {
      onChangeHandler(newValue);
    }
  };

  const renderedError = useMemo(() => {
    if (!error) return null;
    return <ErrorWrapper>{error}</ErrorWrapper>;
  }, [error]);

  const renderedTypeToggleIcon = useMemo(() => {
    if (!withTypeToggle) return null;
    if (currentType === INPUT_TYPES.PASSWORD) {
      return (
        <IconWrapper onClick={setTextType}>
          <EyeClosedIcon />
        </IconWrapper>
      );
    }
    if (currentType === INPUT_TYPES.TEXT) {
      return (
        <IconWrapper onClick={setPasswordType}>
          <EyeOpenedIcon />
        </IconWrapper>
      );
    }
    return null;
  }, [withTypeToggle, currentType]);

  const renderedIcon = useMemo(() => {
    if (!hasIcon) return null;
    const onClickFn = () => {
      if (onIconClickHandler && !isDisabled) onIconClickHandler();
    };
    return (
      <IconWrapper onClick={onClickFn} disabled={isDisabled}>
        <SearchIcon />
      </IconWrapper>
    );
  }, [hasIcon, onIconClickHandler, isDisabled]);

  const renderedLabel = useMemo(() => <LabelWrapper>{label}</LabelWrapper>, [label]);

  return (
    <>
      <MainWrapper>
        {renderedLabel}
        <StyledInput
          disabled={isDisabled}
          ref={customRef}
          type={currentType}
          placeholder={placeholder}
          onChange={onChangeFn}
          error={error}
          hasIcon={hasIcon}
          label={label}
          value={controlledValue}
          {...restProps}
        />
        <>{renderedIcon}</>
        <>{renderedTypeToggleIcon}</>
      </MainWrapper>
      {renderedError}
    </>
  );
};

export { InputView };
