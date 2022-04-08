import { BrowserHistory } from 'history';
import { Store } from 'redux';
import { RootState, RootAction } from 'shared/ducks/types';

export interface RenderApp {
  (store: Store<RootState, RootAction>, history: BrowserHistory): void;
}
