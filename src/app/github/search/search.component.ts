import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result;
  handle: string;
  users: string[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  search(handle: string) {
    this.httpService.getUser(handle).subscribe(
      response => {
        console.debug("sucess : ", response);
        this.result = response;
      },
      error => {
        console.error("error : ", error);
        this.result = error;
      }
    );
  }
}
