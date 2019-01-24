import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   // 사용될 태그
  templateUrl: './app.component.html',    // html 파일
  styleUrls: ['./app.component.css']    // 스타일 파일
})
// import 와 export 키워드는 ES6 에서 제공하는 모듈 시스템 지
export class AppComponent {
  today: Date = new Date();
  constructor() {
  }
}
