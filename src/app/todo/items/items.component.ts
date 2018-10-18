import { Component, OnDestroy } from '@angular/core';
import { Item, IState } from '../../store';
import { NgRedux } from '@angular-redux/store';
import { Actions } from '../../actions';

@Component({
  selector: 'app-todo-items',    // '#', '.' 등을 이용해 아이디나 클래스 지정 가능, 지금은 그냥 element
  templateUrl: './items.component.html',    // 뷰에 대한 정의
  styleUrls: ['./items.component.css']      // 배열이므로 여러개 가능
})

// 로직을 수행하는 클래스
export class ItemsComponent implements OnDestroy {
  items: Item[];
  subscription;

  constructor(
    private ngRedux: NgRedux<IState>,
    private actions: Actions,
  ) {
    this.subscription = ngRedux.select<Item[]>('items')
      .subscribe(newItems => { 
        this.items = newItems;
        console.debug("size : ", this.items.length);
      })
  }

  toggleDone(item) {
    item.done = !item.done;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addItem(text: string) {
    console.debug("newText : ", text);
    this.ngRedux.dispatch(this.actions.add({ done: false, text: text }))
  }
}
