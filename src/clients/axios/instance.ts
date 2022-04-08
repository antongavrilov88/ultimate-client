import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { bindActionCreators, Store } from 'redux';
import { pathOr } from 'ramda';
import { RootAction, RootState } from '../../shared/ducks/types';
import { authActions } from '../../shared/ducks/Auth/actions';
import { StatePart } from '../../shared/constants';
import { baseURL } from './baseUrl';

const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const { resetAuthState } = authActions;

const baseInstance = Axios.create({ baseURL });

const setupInterceptors = (apiService: AxiosInstance, appStore: Store<RootState, RootAction>) => {
  const actions = bindActionCreators(
    {
      resetAuthState,
    },
    appStore.dispatch
  );
  const onRequestSuccess = (request: AxiosRequestConfig) => {
    const config = request;
    const { token } = appStore.getState()[StatePart.AUTH];
    if (config && config.headers && token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  };

  const onResponseSuccess = (response: AxiosResponse) => response;

  const onResponseError = (error: AxiosResponse<AxiosError>) => {
    const status = error.status || pathOr(UNAUTHORIZED_STATUS, ['response', 'status'], error);

    if (status === UNAUTHORIZED_STATUS || status === FORBIDDEN_STATUS) {
      actions.resetAuthState();
    }
  };

  apiService.interceptors.request.use(onRequestSuccess);

  apiService.interceptors.response.use(onResponseSuccess, onResponseError);
};

const init = (store: Store<RootState, RootAction>) => {
  setupInterceptors(baseInstance, store);
};

export { baseInstance, init };
