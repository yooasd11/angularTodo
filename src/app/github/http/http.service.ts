import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseUrl = "https://api.github.com/search/users";

  constructor(private http: HttpClient) { }

  getUser(user) {
    return this.http.get(this.baseUrl, {
      params: {
        q: user
      }
    });
  }
}
