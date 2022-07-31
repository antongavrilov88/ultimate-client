import { Login } from './Login';
import { Register } from './Register';
import { Logout } from './Logout';

export interface AbstractAuth {
  login: Login;
  register: Register;
  logout: Logout;
}
