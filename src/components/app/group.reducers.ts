import {createFeatureSelector, createSelector} from '@ngrx/store';

import {GroupDetail} from './app.models';
import * as fromGroups from './group.actions';

export interface State {
  loading: boolean;
  list: GroupDetail[];
}

const initialState: State = {
  loading: false,
  list: []
};

export function reducer(state = initialState, action: fromGroups.Actions): State {
  switch (action.type) {
    case fromGroups.LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case fromGroups.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    default:
      return state;
  }
}

export const getGroupsState = createFeatureSelector<State>('groups');
export const getGroupListIsLoading = createSelector(getGroupsState, state => state.loading)
export const getGroupList = createSelector(getGroupsState, state => state.list);
