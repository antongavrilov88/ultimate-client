interface AbstractHTTPClientConfig {
  url?: string;
  params?: any;
  data?: any;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
}

abstract class AbstractHTTPClient<
  RequestConfig extends AbstractHTTPClientConfig = AbstractHTTPClientConfig
> {
  public abstract makeGetRequest<Data>(config: RequestConfig): Promise<{ data: Data }>;

  public abstract makePostRequest<Data>(config: RequestConfig): Promise<{ data: Data }>;

  public abstract makePutRequest<Data>(config: RequestConfig): Promise<{ data: Data }>;

  public abstract makeDeleteRequest<Data>(config: RequestConfig): Promise<{ data: Data }>;
}

export { AbstractHTTPClient };
