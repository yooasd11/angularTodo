import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  template: `
  <button (click)="add(newText)">+</button>
  <input type="text" placeholder="할 일 입력" [(ngModel)]="newText">
  `,
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  // Event emitter로 output 발생시키겠다.
  @Output() onItemAdded = new EventEmitter();
  newText: string;
  constructor() { }

  add(newText: string) {
    console.debug("newText : ", newText);
    if (newText.length == 0) {
      return;
    }
    this.onItemAdded.emit(newText);
    this.newText = '';
  }
}
