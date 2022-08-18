import { RouterAction, RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { STATE_PART } from 'shared/constants';
import { AuthState } from './Auth/types';
import { MainState } from './Main/types';

export type RootAction = RouterAction | any;

export interface RootState {
  [STATE_PART.ROUTER]: RouterState;
  [STATE_PART.MAIN]: MainState;
  [STATE_PART.AUTH]: AuthState;
}

export type OverallAppReducers = {
  [ReducerLabel in keyof RootState]: Reducer<RootState[ReducerLabel], any>;
};

export interface FeatureSelector<FeatureState, Result> {
  (featureState: FeatureState): Result;
}

export type AppSelector<T> = FeatureSelector<RootState, T>;

export interface CreateRootGetter {
  <StatePart extends keyof RootState>(part: StatePart): AppSelector<RootState[StatePart]>;
}
