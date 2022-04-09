import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithThemeProvider } from '../../../test/helpers';
import { Button } from '.';

describe('Button', () => {
  const BUTTON_STRING = 'Button';

  test('Должен рендериться', () => {
    const { getByTestId } = renderWithThemeProvider(<Button>{BUTTON_STRING}</Button>);
    const buttonContainer = getByTestId('component-button');
    expect(buttonContainer).toBeInTheDocument();
  });

  test('Текст должен выводиться через children props', () => {
    const { getByTestId } = renderWithThemeProvider(<Button>{BUTTON_STRING}</Button>);
    const buttonContainer = getByTestId('component-button');
    expect(buttonContainer).toHaveTextContent(BUTTON_STRING);
  });

  test('должна вызывать onClick', () => {
    const fn = jest.fn();
    const { getByTestId } = renderWithThemeProvider(<Button onClick={fn}>{BUTTON_STRING}</Button>);
    const buttonContainer = getByTestId('component-button');
    userEvent.click(buttonContainer);
    expect(fn).toBeCalled();
  });
});
