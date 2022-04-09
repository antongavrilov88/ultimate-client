import { EffectProviders } from 'redux-saga-test-plan/providers';

type MockingContextLabel = 'logic' | 'helpers' | 'storage';
type MockedContext = Partial<Record<MockingContextLabel, any>>;

interface GetMockedContext {
  (context: MockedContext): EffectProviders['getContext'];
}

const getMockedContext: GetMockedContext = (context) => (property, next) => {
  const { logic, helpers, storage } = context;
  if (property === 'logic') return logic;
  if (property === 'helpers') return helpers;
  if (property === 'storage') return storage;
  return next();
};

export { getMockedContext };
