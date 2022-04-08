import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers, Reducer } from 'redux';
import { StatePart } from '../constants';
import { authReducer } from './Auth/reducer';
import { mainReducer } from './Main/reducer';
import { OverallAppReducers, RootState } from './types';

const createRootReducer = (history: BrowserHistory): Reducer<RootState> => {
  const reducers: OverallAppReducers = {
    [StatePart.ROUTER]: connectRouter(history),
    [StatePart.MAIN]: mainReducer,
    [StatePart.AUTH]: authReducer,
  };

  return combineReducers(reducers);
};

export { createRootReducer };
