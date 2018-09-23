import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemsComponent, ItemComponent],     // 이 모듈에서 사용하는 컴포넌트
  exports: [ItemsComponent]     // 외부에서도 사용하도록
})
export class TodoModule { }
