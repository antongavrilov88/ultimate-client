import { AbstractStorageClient } from '../clients';
import { AbstractImplementor } from './AbstractImplementor';

abstract class AbstractStorageImplementor<Input, Output> extends AbstractImplementor<
  Input,
  Output
> {
  public constructor(protected readonly storageClient: AbstractStorageClient) {
    super();
  }
}

export { AbstractStorageImplementor };
