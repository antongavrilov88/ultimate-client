import { Store } from 'redux';
import { RootAction, RootState } from 'ducks/types';
import { BrowserHistory } from 'history';

export interface RenderApp {
  (): void;
}
