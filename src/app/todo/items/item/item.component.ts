import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../store';

// inline-template / style 옵션으로 작성됨!!
@Component({
  selector: 'app-todo-item',
  template: `
  <input type="checkbox" [checked]="item.done"><label>{{item.text}}</label>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // 부모 컴포넌트로부터 받아옴
  @Input() item: Item
  constructor() { }

  ngOnInit() {
  }

}
