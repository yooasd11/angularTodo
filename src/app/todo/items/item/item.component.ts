import { Component, OnInit } from '@angular/core';

// inline-template / style 옵션으로 작성됨!!
@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox"> 운동하기
  `,
  styles: []
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
