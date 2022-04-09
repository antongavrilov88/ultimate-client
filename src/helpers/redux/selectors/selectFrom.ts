import { AppSelector } from '../../../ducks/types';
import { Hash } from '../../../types/utils';
import { InFeatureSelector, SelectFrom } from './types';

/**
 * Вспомогательная функция для выбора
 * @param rootSelector - селектор конкретной Feature
 * @param innerSelector - селектор данных внутри выбранной Feature
 */
const selectFrom: SelectFrom =
  <ConcreteState extends Hash, ConcreteStatePart, ConcreteStatePartKey extends keyof ConcreteState>(
    rootSelector: AppSelector<ConcreteState>,
    innerSelector: ConcreteStatePartKey | InFeatureSelector<ConcreteState, ConcreteStatePart>
  ): AppSelector<ConcreteStatePart> | AppSelector<ConcreteState[ConcreteStatePartKey]> =>
  (rootState) => {
    const concreteState = rootSelector(rootState);
    if (typeof innerSelector === 'function') {
      return innerSelector(concreteState, (additionalSelector) =>
        additionalSelector(concreteState)
      );
    }
    return concreteState[innerSelector];
  };

export { selectFrom };
