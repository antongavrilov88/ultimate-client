import { AbstractClientError } from './AbstractClientError';

interface OriginalHTTPError<ErrorData> extends Error {
  response: { data: ErrorData; status: number };
}

class HTTPClientError<ErrorData> extends AbstractClientError<ErrorData> {
  private readonly errorCode: number;

  constructor(private readonly originalError: OriginalHTTPError<ErrorData>) {
    super();
    this.message = this.originalError.message;
    this.errorCode = this.originalError.response.status;
    this.name = 'HTTPClientError';
  }

  public getErrorData(): ErrorData {
    return this.originalError.response.data;
  }

  public getErrorCode(): number {
    return this.errorCode;
  }
}

export { HTTPClientError };
