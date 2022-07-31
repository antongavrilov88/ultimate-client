import { AbstractHTTPImplementor } from '../../../lib/app-logic/implementors';
import { LogoutUserRequest, LogoutUserResponse } from '../../../types/app/Auth';
import { AUTH_ENDPOINTS } from '../../../endpoints';

class LogoutHTTPImplementation extends AbstractHTTPImplementor<
  LogoutUserRequest,
  LogoutUserResponse
> {
  private readonly apiPath = AUTH_ENDPOINTS.LOGOUT;

  public implement = async (_input: LogoutUserRequest): Promise<LogoutUserResponse> => {
    const { data } = await this.client.makeDeleteRequest<LogoutUserResponse>({
      url: `${this.apiPath}`,
    });
    return data;
  };
}

export { LogoutHTTPImplementation };
