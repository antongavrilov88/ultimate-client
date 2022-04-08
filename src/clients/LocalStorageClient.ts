import { AbstractStorageClient } from 'lib/app-logic';
import { ListElement } from 'lib/app-logic/types';
import { Nullable } from 'types/utils';

class LocalStorageClient extends AbstractStorageClient {
  public loadByKey<T>(key: string): Promise<Nullable<T>> {
    return new Promise((resolve) => {
      const value = localStorage.getItem(key);
      const resolveValue = value === null ? value : JSON.parse(value);
      resolve(resolveValue);
    });
  }

  public loadMultipleKeys<K extends string[], T extends Record<ListElement<K>, any>>(
    ...keys: K
  ): Promise<T> {
    return Promise.all(keys.map((key) => this.loadByKey(key))) as any;
  }

  public saveByKey(key: string, value: any): Promise<void> {
    return new Promise((resolve) => {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      resolve();
    });
  }

  public removeByKey(key: string): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve();
    });
  }

  public removeMultipleKeys(...keys: string[]): Promise<void> {
    return new Promise((resolve) => {
      Promise.all(keys.map((key) => this.removeByKey(key))).then(() => {
        resolve();
      });
    });
  }
}

export { LocalStorageClient };
