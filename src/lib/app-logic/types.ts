export type ListElement<L extends any[]> = L extends (infer E)[] ? E : never;

export type LogicFunction<Input, Output> = (input: Input) => Promise<Output>;
