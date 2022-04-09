import { FeatureSelector } from '../../../ducks/types';
import { Hash } from '../../../types/utils';
import { selectFrom } from './selectFrom';
import { CreateGetter, Getter, InFeatureSelector } from './types';

const createGetter: CreateGetter =
  <RootFeature, ConcreteState extends Hash>(
    rootSelector: FeatureSelector<RootFeature, ConcreteState>
  ): Getter<RootFeature, ConcreteState> =>
  <ConcreteStatePartKey extends keyof ConcreteState, ConcreteStatePart>(
    innerSelector: ConcreteStatePartKey | InFeatureSelector<ConcreteState, ConcreteStatePart>
  ) =>
    selectFrom(rootSelector, innerSelector as any);

export { createGetter };
