import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GroupDetail} from './app.models';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromGroups from './group.reducers';
import {getGroupList, getGroupListIsLoading} from './group.reducers';
import {GroupsLoadAction} from './group.actions';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading$: Observable<boolean>;
  list$: Observable<GroupDetail[]>;

  constructor(private store: Store<fromGroups.State>) {
    this.isLoading$ = store.select(getGroupListIsLoading);
    this.list$ = store.select(getGroupList);
  }

  ngOnInit() {
    this.store.dispatch(new GroupsLoadAction());
  }
}
