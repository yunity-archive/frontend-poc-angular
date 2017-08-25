import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {GroupsLoadSuccessAction} from './group.actions';
import {GroupService} from './group.service';
import {GroupDetail} from './app.models';
import {of} from 'rxjs/observable/of';
import {LOAD, GroupsLoadAction} from './group.actions';

@Injectable()
export class GroupEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType<GroupsLoadAction>(LOAD)
    .switchMap(() => {
      return this.groupService
        .list()
        .map((groups: GroupDetail[]) => new GroupsLoadSuccessAction(groups))
        .catch(() => of(new GroupsLoadSuccessAction([])));
    });

  constructor(
    private actions$: Actions,
    private groupService: GroupService,
  ) {}
}
