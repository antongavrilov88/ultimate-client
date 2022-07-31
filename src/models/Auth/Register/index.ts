import { setupImplementation, ImplementorType } from '../../../lib/app-logic';
import { RegisterHTTPImplementation } from './HTTPImplementation';

const implementRegister = setupImplementation({
  [ImplementorType.HTTP]: RegisterHTTPImplementation,
});

export { implementRegister };
