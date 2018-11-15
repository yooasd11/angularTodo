import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http/http.service';
import { User, IState } from '../../store';
import { SearchResponse } from './response';
import { NgRedux } from '@angular-redux/store';
import { Actions } from 'src/app/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  handle: string;
  users: User[];
  subscription;


  constructor(
    private ngRedux: NgRedux<IState>,
    private actions: Actions,
    private httpService: HttpService
    ) {
    this.subscription = ngRedux.select<User[]>('users')
    .subscribe(
      newUsers => {
        this.users = newUsers;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(handle: string) {
    this.httpService.getUser(handle).subscribe(
      (response: SearchResponse) => {
        console.debug("sucess : ", response);
        this.ngRedux.dispatch(this.actions.search(response.items));
      },
      error => {
        console.error("error : ", error);
      }
    );
  }
}
