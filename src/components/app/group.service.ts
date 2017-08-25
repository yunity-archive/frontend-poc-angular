import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GroupDetail} from './app.models';
import "rxjs/add/operator/delay";

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) {}

  list(): Observable<GroupDetail[]> {
    return this.http.get<GroupDetail[]>('https://dev.foodsaving.world/api/groups/').delay(2000);
  }
}
