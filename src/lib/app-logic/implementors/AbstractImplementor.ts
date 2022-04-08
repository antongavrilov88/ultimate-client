import { LogicFunction } from '../types';

abstract class AbstractImplementor<Input, Output> {
  abstract implement: LogicFunction<Input, Output>;
}

export { AbstractImplementor };
