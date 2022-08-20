import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers, Reducer } from 'redux';
import { STATE_PART } from '../shared/constants';
import { authReducer } from './Auth/reducer';
import { mainReducer } from './Main/reducer';
import { OverallAppReducers, RootState } from './types';

const createRootReducer = (history: BrowserHistory): Reducer<RootState> => {
  const reducers: OverallAppReducers = {
    [STATE_PART.ROUTER]: connectRouter(history),
    [STATE_PART.MAIN]: mainReducer,
    [STATE_PART.AUTH]: authReducer,
  };

  return combineReducers(reducers);
};

export { createRootReducer };
