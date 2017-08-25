import {Action} from '@ngrx/store';
import {GroupDetail} from './app.models';

export const LOAD = '[Groups] Load';
export const LOAD_SUCCESS = '[Groups] Load Success';

export class GroupsLoadAction implements Action {
  readonly type = LOAD;
}

export class GroupsLoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: GroupDetail[]) {
  }
}

export type Actions = GroupsLoadSuccessAction | GroupsLoadAction;
