import { routerMiddleware } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from '../ducks/rootReducer';
import { rootSaga } from '../ducks/rootSaga';
import { RootAction, RootState } from '../ducks/types';
import { services } from '../../services';
import { composeEnhancers } from './composeEnhancers';

const configureStore = (history: BrowserHistory): Store<RootState, RootAction> => {
  const rootReducer = createRootReducer(history);

  const sagaMiddleware = createSagaMiddleware({ context: services });

  const middlewares = [routerMiddleware(history), sagaMiddleware];

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore<RootState, RootAction, {}, {}>(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
