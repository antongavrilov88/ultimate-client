import { AbstractLogic } from '../../logic';
import { main } from './main';
import { auth } from './auth';

const logic: AbstractLogic = {
  main,
  auth,
};

export { logic };
