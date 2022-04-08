import { AbstractHTTPClient } from '../clients';
import { AbstractImplementor } from './AbstractImplementor';

abstract class AbstractHTTPImplementor<Input, Output> extends AbstractImplementor<Input, Output> {
  public constructor(protected readonly client: AbstractHTTPClient) {
    super();
  }
}

export { AbstractHTTPImplementor };
