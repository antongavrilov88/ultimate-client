import { AbstractHTTPImplementor } from '../../../lib/app-logic/implementors';
import { RegisterRequestData, RegisterResponseData } from '../../../types/app/Auth';
import { AUTH_ENDPOINTS } from '../../../endpoints';
import {
  Backend_RegisterRequestData,
  Backend_RegisterResponseData,
} from '../../../types/backend/Auth';
import { API_TYPES } from '../../../enums/uiEnums';

class LoginHTTPImplementation extends AbstractHTTPImplementor<
  RegisterRequestData,
  RegisterResponseData
> {
  private readonly apiPath = AUTH_ENDPOINTS.LOGIN;

  transformInput: (app_data: RegisterRequestData) => Backend_RegisterRequestData = (app_data) => {
    const transformedData: Backend_RegisterRequestData = {
      type: API_TYPES.AUTH,
      data: {
        attributes: {
          email: app_data.email,
          password: app_data.password,
        },
      },
    };
    return transformedData;
  };

  transformOutput: (server_response: Backend_RegisterResponseData) => RegisterResponseData = (
    server_response
  ) => {
    const transformedData: RegisterResponseData = {
      id: server_response.data.id,
      email: server_response.data.attributes.email,
      token: server_response.data.relationships.token.token,
    };
    return transformedData;
  };

  public implement = async (input: RegisterRequestData): Promise<RegisterResponseData> => {
    const { data } = await this.client.makePostRequest<Backend_RegisterResponseData>({
      url: `${this.apiPath}`,
      data: this.transformInput(input),
    });
    return this.transformOutput(data);
  };
}

export { LoginHTTPImplementation };
