import { setupImplementation, ImplementorType } from '../../lib/app-logic';
import { MainHTTPImplementation } from './HTTPImplementor';

const implementMain = setupImplementation({ [ImplementorType.HTTP]: MainHTTPImplementation });

export { implementMain };
