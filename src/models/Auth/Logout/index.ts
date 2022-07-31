import { setupImplementation, ImplementorType } from '../../../lib/app-logic';
import { LogoutHTTPImplementation } from './HTTPImplementation';

const implementLogout = setupImplementation({ [ImplementorType.HTTP]: LogoutHTTPImplementation });

export { implementLogout };
