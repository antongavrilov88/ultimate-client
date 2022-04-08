import { LogicFunction } from 'lib/app-logic/types';
import { LoginResponseData, LoginRequestData } from 'types/Auth';

export type Login = LogicFunction<LoginRequestData, LoginResponseData>;
