import { FeatureSelector } from '../../../ducks/types';
import { Hash, Nullable } from 'types/utils';

export interface AdditionalFeatureSelector<ConcreteState> {
  <SelectionResult>(selector: (featureState: ConcreteState) => SelectionResult): SelectionResult;
}

export interface InFeatureSelector<ConcreteState, SelectionResult> {
  (
    featureState: ConcreteState,
    getFromFeature: AdditionalFeatureSelector<ConcreteState>
  ): SelectionResult;
}

export interface SelectFrom {
  <ConcreteState extends Hash, ConcreteStatePart, RootFeature>(
    rootSelector: FeatureSelector<RootFeature, ConcreteState>,
    innerSelector: InFeatureSelector<ConcreteState, ConcreteStatePart>
  ): FeatureSelector<RootFeature, ConcreteState>;
  <ConcreteState extends Hash, ConcreteStatePartKey extends keyof ConcreteState, RootFeature>(
    rootSelector: FeatureSelector<RootFeature, ConcreteState>,
    statePart: ConcreteStatePartKey
  ): FeatureSelector<RootFeature, ConcreteState[ConcreteStatePartKey]>;
}

export interface Getter<RootFeature, ConcreteState> {
  <ConcreteStatePart>(
    innerSelector: InFeatureSelector<ConcreteState, ConcreteStatePart>
  ): FeatureSelector<RootFeature, ConcreteStatePart>;
  <ConcreteStatePartKey extends keyof ConcreteState>(
    statePart: ConcreteStatePartKey
  ): FeatureSelector<RootFeature, ConcreteState[ConcreteStatePartKey]>;
}

export interface CreateGetter {
  <RootFeature, ConcreteState extends Hash>(
    rootSelector: FeatureSelector<RootFeature, ConcreteState>
  ): Getter<RootFeature, ConcreteState>;
}

export interface SafetyGet {
  <Data extends Hash, DataPartKey extends keyof Data>(
    getter: DataPartKey,
    fallback?: Data[DataPartKey]
  ): (data: Nullable<Data>) => Data[DataPartKey];
  <Data extends Hash, DataPart>(getter: FeatureSelector<Data, DataPart>, fallback?: DataPart): (
    data: Nullable<Data>
  ) => DataPart;
}
