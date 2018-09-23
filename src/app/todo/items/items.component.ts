import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-items',    // '#', '.' 등을 이용해 아이디나 클래스 지정 가능, 지금은 그냥 element
  templateUrl: './items.component.html',    // 뷰에 대한 정의
  styleUrls: ['./items.component.css']      // 배열이므로 여러개 가능
})

// 로직을 수행하는 클래스
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
