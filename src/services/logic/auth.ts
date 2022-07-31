import { ImplementorType } from '../../lib/app-logic/ImplementorType';
import { implementRegister } from '../../models';
import { AbstractAuth } from '../../logic/Auth';
import { baseHTTPClient } from '../../clients';
import { implementLogin } from '../../models/Auth';
import { implementLogout } from '../../models/Auth/Logout';

const auth: AbstractAuth = {
  register(input) {
    const implementor = implementRegister(ImplementorType.HTTP, baseHTTPClient);
    return implementor.implement(input);
  },
  login(input) {
    const implementor = implementLogin(ImplementorType.HTTP, baseHTTPClient);
    return implementor.implement(input);
  },
  logout(input) {
    const implementor = implementLogout(ImplementorType.HTTP, baseHTTPClient);
    return implementor.implement(input);
  },
};

export { auth };
