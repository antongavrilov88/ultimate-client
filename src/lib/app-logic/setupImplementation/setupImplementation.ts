import { AbstractHTTPClient, AbstractStorageClient } from '../clients';
import { ImplementorType } from '../ImplementorType';
import { SetupImplementation } from './types';

const setupImplementation: SetupImplementation =
  (settings) =>
  (implementorType: ImplementorType, client?: AbstractHTTPClient | AbstractStorageClient) => {
    const { LOCAL_STORAGE, BASIC, HTTP } = ImplementorType;

    if (implementorType === HTTP && client instanceof AbstractHTTPClient) {
      const { [HTTP]: Implementor } = settings;
      if (Implementor !== undefined) return new Implementor(client);
    }

    if (implementorType === LOCAL_STORAGE && client instanceof AbstractStorageClient) {
      const { [LOCAL_STORAGE]: Implementor } = settings;
      if (Implementor !== undefined) return new Implementor(client);
    }

    if (implementorType === BASIC) {
      const { [BASIC]: Implementor } = settings;
      if (Implementor !== undefined) return new Implementor();
    }

    throw new Error('Unknown implementor type');
  };

export { setupImplementation };
