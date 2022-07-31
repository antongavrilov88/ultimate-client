import { setupImplementation, ImplementorType } from '../../../lib/app-logic';
import { LoginHTTPImplementation } from './HTTPImplementation';

const implementLogin = setupImplementation({ [ImplementorType.HTTP]: LoginHTTPImplementation });

export { implementLogin };
