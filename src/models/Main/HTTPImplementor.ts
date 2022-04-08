import { AbstractHTTPImplementor } from '../../lib/app-logic/implementors';
import { ExampleData, ExampleRequest } from '../../types/Example';

class MainHTTPImplementation extends AbstractHTTPImplementor<ExampleRequest, ExampleData> {
  private readonly apiPath = '/';

  public implement = async (): Promise<ExampleData> => {
    const { data } = await this.client.makeGetRequest<ExampleData>({
      url: `${this.apiPath}`,
    });
    return data;
  };
}

export { MainHTTPImplementation };
