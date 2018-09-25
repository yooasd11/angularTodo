import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  template: `
  <button (click)="add(newText)">+</button>
  <input type="text" placeholder="할 일 입력" [(ngModel)]="newText">
  `,
  // host 는 컴포넌트 자체를 선택함
  styles: [`
  :host { 
     display: block;
     padding: 16px 16px 16px 10px;
     background-color: white;
  }

  input {
    display: inline-block;
    font-size: 18px;
    border: none;
  }

  input.focus, button.focus {
    outline: none;
  }

  button {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    font-size: 16px;
    line-height: 17px;
    border: 1px solid dimgray;
    background-color: darkblue;
    color: white;
  }
  `]
})
export class AddItemComponent implements OnInit {
  // Event emitter로 output 발생시키겠다.
  @Output() onItemAdded = new EventEmitter();
  newText: string;
  constructor() { }

  ngOnInit() {
  }

  add(newText: string) {
    if (newText.length == 0) {
      return;
    }
    this.onItemAdded.emit(newText);
    this.newText = '';
  }
}
