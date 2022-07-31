import { LogicFunction } from 'lib/app-logic/types';
import { LoginResponseData, LoginRequestData } from 'types/app/Auth';

export type Login = LogicFunction<LoginRequestData, LoginResponseData>;
