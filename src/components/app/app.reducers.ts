import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromGroups from './group.reducers';

export interface State {
  groups: fromGroups.State;
}

export const reducers: ActionReducerMap<State> = {
  groups: fromGroups.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
