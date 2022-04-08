import { ImplementorType } from '../../lib/app-logic/ImplementorType';
import { AbstractMain } from '../../logic/Main';
import { implementMain } from '../../models';
import { baseHTTPClient } from '../../clients';

const main: AbstractMain = {
  main(input) {
    const implementor = implementMain(ImplementorType.HTTP, baseHTTPClient);
    return implementor.implement(input);
  },
};

export { main };
