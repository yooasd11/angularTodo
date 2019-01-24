import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './items/add-item/add-item.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { reducer, IState, INITIAL_STATE } from '../store';
import { Actions } from '../actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [Actions],
  declarations: [ItemsComponent, ItemComponent, AddItemComponent],     // 이 모듈에서 사용하는 컴포넌트
  exports: [ItemsComponent]     // 외부에서도 사용하도록
})
export class TodoModule {
  constructor(ngRedux: NgRedux<IState>) {
    ngRedux.configureStore(
      reducer,
      INITIAL_STATE
    );
  }
 }
