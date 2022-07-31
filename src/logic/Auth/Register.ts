import { LogicFunction } from 'lib/app-logic/types';
import { RegisterRequestData, RegisterResponseData } from '../../types/app/Auth';

export type Register = LogicFunction<RegisterRequestData, RegisterResponseData>;
