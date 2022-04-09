import { FeatureSelector } from '../../../ducks/types';
import { Hash, Nullable } from '../../../types/utils';
import { SafetyGet } from './types';

const safety: SafetyGet =
  <
    HashData extends Hash,
    DataPartKey extends keyof HashData,
    DataPart,
    Fallback extends Exclude<unknown, (...args: any) => any>
  >(
    getterOrFallback: DataPartKey | FeatureSelector<HashData, DataPart>,
    fallback?: Fallback
  ) =>
  (data: Nullable<HashData>) => {
    if (data === null) return fallback === undefined ? null : fallback;

    if (typeof getterOrFallback === 'function') return getterOrFallback(data);
    return (data as HashData)[getterOrFallback as keyof HashData];
  };

export { safety };
