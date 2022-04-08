abstract class AbstractClientError<ErrorData> extends Error {
  abstract getErrorData(): ErrorData;
}

export { AbstractClientError };
