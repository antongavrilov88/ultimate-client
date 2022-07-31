import { LogicFunction } from '../../lib/app-logic/types';
import { LogoutUserRequest, LogoutUserResponse } from 'types/app/Auth';

type Logout = LogicFunction<LogoutUserRequest, LogoutUserResponse>;

export { Logout };
