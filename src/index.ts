import { createBrowserHistory } from 'history';
import { configureStore } from './shared/store';
import { renderApp } from './view';

const history = createBrowserHistory();
const store = configureStore(history);

renderApp(store, history);
