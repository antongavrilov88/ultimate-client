import { AbstractImplementor } from '../implementors';
import { AbstractHTTPClient, AbstractStorageClient } from '../clients';
import { ImplementorType } from '../ImplementorType';

interface ImplementorConstructor<Input, Output> {
  new (): AbstractImplementor<Input, Output>;
}

interface ImplementorWithClientConstructor<Input, Output, Client> {
  new (client: Client): AbstractImplementor<Input, Output>;
}

interface SetupImplementationSettings<Input, Output> {
  [ImplementorType.BASIC]?: ImplementorConstructor<Input, Output>;
  [ImplementorType.HTTP]?: ImplementorWithClientConstructor<Input, Output, AbstractHTTPClient>;
  [ImplementorType.LOCAL_STORAGE]?: ImplementorWithClientConstructor<
    Input,
    Output,
    AbstractStorageClient
  >;
}

export interface GetImplementor<Input, Output> {
  (implementorType: ImplementorType.HTTP, client: AbstractHTTPClient): AbstractImplementor<
    Input,
    Output
  >;

  (
    implementorType: ImplementorType.LOCAL_STORAGE,
    client: AbstractStorageClient
  ): AbstractImplementor<Input, Output>;

  (implementorType: ImplementorType.BASIC): AbstractImplementor<Input, Output>;
}

export interface SetupImplementation {
  <Input, Output>(settings: SetupImplementationSettings<Input, Output>): GetImplementor<
    Input,
    Output
  >;
}
