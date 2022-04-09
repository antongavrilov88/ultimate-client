import { RouterAction, RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { StatePart } from 'shared/constants';
import { AuthState } from './Auth/types';
import { MainState } from './Main/types';

export type RootAction = RouterAction | any;

export interface RootState {
  [StatePart.ROUTER]: RouterState;
  [StatePart.MAIN]: MainState;
  [StatePart.AUTH]: AuthState;
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
