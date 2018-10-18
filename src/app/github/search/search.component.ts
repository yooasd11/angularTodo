import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { User } from '../search/response'
import { SearchResponse } from './response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result;
  handle: string;
  users: User[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  search(handle: string) {
    this.httpService.getUser(handle).subscribe(
      (response: SearchResponse) => {
        console.debug("sucess : ", response);
        this.result = response;
        this.users = response.items;
      },
      error => {
        console.error("error : ", error);
        this.result = error;
      }
    );
  }
}
