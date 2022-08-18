import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { bindActionCreators, Store } from 'redux';
import { pathOr } from 'ramda';
import { RootAction, RootState } from '../../ducks/types';
import { authActions } from '../../ducks/Auth/actions';
import { STATE_PART } from '../../shared/constants';
import { baseURL } from './baseUrl';

const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const MINIMAL_ERROR_STATUS = 400;
const { resetAuth } = authActions;

const baseInstance = Axios.create({ baseURL });

const setupInterceptors = (apiService: AxiosInstance, appStore: Store<RootState, RootAction>) => {
  const actions = bindActionCreators(
    {
      resetAuth,
    },
    appStore.dispatch
  );
  const onRequestSuccess = (request: AxiosRequestConfig) => {
    const config = request;
    const { token } = appStore.getState()[STATE_PART.AUTH];
    if (config && config.headers && token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  };

  const onResponseSuccess = (response: AxiosResponse) => response;

  const onResponseError = (error: AxiosResponse<AxiosError>) => {
    const status = error.status || pathOr(UNAUTHORIZED_STATUS, ['response', 'status'], error);

    if (
      status > MINIMAL_ERROR_STATUS &&
      status !== UNAUTHORIZED_STATUS &&
      status !== FORBIDDEN_STATUS
    ) {
      throw new Error(JSON.parse(error.request.response).message);
    }

    if (status === UNAUTHORIZED_STATUS || status === FORBIDDEN_STATUS) {
      actions.resetAuth();
    }
  };

  apiService.interceptors.request.use(onRequestSuccess);

  apiService.interceptors.response.use(onResponseSuccess, onResponseError);
};

const init = (store: Store<RootState, RootAction>) => {
  setupInterceptors(baseInstance, store);
};

export { baseInstance, init };
