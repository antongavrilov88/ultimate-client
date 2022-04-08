import { ListElement } from 'lib/app-logic/types';

abstract class AbstractStorageClient {
  public abstract loadByKey<T>(key: string): Promise<T | null>;

  public abstract loadMultipleKeys<K extends string[], T extends Record<ListElement<K>, any>>(
    ...keys: K
  ): Promise<T>;

  public abstract saveByKey(key: string, value: any): Promise<void>;

  public abstract removeByKey(key: string): Promise<void>;

  public abstract removeMultipleKeys(...keys: string[]): Promise<void>;
}

export { AbstractStorageClient };
