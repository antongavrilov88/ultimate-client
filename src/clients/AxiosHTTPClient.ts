import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AbstractHTTPClient, HTTPClientError } from 'lib/app-logic';

class AxiosHTTPClient extends AbstractHTTPClient<AxiosRequestConfig> {
  constructor(private readonly instance: AxiosInstance) {
    super();
  }

  private makeRequest<Data>(config: AxiosRequestConfig): Promise<AxiosResponse<Data>> {
    return this.instance(config).catch((error) => Promise.reject(new HTTPClientError(error)));
  }

  public makeGetRequest<Data>(config: AxiosRequestConfig): Promise<AxiosResponse<Data>> {
    return this.makeRequest({ method: 'GET', ...config });
  }

  public makePostRequest<Data>(config: AxiosRequestConfig): Promise<AxiosResponse<Data>> {
    return this.makeRequest({ method: 'POST', ...config });
  }

  public makeDeleteRequest<Data>(config: AxiosRequestConfig): Promise<AxiosResponse<Data>> {
    return this.makeRequest({ method: 'DELETE', ...config });
  }

  public makePutRequest<Data>(config: AxiosRequestConfig<any>): Promise<AxiosResponse<Data>> {
    return this.makeRequest({ method: 'PUT', ...config });
  }
}

export { AxiosHTTPClient };
