import { LogicFunction } from 'lib/app-logic/types';
import { ExampleData, ExampleRequest } from 'types/Example';

export type Main = LogicFunction<ExampleRequest, ExampleData>;
