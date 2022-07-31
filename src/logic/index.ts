import { AbstractMain } from './Main';
import { AbstractAuth } from './Auth';

export interface AbstractLogic {
  main: AbstractMain;
  auth: AbstractAuth;
}
